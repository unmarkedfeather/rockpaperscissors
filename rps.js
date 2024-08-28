function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice;
        const validChoices = ["rock", "paper", "scissors"];

        // Continue prompting until a valid input is provided
        while (true) {
            humanChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

            if (validChoices.includes(humanChoice)) {
                break; // Exit the loop if the input is valid
            } else {
                alert("Invalid choice! Please enter rock, paper, or scissors.");
            }
        }

        const computerChoice = getComputerChoice();

        // Determine the winner based on the choices
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "You lose!";
        }
    }

    function getComputerChoice() {
        const cChoice = Math.floor(Math.random() * 3);
        if (cChoice === 0) {
            return "rock";
        } else if (cChoice === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    for (let i = 0; i < 5; i++) {
        const result = playRound();
        console.log("Round " + (i + 1) + " result: " + result);
        console.log("Your score:", humanScore);
        console.log("Computer's score:", computerScore);
        console.log("-----------------------------");
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose.");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
