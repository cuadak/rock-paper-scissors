let player;
let playerSelection;
let computer;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function getPlayerChoice() {
  player = prompt(`What do you choose? Only input rock, paper and scissors`);
  if (player !== null) {
    player = player.toLowerCase();
  }
  if (player === "rock") {
    return (playerSelection = "rock");
  } else if (player === "paper") {
    return (playerSelection = "paper");
  } else if (player === "scissors") {
    return (playerSelection = "scissors");
  } else {
    alert("You entered the wrong input");
    getPlayerChoice();
  }
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
    console.log(`You draw! Because the computer choose ${computerSelection} too.`);
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(`You lose! Because the computer choose ${computerSelection}.`);
    computerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`You win! Because the computer choose ${computerSelection}.`);
    playerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`You win! Because the computer choose ${computerSelection}.`);
    playerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(`You lose! Because the computer choose ${computerSelection}.`);
    computerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You lose! Because the computer choose ${computerSelection}.`);
    computerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You win! Because the computer choose ${computerSelection}.`);
    playerScore += 1;
    console.log(`Player : ${playerScore}, Computer : ${computerScore}`);
  }
}

function game() {
  while (true) {
    getPlayerChoice();
    getComputerChoice();
    playRound();
    gameCount += 1;
    if (playerScore === 5) {
      console.log(`You win with total of ${gameCount} games.`);
      break;
    } else if (computerScore === 5) {
      console.log(`You lose with total of ${gameCount} games.`);
      break;
    }
  }
}

function loadGame() {
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    gameCount = 0;
  }
  console.log("Game Loaded");
  game();
}
