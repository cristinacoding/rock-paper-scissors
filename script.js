// UI
let btnsContainer = document.querySelector("#btnsContainer");
let btnRock = document.querySelector("#btnRock");
let btnPaper = document.querySelector("#btnPaper");
let btnScissors = document.querySelector("#btnScissors");
let humanScoreDiv = document.querySelector("#humanScore");
let computerScoreDiv = document.querySelector("#computerScore");
let roundsUl = document.querySelector("#rounds");
let resultDiv = document.querySelector("#result");

// FUNCTION PLAY GAME
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    humanScoreDiv.innerText = `You: ${humanScore}`;
    computerScoreDiv.innerText = `Computer: ${computerScore}`;

    // FUNCTION PLAY ROUND
    function playRound(humanChoice, computerChoice) {
        let roundResult = "";

        if (humanScore == 5) {
            resultDiv.innerText = "Congrats! You've won against the computer!";
        }
        else if (computerScore == 5) {
            resultDiv.innerText = "Game Over! You've lost against the computer!";
        }
        else {
            if (humanChoice == computerChoice) {
                roundResult = `It's a tie!`;
            } else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")) {
                computerScore++;
                roundResult = `You lose this round! ${computerChoice} beats ${humanChoice}!`;
            } else if ((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Paper" && computerChoice == "Rock") || (humanChoice == "Scissors" && computerChoice == "Paper")) {
                humanScore++;
                roundResult = `You win this round! ${computerChoice} beats ${humanChoice}!`;
            }

            let li = document.createElement("li");
            li.appendChild(document.createTextNode(roundResult));
            roundsUl.appendChild(li);
        }
        
        
        humanScoreDiv.innerText = `You: ${humanScore}`;
        computerScoreDiv.innerText = `Computer: ${computerScore}`;
    }

    // BUTTON CLICK
    btnsContainer.addEventListener("click", handleButtonClick);

    function handleButtonClick(event) {
        let target = event.target;

        if (humanScore >= 5 || computerScore >= 5) {
            btnsContainer.removeEventListener("click", handleButtonClick);
        }
        switch (target.id) {
            case "btnRock":
                playRound("Rock", getComputerChoice());
                break;
            case "btnPaper":
                playRound("Paper", getComputerChoice());
                break;
            case "btnScissors":
                playRound("Scissors", getComputerChoice());
                break;
        }
    }
}
// FUNCTION GET COMPUTER CHOICE
function getComputerChoice() {
    // Used math.random to get a random number between 0,1,2, and assign rock,paper,scissors, so the function returns a random choice
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

playGame();
