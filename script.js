

function computerPlay(){ //return either "Rock", "Paper", "Scissors"

    let computer_choise = ["Rock", "Paper", "Scissors"];
    computer_choise = computer_choise[Math.floor(Math.random()*computer_choise.length)]; //save one of the elements
    
    return computer_choise;
}

function playRound(player_selection, computer_selection){ //return the winner with the winner selection
  
    let match = {
        winner: 'null',
        message: 'null'
    }
    
    //calculating round winner
    if (player_selection == computer_selection){
        match.winner = "no-one";
    }
    else if (player_selection == "Rock" && computer_selection == "Scissors"){
        match.winner = "player";
    }
    else if(player_selection == "Paper" && computer_selection == "Rock"){
        match.winner = "player";
    }
    else if(player_selection == "Scissors" && computer_selection == "Paper"){
        match.winner = "player";
    }
    else{
        match.winner = "computer"
    }
  
    //selecting winner
    if (match.winner == "no-one"){
        match.message = "No one wins ! This round is a tie";
    }
    else if(match.winner == "player"){
        match.message = `You Win ! ${player_selection} beats ${computer_selection}`;
    }
    else{
        match.message = `You Lose ! ${computer_selection} beats ${player_selection}`;
    }
    
    alert(match.message);
    return match.winner;
}

//initializing variables before match
let roundCount = 0;
let player_score = 0;
let computer_score = 0;

function game()
{
    
    let round_winner = playRound(this.id,computerPlay());   
    if(round_winner=='computer') computer_score++;
    if(round_winner=='player') player_score++;
    
    round_number.textContent = roundCount+1;
    playerScoreId.textContent = player_score;
    computerScoreId.textContent = computer_score;

    
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
        playerScoreId.textContent = 0;
        computerScoreId.textContent = 0;
        round_number.textContent = 0;
        return; //ends the match
    }
}


//select all buttons
buttons = document.querySelectorAll('button');
//add event listener to all buttons
buttons.forEach((arg) => 
    arg.addEventListener('click', game));

const computerScoreId = document.querySelector('#computer-score')
const playerScoreId = document.querySelector('#player-score')
const round_number = document.querySelector('#round-number')