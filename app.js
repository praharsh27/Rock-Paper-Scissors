let userScore = 0;
let compScore = 0;

const Choice =document.querySelectorAll(".circle");
const msg = document.querySelector(".msg"); 
const compScores = document.querySelector("#comp-pts");
const youScores = document.querySelector("#user-pts"); 

const gencompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const rdmIdx = Math.floor(Math.random()*3);
    return options[rdmIdx];
}
const draw=()=>{
    console.log("Game is Draw");
    msg.innerText=`Game Draw, Play Again`;
    msg.style.backgroundColor="black";
}

const showWinner = (userWin,circleId,compChoice)=>{
    if(userWin){
        console.log("You Won");
        userScore++;
        youScores.innerText=userScore;
        msg.innerText=`You Won! Your ${circleId} Beats Computer ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScores.innerText=compScore;
        console.log("You Lost");
        msg.innerText=`You Lose, Computer ${compChoice} Beats Your ${circleId}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(circleId)=>{
    console.log("User Choice=",circleId);
    const compChoice = gencompChoice();
    console.log("Comp Choice=",compChoice);

    if(circleId===compChoice)
    {
        draw();
    }
    else{
        let userWin = true;
        if(circleId==="rock")
        {
            userWin = compChoice === "scissors"? true : false;
        }
        else if (circleId ==="paper")
        {
            userWin = compChoice=== "scissors"? false : true;
        }
        else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, circleId,compChoice);
    }
}


Choice.forEach((circle)=>{
    circle.addEventListener("click",()=>{
        const circleId = circle.getAttribute("id");
        playGame(circleId);
    });
});