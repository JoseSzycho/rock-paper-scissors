

function computerPlay(){ //return either "Rock", "Paper", "Scissors"

    let computer_choise = ["Rock", "Paper", "Scissors"];
    computer_choise = computer_choise[Math.floor(Math.random()*computer_choise.length)]; //save one of the elements
    
    return computer_choise;
}

function playRound(player_selection, computer_selection){ //return the round result [x, message y beats z]. 
    //X=0 -> player looses, x=1 -> player wins, x=2 -> it's a tie
    
    let winner = null; //stores the winner of the round
    
    //calculating round winner
    if (player_selection == computer_selection){
        winner = "no-one";
    }
    else if (player_selection == "Rock" && computer_selection == "Scissors"){
        winner = "player";
    }
    else if(player_selection == "Paper" && computer_selection == "Rock"){
        winner = "player";
    }
    else if(player_selection == "Scissors" && computer_selection == "Paper"){
        winner = "player";
    }
    else{
        winner = "computer"
    }

    //returning round result
    if (winner == "no-one"){
        return [2, "No one wins ! This round is a tie"];
    }
    else if(winner == "player"){
        return [1, `You Win ! ${player_selection} beats ${computer_selection}`];
    }
    else{
        return [0, `You Lose ! ${computer_selection} beats ${player_selection}`];
    }
}

//initializing variables before match
let roundCount = 0;
let player_score = 0;
let computer_score = 0;

function game()
{
    round_result = playRound(this.id,computerPlay());
        
    if(round_result[0]==0) computer_score++;
    if(round_result[0]==1) player_score++;
        
    alert(`Round ${roundCount+1} of 5. \n`+round_result[1]+`.\n Your score: ${player_score} \t Computer score: ${computer_score}`);
        
    roundCount+=1;

    if(roundCount >= 5){
        
        if(player_score > computer_score){
            alert("You win the game !")
        }
        else if(player_score < computer_score){
            alert("You lost the game !")
        }
        else{
            alert("The game is a tie !")
        }
        
        //setting variables for new match
        alert("Starting new match !");
        roundCount = 0;
        player_score = 0;
        computer_score = 0;
        return; //ends the match
    }
}


//select all buttons
buttons = document.querySelectorAll('button');
//add event listener to all buttons
buttons.forEach((arg) => 
    arg.addEventListener('click', game));