//variable for score updation in code

let userScore = 0;
let compScore = 0;

//accessing result div for changing box color and text color

let result = document.querySelector(".result");

//accessing imgs for recording user's choice

let choices = document.querySelectorAll(".choice");

//accessing msg for msg updation

let msg = document.querySelector("#result");

//accessing user's and computer' score for result updation on webpage

let userCount = document.querySelector(".userCount");
let computerCount = document.querySelector(".computerCount");


//to generate and store user's choice

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

//to generate and store computer's choice

let genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//for draw condition

let draw = () => {
    result.innerText = "It's a draw !"
    result.style.backgroundColor = "yellow";
    result.style.color = "brown";
}

//for result of game

let showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        userScore++;
        userCount.innerText = userScore;
        result.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        result.style.color = "white";
    }
    else {
        compScore++;
        computerCount.innerText = compScore;
        result.innerText = `You Lose ! ${compChoice} beats your ${userChoice}`;
        result.style.backgroundColor = "red";
        result.style.color = "white";
    }

};

//game logic

let playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin = true;

        if (userChoice === "Rock") {
            //compChoice can be "scissors" or "paper"
            userWin = compChoice === "Paper" ? false : true;
        }

        else if (userChoice === "Paper") {
            //compChoice can be "rock" or "scissors"
            userWin = compChoice === "Scissors" ? false : true;
        }

        else {
            //compChoice can be "rock" or "scissors"
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }


};
