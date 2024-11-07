// FUNCTION PLAY GAME
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // FUNCTION PLAY ROUND
    function playRound(humanChoice, computerChoice) {
        let roundResult = "";

        if (humanChoice == computerChoice) {
            roundResult = "Tie!";
        } else if (humanChoice == "rock") {
            switch (computerChoice) {
                case "paper":
                    computerScore++;
                    roundResult = "You lose! Paper beats rock!";
                    break;
                case "scissors":
                    humanScore++;
                    roundResult = "You win! Rock beats scissors!";
                    break;
            }
        } else if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    roundResult = "You win! Paper beats rock!";
                    break;
                case "scissors":
                    computerScore++;
                    roundResult = "You lose! Scissors beats paper!";
                    break;
            }
        } else if (humanChoice == "scissors") {
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    roundResult = "You lose! Rock beats scissors!";
                    break;
                case "paper":
                    humanScore++;
                    roundResult = "You win! Scissors beats paper!";
                    break;
            }
        }
        console.log(roundResult);
    }

    // We pass the selections to the playRound function
    for (let i = 0; i < 5; i++) {
        // Get a new choice for each round
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log("You: " + humanSelection);
        console.log("Computer: " + computerSelection);

        playRound(humanSelection, computerSelection);
    }


    if (humanScore > computerScore) {
        console.log("You win with a score of " + humanScore + " against " + computerScore + "!");
    }
    else if (computerScore > humanScore) {
        console.log("You lose with a score of " + humanScore + " against " + computerScore + "!");
    }
    else {
        console.log("You tied!");
    }

}

// FUNCTION GET COMPUTER CHOICE
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";

    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

// FUNCTION GET HUMAN CHOICE
function getHumanChoice() {
    let humanChoice = "";

    do {
        humanChoice = prompt("Enter rock, paper or scissors!").toLowerCase();
    } while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors");

    return humanChoice;
}

playGame();
