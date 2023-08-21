let winningNumber = 19;
let userInput = +prompt("Guess a Number");

if(winningNumber == userInput){
    console.log("Your guess is right!");
    
}else{
    if(userInput<winningNumber){
        console.log("Too Low!")
    }
    else{
        console.log("Too High")
    }
}