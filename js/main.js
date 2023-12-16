/*----- constants -----*/
const words = ["father", "mother", "chicken",];

  /*----- state variables -----*/
let answer;
let guessed;
let charArray;
let lives;



/*----- cached elements  -----*/


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
}


function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  randomWord = answer.split('');
}






