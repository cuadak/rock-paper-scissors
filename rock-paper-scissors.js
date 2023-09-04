let player;
let playerSelection = "";
let computer;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function getPlayerChoice(selectedButton) {
  playerSelection = selectedButton;
  const result = document.querySelector("#result");
  let para = document.getElementById("para");

  if (!para) {
    para = document.createElement("p");
    para.id = "para";
    result.appendChild(para);
  }
  getComputerChoice();
  playRound();
}

function getComputerChoice() {
  computer = Math.floor(Math.random() * 3) + 1;
  if (computer == 1) {
    return (computerSelection = "rock");
  } else if (computer == 2) {
    return (computerSelection = "paper");
  } else if (computer == 3) {
    return (computerSelection = "scissors");
  }
}

function playRound() {
  if (playerSelection === computerSelection) {
    para.textContent = `You draw! Because the computer choose ${computerSelection} too.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    para.textContent = `You lose! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    para.textContent = `You win! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    para.textContent = `You win! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    para.textContent = `You lose! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    para.textContent = `You lose! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    para.textContent = `You win! Because the computer choose ${computerSelection}.
    Player : ${playerScore}, Computer : ${computerScore}`;
    gameCount += 1;
  }
  para.style.whiteSpace = "pre-line";
  game();
}

function game() {
  const gameResult = document.createElement("p");
  result.appendChild(gameResult);
  if (playerScore === 5) {
    gameResult.textContent = `You win with total of ${gameCount} games.
    Please refresh or reload the browser if you want restart the game.`;
    const buttons = document.getElementsByClassName("button");
    for (const button of buttons) {
      button.disabled = true;
    }
  } else if (computerScore === 5) {
    gameResult.textContent = `You lose with total of ${gameCount} games.
    Please refresh or reload the browser if you want restart the game.`;
    const buttons = document.getElementsByClassName("button");
    for (const button of buttons) {
      button.disabled = true;
    }
  }
  gameResult.style.whiteSpace = "pre-line";
}
