const words = ["LUNAR", "ROCKET", "QUASAR", "SPACE", "STAR", "PLANET", "BOOSTER", "SATURN", "PLUTO", "NEPTUNE", "MARS", "EARTH", "VENUS"];

const keyboardSound = new Audio('audio/click2.wav');
keyboardSound.volume = 0.5;

const gameMusic = new Audio('audio/bckgrnd.flac');
gameMusic.loop = true;
gameMusic.volume = 0.3;

const endGameButtonSound = new Audio('audio/click.wav');
endGameButtonSound.volume = 0.5;


let answer;
let guessedLetters;
let charArray;
let lives;
let isGameActive;


const livesElem = document.getElementById('lives');
const wordElem = document.getElementById('word');
const keyElem = document.getElementById('keyboard');
const msgBox = document.getElementById('endGameMessage');
const endGameText = document.getElementById('endGameText');


document.getElementById('gameMusic').addEventListener('click', toggleMusic);


init();

function init() {
  answer = '';
  guessedLetters = [];
  charArray = [];
  lives = 10;
  isGameActive = true;
  pickSecretWord();
  keyboardListener();
  enableAllKeys();
  render();
}

function render() {
  renderLives();
  renderDisplayedWord();
  checkForWin();
}

function toggleMusic() {
  if (gameMusic.paused) {
    gameMusic.play();
  } else {
    gameMusic.pause();
  }
}

function pickSecretWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  charArray = answer.split('');
}

function keyboardListener() {
  keyElem.addEventListener('click', function (evt) {
    if (isGameActive && evt.target.matches('.key')) {
      keyboardSound.play();
      handleGuess(evt.target.textContent);
      evt.target.disabled = true;
    }
  });
}

function enableAllKeys() {
  document.querySelectorAll('#keyboard .key').forEach(key => key.disabled = false);
}

function handleGuess(letter) {
  if (!guessedLetters.includes(letter.toUpperCase())) {
    guessedLetters.push(letter.toUpperCase());
    if (!answer.includes(letter.toUpperCase())) {
      lives--;
    }
    render();
  }
}

function renderLives() {
  livesElem.innerHTML = `<span style="color: lime">lives:</span> ${lives}`;
  if (lives === 0) {
    revealAnswer();
    showEndGameMessage(false);
  }
}

function renderDisplayedWord() {
  wordElem.textContent = charArray.map(letter => guessedLetters.includes(letter) ? letter.toUpperCase() : '_').join(' ');
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
  endGameText.textContent = messageText;
  msgBox.style.display = 'block';
  document.getElementById('restartButton').addEventListener('click', function () {
    msgBox.style.display = 'none';
    endGameButtonSound.play();
    gameMusic.pause();
    init();
  });
}

function revealAnswer() {
  wordElem.textContent = answer;
}

