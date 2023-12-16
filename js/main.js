/*----- constants -----*/
/*--ADD REST OF WORDS WHEN GAME IS FINISHED!!!--*/
const words = ["father", "mother", "chicken",];

  /*----- state variables -----*/
  let answer;
  let guessed;
  let charArray;
  let lives;


/*----- cached elements  -----*/
const keyElem = document.getElementById('keyboard');


/*----- event listeners -----*/


/*----- functions -----*/
init();

// Initialize function to set up the initial state

function init() {
  answer = '';
  guessed = [];
  lives = 6;
  renderWord();
  keyboardListeners();
  render();
}

// Function to pick a random word

function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  charArray = answer.split('');
}


// Set up keyboard listeners

function keyboardListeners() {
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



// Render the current state to the DOM

function render() {
  
}



// Update the displayed word
function guessedWord() {}






// Update the lives

function livesLeft() {}




// Get the displayed word

function getWord() {}



// Check for win/lose

function winOrLose() {}


// Handle end of game

function gameOver() {}



