/*----- constants -----*/
/*--ADD REST OF WORDS WHEN GAME IS FINISHED!!!--*/
const words = ["father", "mother", "chicken",];

  /*----- state variables -----*/
  let answer;
  let guessed;
  let charArray;
  let lives;


/*----- cached elements  -----*/
const livesElem = document.getElementById('lives');
const wordElem = document.getElementById('word');
const keyElem = document.getElementById('keyboard');
const msgBox = document.getElementById('endGameMessage')



/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize function to set up the initial state

function init() {
  answer = '';
  guessed = [];
  charArray = [];
  lives = 6;
  renderWord();
  keyboardListener();

  render();
}

// Render the current state to the DOM
render()
function render() {
  
}



// Function to pick a random word

function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  charArray = answer.split('');
}


// Set up keyboard listeners

function keyboardListener() {
  keyElem.addEventListener('click', function(evt) {
    if (evt.target.matches('.key')) {
      renderGuess(evt.target.textContent);
      evt.target.disabled = true;
    }
  })
}


// Process a guessed letter

function renderGuess(letter) {
  if (!guessed.includes(letter.toLowerCase())) {
    guessed.push(letter.toLowerCase());
    if (!answer.includes(letter.toLowerCase())) {
      lives --;
    }
    render();
  }
}


// Get displayed word

function getWord() {
  return charArray.map(letter => guessed.includes(letter.toLowerCase()) ? letter.toLowerCase() : '_').join(' ');
} 

















