// Global Variables
let firstName;
let lastName;

// Inputs
var firstNameInp = document.getElementById("firstName");
var lastNameInp = document.getElementById("lastName");

// Buttons
var randNickBtn = document.getElementById("randNickBtn");
var allNickBtn = document.getElementById("allNickBtn");

// Display
var display = document.getElementById("text-display");

// Arrays
var nicknames = [
  "king",
  "coco",
  "heartbeat",
  "buddy",
  "chief",
  "junior",
  "senior",
];

// Event Listeners
randNickBtn.addEventListener("click", randNickBtnClicked);
allNickBtn.addEventListener("click", allNickBtnClicked);

// Function to generate a random number
function randNum() {
  return Math.floor(Math.random() * nicknames.length);
}

// Event Functions
function randNickBtnClicked() {
  let index = randNum();

  firstName = firstNameInp.value;
  lastName = lastNameInp.value;
  display.innerHTML = `${firstName} ${nicknames[index]} ${lastName}`;
}

function allNickBtnClicked() {
  firstName = firstNameInp.value;
  lastName = lastNameInp.value;
  let allNicknames = "";

  for (let i = 0; i < nicknames.length; i++) {
    allNicknames += `${firstName} ${nicknames[i]} ${lastName}`;
    if (i < nicknames.length - 1) {
      allNicknames += "<br>";
    }
  }

  display.innerHTML = allNicknames;
}
