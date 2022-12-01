const scoreBoard = document.querySelector(".score-board");
let playerScore = document.getElementById("score");
let compScore = document.getElementById("scoreComp");
let result = document.querySelector(".resultDisplay");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const buttonReset = document.querySelector(".nameReset");
let motivate = document.querySelector(".motivate")

let player = 0;
let comp = 0;

let compChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

let word = (letter) => {
  if (letter === "r") {
    return "Rock";
  } else if (letter === "p") {
    return "Paper";
  } else {
    return "Scissors";
  }
};

let win = (playerChoice, computerChoice) => {
  player++;
  playerScore.innerHTML = player;
  compScore.innerHTML = comp;
  result.innerHTML = ` ${word(playerChoice)} beats ${word(computerChoice)}. You win!!`;
  motivate.innerHTML = `Computer chose ${word(computerChoice)}`;
};
let lose = (playerChoice, computerChoice) => {
  comp++;
  compScore.innerHTML = comp;
  result.innerHTML = ` ${word(playerChoice)} loses to ${word(computerChoice)}. You Lost!!`;
  motivate.innerHTML = `Computer chose ${word(computerChoice)}`;
};
let draw = (playerChoice, computerChoice) => {
  result.innerHTML = ` ${word(playerChoice)} = ${word(computerChoice)}. It's a Draw!!`;
  motivate.innerHTML = `Computer chose ${word(computerChoice)}`;
};

let game = (playerChoice) => {
  const computerChoice = compChoice();
  switch (playerChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(playerChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(playerChoice, computerChoice);
      break;
  }
};

let main = () => {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("p");
  });
  scissor.addEventListener("click", function () {
    game("s");
  });
};
main();

buttonReset.addEventListener("click", () => {
    console.log("button clicked")
    player = 0;
    comp = 0;
    result.innerHTML= `Wanna Play Again?`;
    motivate.innerHTML = `Start!`

});

//var namehi = window.prompt("What is your name?");
//result.innerHTML = `Ready to play ? ${namehi}`;

