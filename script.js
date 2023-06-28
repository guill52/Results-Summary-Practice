const jsonData = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg",
      'colorClass': "red-font"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg",
      'colorClass': "yellow-font"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg",
      'colorClass': 'green-font'
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg",
      'colorClass':'blue-font',
    }
  ]
  

let resultRows = () => {
    return (document.querySelector('.rows-container').innerHTML = jsonData.map((e)=> {
      let {category, score, icon, colorClass} = e;
      return `
    <div class="result-container">
      <div class="result-row-left">
        <img src="${icon}" alt="">
        <p class="${colorClass}">${category}</p>
      </div>
      <div class="result-row-right">
        <p class="result-row-score"><span class="bold-font">${score} </span>/ 100</p>
      </div>
    </div>

      `
    }).join(''))
}
resultRows()

// =================================================================SCORE CALCULATOR
let totalScore = document.getElementById('score');
let score = 0;

let totalScoreCalc = () =>{
  for(let i = 0; i <jsonData.length; i++){
    score += jsonData[i].score
  }
  totalScore.innerText= `${Math.floor(score / jsonData.length)}`
};

console.log(totalScoreCalc())

// =================================================================Completed Form
let finalSlide = document.querySelector('.form-completed-container');
let closeFormBtn = document.querySelector('.form-close');
let completedBtn = document.querySelector('.continue-btn');

completedBtn.addEventListener('click', function(){
  finalSlide.classList.toggle('active');
})

closeFormBtn.addEventListener('click', function(){
  finalSlide.classList.remove('active')
})