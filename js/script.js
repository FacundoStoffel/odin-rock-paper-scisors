const game = ["paper", "rock", "scisors"]

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if(random === 0){
        computerChoice = "paper";
    }else if(random === 1){
        computerChoice = "rock";
    }else{
        computerChoice = "scissors";
    }
    return computerChoice;
};

function getHumanChoice() {
    var humanChoice = prompt("Indique con qué va a jugar: paper, rock o scissors");
    humanChoice = humanChoice.toLowerCase();
    
    while (humanChoice !== "paper" && humanChoice !== "rock" && humanChoice !== "scissors") {
        alert("Indique un valor correcto: paper, rock o scissors");
        humanChoice = prompt("Indique con qué va a jugar: paper, rock o scissors").toLowerCase();
    }
    
    return humanChoice;
};

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Ganaste! El papel vence a la roca");
    }else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Ganaste! La roca vence a las tijeras");
    }else if( humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Ganaste! Las tijeras vencen al papel");
    }else if(humanChoice === computerChoice){
        console.log("Es un empate!");
    }else{
        console.log(`Perdiste! El ${computerChoice} vence al ${humanChoice}`)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

var humanScore = 0;
var computerScore = 0;

console.log(computerSelection)

playRound(humanSelection, computerSelection)
