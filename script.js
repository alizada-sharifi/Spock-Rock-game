import { startConfetti, removeConfetti, stopConfetti } from "./confetti.js";
const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");
const resetIcon = document.querySelector(".reset-icon");
const playerRock = document.querySelector("#playerRock");
const playerScissors = document.querySelector("#playerScissors");
const playerPaper = document.querySelector("#playerPaper");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");
const computerRock = document.querySelector("#computerRock");
const computerScissors = document.querySelector("#computerScissors");
const computerPaper = document.querySelector("#computerPaper");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");
const allGameIcons = document.querySelectorAll(".fa-regular");
let computerChoice = "";
let playerScoreNumber = 0;
let computerScoreNumber = 0;
// =================================== rules
const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
// =============================== function for player choice
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = "--- Scissors";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
    default:
      break;
  }
}
window.select = select;
// =================== function for computer choice
function computerRandoChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "lizard";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "scissors";
  } else {
    computerChoice = "spock";
  }
}
function displayComputerChoice() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = "--- Scissors";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
    default:
      break;
  }
}
// ============== function for scores
function updateScores(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
    resultText.style.color = "#2196F3";
    stopConfetti();
    removeConfetti();
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      resultText.textContent = "You Won!";
      resultText.style.color = "#4CAF50";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
      startConfetti();
    } else {
      resultText.textContent = "You Lost!";
      resultText.style.color = `#D32F2F`;
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
      stopConfetti();
      removeConfetti();
    }
  }
}
// ============= function for result
function checkResult(playerChoice) {
  resetSelected();
  computerRandoChoice();
  displayComputerChoice();
  updateScores(playerChoice);
}
// ==================== function for reset every things
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}
resetIcon.addEventListener("click", resetAll);
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";
  resultText.textContent = "";
  resetSelected();
  stopConfetti();
  removeConfetti();
}
resetAll();
window.resetAll = resetAll;
