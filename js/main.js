/*----- constants -----*/
const words = ["father", "mother", "chicken",];

  /*----- state variables -----*/
let answer;
let guessed;
let charArray;
let lives;



/*----- cached elements  -----*/
const livesElem = document.getElementById('lives');

/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
  answer = '';
  guessed = [];
  let charArray = [];
  lives = 6;
  render();
}


function render() {
  renderWord();
  updateLives();
  guessedWord();
  
}


function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  randomWord = answer.split('');
}

function updateLives() {
  livesElem.innerHTML = `You have <span>${lives}</span> ${lives === 1 ? 'life' : 'lives'} left${lives === 0 ? '!' : ''}`;
}


