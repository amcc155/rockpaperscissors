let choices  = ['rock','paper','scissors']
var computerWins = 0
var playerWins = 0

/* declaring buttons for manipulation */
const buttons = document.querySelector('.buttons')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const outcome = document.querySelector('.outcome')
const playAgainBtn = document.createElement('button')
playAgainBtn.innerText = "Play again"
/* end of declaratino */


const resetGame = () =>{
computerWins = 0;
playerWins = 0;


}
playAgainBtn.addEventListener('click', () => {
    resetGame();
    outcome.removeChild(h2);
    outcome.removeChild(playAgainBtn);
    buttons.style.display = 'block'
    
  });

rockBtn.addEventListener('click', ()=>{
    const playerSelection = 'rock'
    const computerSelection = getComputerChoice()
    play(playerSelection,computerSelection)
    }
    )
    
    paperBtn.addEventListener('click', ()=>{
        const playerSelection = 'paper'
        const computerSelection = getComputerChoice()
        play(playerSelection,computerSelection)
        }
        )
         let h2;
        const winner = () => {
            if (playerWins >= 5 || computerWins >= 5) {
              
                h2 = document.createElement('h2');
                h2.innerText = 'Over, would you like to play again';
                outcome.innerHTML = '';
                outcome.appendChild(h2);
                outcome.appendChild(playAgainBtn);
                buttons.style.display = "none"
              }
            }
          
            
        
/* game logic */
const getComputerChoice = () =>{
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


const play = (playerSelection, computerSelection) => {
    outcome.innerHTML = ""
    if (playerSelection === computerSelection) {
        const p = document.createElement('p')
        p.innerText = "You both tied"
        outcome.appendChild(p)
       
    } else {
        if (playerSelection.toLowerCase() === 'rock') {
            if (computerSelection === 'paper') {
                const p = document.createElement('p')
                p.innerText = "You chose " + playerSelection + " vs " + computerSelection + ". You lose";

                outcome.appendChild(p)
                computerWins++
                winner()
                
               
            } else {
                const p = document.createElement('p')
                p.innerText = ('You win')
                outcome.appendChild(p)
                playerWins++
                winner()
                
               
            }

        }
        /* paper seleciton */
        if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                computerWins++
                const p = document.createElement('p')
                p.innerText = 'You lose'
                outcome.appendChild(p)
                winner()
                
               
            } else {
                const p = document.createElement('p')
                p.innerText='You win'
                outcome.appendChild(p)
                playerWins++
                winner()
            
                
            }


        }
        /* scissors selection */
        if (playerSelection.toLowerCase() === 'scissors') {
            if (computerSelection === 'paper') {
                const p = document.createElement('p')
                p.innerText = "You lose"
                outcome.appendChild(p)
                computerWins++
                winner()

        
                
            } else {
                const p = document.createElement('p')
                p.innerText = "You win"
                outcome.appendChild(p)
                playerWins++


                winner()
        
               
               
            }
        }
    }
}




/*end of game logic */



    scissorsBtn.addEventListener('click', ()=>{
        const playerSelection = 'scissors'
        const computerSelection = getComputerChoice()
        play(playerSelection,computerSelection)
        }
        )







