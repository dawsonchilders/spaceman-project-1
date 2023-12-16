/*----- constants -----*/
const words = ["father", "mother", "chicken",];

  /*----- state variables -----*/
let answer;
let wordGuessed;
let randomWord;
let livesLeft;



/*----- cached elements  -----*/


/*----- event listeners -----*/


/*----- functions -----*/
init();

function init() {
  answer = '';
  wordGuessed = [];
  let randomWord = [];
  livesLeft = 6;
  render();
}


function render() {
  renderWord();
}


function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  randomWord = answer.split('');
}






