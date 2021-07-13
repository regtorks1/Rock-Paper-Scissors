const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
     return userInput
   }
   else{
     console.log('Error!')
   }
}
//console.log(getUserChoice('rock'));

const getComputerChoice= () =>{
  let randomNumber = Math.floor(Math.random() * 3)
   if (randomNumber === 0){
     return 'rock';
   }
   else if (randomNumber === 1){
     return 'paper';
   }
   else if (randomNumber === 2){
     return 'scissors';
   }
   else {
     return 'Error!';
   }
}
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'User has won'
  }
  if (userChoice === computerChoice){
    return 'The game is a Tie'
  }
  if(userChoice === 'rock'){
  if(computerChoice === 'paper'){
    return 'Computer has won'
  }
  else{
    return 'User has won'
   }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
    return 'Computer has won'
  }
  else {
    return 'User has won'
  }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === 'paper'){
    return 'User has won'
  }
  else {
    return 'Computer has won'
  }
  }
  };

// console.log(determineWinner('scissors', 'rock'))

const playGame = () => {
 const userChoice = getUserChoice('bomb');
 const computerChoice = getComputerChoice();
 console.log('You threw: ' + userChoice);
 console.log('The computer threw: ' + computerChoice);
 console.log(determineWinner(userChoice, computerChoice))
}

playGame();