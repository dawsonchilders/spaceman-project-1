/*----- constants -----*/
/*--ADD REST OF WORDS WHEN GAME IS FINISHED!!!--*/
const words = ["lunar", "rocket", "quasar"];

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
    lives = 10;
    isGameActive = true;
    chooseWord();
    keyboardListener();
    enableAllKeys();
    render();
}



function render() {
    renderLives();
    updateDisplayedWord();
    checkForWin();
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

function handleGuess(letter) {
    if (!guessedLetters.includes(letter.toLowerCase())) {
        guessedLetters.push(letter.toLowerCase());
        if (!answer.includes(letter.toLowerCase())) {
            lives--;
        }
        render();
    }
}

function renderLives() {
    livesElem.innerHTML = `lives: ${lives}`;
    if (lives === 0) {
        revealAnswer();
        showEndGameMessage(false);
    }
}

function updateDisplayedWord() {
  wordElem.textContent = charArray.map(letter => guessedLetters.includes(letter) ? letter.toLowerCase() : '_').join(' ');
}

function checkForWin() {
if (charArray.every(letter => guessedLetters.includes(letter))) {
    isGameActive = false;
    showEndGameMessage(true);
}
}

function showEndGameMessage(won) {
  isGameActive = false;
  const messageText = won ? 'Congratulations, you won!' : `You Lose, the word was: ${answer}`;
  const endGameText = document.getElementById('endGameText');
  endGameText.textContent = messageText;
  msgBox.style.display = 'block';

  document.getElementById('restartButton').addEventListener('click', function() {
      msgBox.style.display = 'none';

      init();
  });
}

function revealAnswer() {
  wordElem.textContent = answer;
}

