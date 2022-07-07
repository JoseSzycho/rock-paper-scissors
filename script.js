
function computerPlay(){ //return either "Rock", "Paper", "Scissors"

    let computer_choise = ["Rock", "Paper", "Scissors"];
    computer_choise = computer_choise[Math.floor(Math.random()*computer_choise.length)]; //save one of the elements

    return computer_choise;
}

function playerSelection(){
    
    while(true){

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

console.log(playerSelection());