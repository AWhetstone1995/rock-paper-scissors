/*Create a function that randomly generates rock
paper or scissors for the computer

Create an array that stores rock paper or scissors
as strings and randomly chooses from the array

Create a variable that will store the random value from
computerPlay function

Create a variable that turns user input into the format:
capitalize first letter, lowercase the rest*/

let playerScore = 0;
let computerScore = 0;

const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
const buttons = document.querySelectorAll('input');

function computerPlay() {
    let rpsArray = ['Rock', 'Paper', 'Scissors'];
    let returnValue = '';
    returnValue = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    return returnValue;
}
function playRound(playerSelection, computerSelection) {
    let strCapital = '';
    for(let i = 0; i < playerSelection.length; i++) {
        i === 0 ? (strCapital += playerSelection[i].toUpperCase())
        : (strCapital += playerSelection[i].toLowerCase());
    }
    if(strCapital === computerSelection) return 'Draw';
    else if (strCapital === 'Rock' && computerSelection === 'Paper') {
        computerScore++;
        computer.textContent = `${computerScore}`;
        console.log("You Lose! Paper beats Rock");
    }
    else if (strCapital === 'Rock' && computerSelection === 'Scissors') {
        playerScore++;
        player.textContent = `${playerScore}`;
        console.log("You Win! Rock beats Scissors");
    }
    else if(strCapital === 'Paper' && computerSelection === 'Rock'){
        playerScore++;
        player.textContent = `${playerScore}`;
        console.log("You Win! Paper beats Rock");
    }
    else if(strCapital === 'Paper' && computerSelection === 'Scissors'){
        computerScore++;
        computer.textContent = `${computerScore}`;
        console.log("You Lose! Scissors beat Paper");
    }
    else if(strCapital === 'Scissors' && computerSelection === 'Rock'){
        computerScore++;
        computer.textContent = `${computerScore}`;
        console.log("You Lose! Rock beats Scissors");
    }
    else {
        playerScore++;
        player.textContent = `${playerScore}`;
        console.log("You Win! Scissors beats Paper");
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value, computerPlay());
    })
})
    /*
    let playerSelection = prompt("Rock, Paper or Scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    */
/*
function game() {
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score: " + playerScore + "-" + computerScore);
    }
     
    if (playerScore > computerScore) {
        return "You won the match!";
    }
    else if (playerScore === computerScore) {
        return "Match ended in a draw";
    }
    else {
        return "You lost the match!";
    }
       
}

console.log(game());
*/