/*----- constants -----*/
/*--ADD REST OF WORDS WHEN GAME IS FINISHED!!!--*/
const words = ["father", "mother", "chicken"];

/*----- state variables -----*/
let answer;
let guessedLetters;
let charArray;
let lives;
let isGameActive;

/*----- cached elements  -----*/
const livesElem = document.getElementById('lives');
const wordElem = document.getElementById('word');
const keyElem = document.getElementById('keyboard');
const msgBox = document.getElementById('endGameMessage');


/*----- functions -----*/
init();

function init() {
    answer = '';
    guessedLetters = [];
    charArray = [];
    lives = 6;
    isGameActive = true;
    chooseWord();
    keyboardListener();
    enableAllKeys();
    render();
}



function render() {
    
}

function chooseWord() {
    answer = words[Math.floor(Math.random() * words.length)];
    charArray = answer.split('');
}

function keyboardListener() {
  keyElem.addEventListener('click', function(evt) {
      if (isGameActive && evt.target.matches('.key')) {
          handleGuess(evt.target.textContent);
          evt.target.disabled = true;
      }
  });
}

function enableAllKeys() {
    document.querySelectorAll('#keyboard .key').forEach(key => key.disabled = false);
}


    

