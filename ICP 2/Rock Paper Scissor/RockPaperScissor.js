function getComputerChoice(){
    var ComputerChoice = Math.random();
    if (ComputerChoice < 0.34){
        ComputerChoice = "Rock";
        document.getElementById("output").innerText = "Rock";
    }
    else if (ComputerChoice < 0.67){
        ComputerChoice = "Paper";
        document.getElementById("output").innerText = "Paper";
    }
    else {
        ComputerChoice = "Scissors";
        document.getElementById("output").innerText = "Scissor";
    }
    return ComputerChoice
}


    function IChooseRock(){
        var dummy = document.getElementById("message");
        var result;
        var Computer = getComputerChoice();
        if(Computer == "Rock"){
            result = "It's a tie!"
        }
        else if (Computer == "Paper"){
            result = "Oh no! You lost"
        }
        else{
            result = "Yay! You won"
        }
        dummy.innerText = result
    }

function IChoosePaper(){
    var dummy = document.getElementById("message");
    var result;
    var Computer = getComputerChoice();
    if(Computer == "Rock"){
        result = "Yay! You won"
    }
    else if (Computer == "Paper"){
        result = "It's a tie!"
    }
    else{
        result = "Oh no! You lost"
    }
    dummy.innerText = result
}


function IChooseScissor(){
        var dummy = document.getElementById("message");
        var result;
    var Computer = getComputerChoice();
    if(Computer == "Rock"){
        result = "Oh no! You lost"
    }
    else if (Computer == "Paper"){
        result = "Yay! You won"
    }
    else{
        result = "It's a tie!"
    }
    dummy.innerText = result

}