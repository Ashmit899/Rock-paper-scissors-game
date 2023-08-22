const game = () => { 
     //initialize scores of player and computer
     
     let user = 0 ; 
     let pc = 0 ;  
     
     //function to start the game
     const startGame = () => {
          const playButton = document.querySelector('.intro button') ; 
          const introScreen = document.querySelector('.intro') ; 
          const match = document.querySelector('.match') ; 

          playButton.addEventListener('click', ()=>{
               introScreen.classList.add('fadeOut') ;

               match.classList.remove('fadeOut') ; 
               match.classList.add('fadeIn') ; 
          })
     }

     //function to play match
     const playMatch = () => {

          const hands = document.querySelectorAll('.hands img') ; 

          hands.forEach(hand =>{
               hand.addEventListener("animationend", function(){
                    this.style.animation = "" ; 
               })
          })
          //get player and computer hands with querySelector
          const playerHand = document.querySelector('.player-hand') ; 
          const computerHand = document.querySelector('.computer-hand')
          //get available options for player-> rock, paper, scissors
          const options = document.querySelectorAll('.options button') ; 
          const computerOptions = ['rock','paper','scissors'] ; 
          const computerNumber = Math.floor(Math.random()*3) ;  
          
          //now loop through each option
               //add event listener to each option
               //call compareHands function with setTimeout
               //update hand images
               options.forEach((option)=>{
                    option.addEventListener('click', function() {
                         const computerNumber = Math.floor(Math.random()*3) ; 
                         const computerChoice = computerOptions[computerNumber] ; 
                         console.log(computerChoice) ; 
                         const playerChoice = this.textContent ;
                         console.log(playerChoice) ; 

                         setTimeout(()=>{
                              playerHand.src = `./assets/${this.textContent}.png` ; 
                              computerHand.src = `./assets/${computerChoice}.png` ; 
                              compareHands(playerChoice,computerChoice) ;
                         },2000) ; 
                         
                         
                         playerHand.style.animation = "shakePlayer 2s ease" ; 
                         computerHand.style.animation = "shakeComputer 2s ease" ; 
                    })
               })
          
     }

     //function to update score
     const updateScore = () => {
          const playerScore = document.querySelector('.player-score p') ; 
          const computerScore = document.querySelector('.computer-score p') ;
          
          playerScore.textContent = user ; 
          computerScore.textContent = pc ; 
     }

     //function to compare hands
     const compareHands = (playerChoice,computerChoice) => {
          //update text to show who won
          const winner = document.querySelector('.winner') ; 

          //check for a tie 
          if (playerChoice === computerChoice) {
               winner.textContent = 'It is a tie.' ; 
               return ; 
          }
          //check for a rock and update score, heading
          if (playerChoice === 'rock'){
               if (computerChoice === 'scissors'){
                    winner.textContent = 'Player Wins' ;
                    user++ ;
                    updateScore() ;  
                    return ;  
               }
               else {
                    winner.textContent = 'Computer Wins' ;
                    pc++ ; 
                    updateScore() ; 
                    return ;  
               }
          }
          //check for a paper and update score, heading
          if (playerChoice === 'paper'){
               if (computerChoice === 'rock'){
                    winner.textContent = 'Player Wins' ;
                    user++ ;
                    updateScore() ; 
                    return ;  
               }
               else {
                    winner.textContent = 'Computer Wins' ; 
                    pc++ ; 
                    updateScore() ; 
                    return ; 
               }
          }
          //check for scissors and update score, heading
          if (playerChoice === 'scissors'){
               if (computerChoice === 'paper'){
                    winner.textContent = 'Player Wins' ;
                    user++ ;
                    updateScore() ; 
                    return ;  
               }
               else {
                    winner.textContent = 'Computer Wins' ;
                    pc++ ;
                    updateScore() ;   
                    return ; 
               }
          }

          updateScore() ; 
     }

     //call all inner functions
     startGame() ; 
     playMatch() ; 
}

game();