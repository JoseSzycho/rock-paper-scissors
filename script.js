
function computerPlay(){ //return either "Rock", "Paper", "Scissors"

    let computer_choise = ["Rock", "Paper", "Scissors"];
    computer_choise = computer_choise[Math.floor(Math.random()*computer_choise.length)]; //save one of the elements
    
    return computer_choise;
}

function playerSelection(){ //return the player selection
    
    while(true){ //keeps prompting till the selection is accepted
        
        player_selection = prompt("Select option: \n1. Rock \n2. Paper \n3. Scissors");
        switch (player_selection){
            case "1": return "Rock";
            case "2": return "Paper";
            case "3": return "Scissors";
            default:
                alert("Wrong selection. Choose again.")
        }
    } 

}

function playRound(player_selection, computer_selection){ //return the round result
    
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
        return "No one wins ! This round is a tie";
    }
    else if(winner == "player"){
        return `You Win ! ${player_selection} beats ${computer_selection}`;
    }
    else{
        return `You Lose ! ${computer_selection} beats ${player_selection}`;
    }
}

console.log(playRound(playerSelection(),computerPlay()))