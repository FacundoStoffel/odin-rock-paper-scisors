const game = ["paper", "rock", "scisors"]

function getComputeChoice(){
    let random = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if(random === 0){
        computerChoice = "paper";
    }else if(random === 1){
        computerChoice = "rock";
    }else{
        computerChoice = "scisors";
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
    if()
}

var humanScore = 0;
var computerScore = 0;

console.log(getComputeChoice())
console.log(getHumanChoice())