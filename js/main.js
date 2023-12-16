/*----- constants -----*/
/*--ADD REST OF WORDS WHEN GAME IS FINISHED!!!--*/
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

// Initialize function to set up the initial state

function init() {
  answer = '';
  guessed = [];
  lives = 6;
  renderWord();
  render();
}

// Function to pick a random word

function renderWord() {
  answer = words[Math.floor(Math.random() * words.length)];
  charArray = answer.split('');
}


// Set up keyboard listeners





// Process a guessed letter





// Render the current state to the DOM

function render() {
  renderWord();
}



// Update the lives






// Get the displayed word





// Check for win/lose




// Handle end of game





