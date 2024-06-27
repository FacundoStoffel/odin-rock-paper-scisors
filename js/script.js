//funcion para que la computadora saque una jugada aleatoria
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (random === 0) {
        computerChoice = "paper";
    } else if (random === 1) {
        computerChoice = "rock";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
};

//funcion para pedir al jugador haga una jugada 
function getHumanChoice() {
    var humanChoice = prompt("Indique con qué va a jugar: paper, rock o scissors");
    humanChoice = humanChoice.toLowerCase();

    while (humanChoice !== "paper" && humanChoice !== "rock" && humanChoice !== "scissors") {
        alert("Indique un valor correcto: paper, rock o scissors");
        humanChoice = prompt("Indique con qué va a jugar: paper, rock o scissors").toLowerCase();
    }

    return humanChoice;
};

//funcion para jugar una partida contra la computadora
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Ganaste! El papel vence a la roca");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Ganaste! La roca vence a las tijeras");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Ganaste! Las tijeras vencen al papel");
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Es un empate!");
    } else {
        console.log(`Perdiste! El ${computerChoice} vence al ${humanChoice}`);
        computerScore++;
    }
};

var humanScore = 0;
var computerScore = 0;

//funcion para hacer una juego de 5 rondas
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Tu puntaje ${humanScore} // Computadora ${computerScore}`);
    };
    if(humanScore > computerScore){
        console.log("Felicidades Ganaste el juego!")
    }else if(humanScore < computerScore){
        console.log("Perdiste el juego :(")
    }else{
        console.log("Fue un empate!")
    };
};

playGame();