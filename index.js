//Query Selector each div 
const one = document.querySelector('#d1')
const two = document.querySelector('#d2')
const three = document.querySelector('#d3')
const four = document.querySelector('#d4')
const five = document.querySelector('#d5')
const six = document.querySelector('#d6')
const seven = document.querySelector('#d7')
const eight = document.querySelector('#d8')
const nine = document.querySelector('#d9')
const buttonRest = document.querySelector('#buttonReset')

//declaring the winning conditions 
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//determine if the third x or O is a winner
let winner = 0;

//run each element of the array winning conditions
function arrayIndividual(place, symbol)
{
//verify if the place of the combination is in the right symbol which is X or O
    switch (place) {
           case 0:
            if(one.innerHTML === symbol)
            {
                winner ++;
            } 
            break;
                 case 1:
                    if(two.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 2:
                    if(three.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 3:
                    if(four.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 4:
                    if(five.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 5:
                    if(six.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 6:
                    if(seven.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 7:
                    if(eight.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
                case 8:
                    if(nine.innerHTML === symbol)
                    {
                        winner ++;
                    } 
                break;
             
        default:
            break;
    }
  
}

function runArrayWinner(combinationArray, symbol)
{


   winner = 0; 
   //run each element from the combination win
    combinationArray.forEach(x=> arrayIndividual(x, symbol) )
    if(winner == 3)
    {
        if(symbol == 'X')
        { 
            document.getElementById("winningmessage").innerHTML = 'WINNER PAYER ONE'
        }
        else
        {
            document.getElementById("winningmessage").innerHTML = 'WINNER PAYER TWO'
        }
   
    }
}
//Calculating if the player won diagnally, horizontally, or vertically
//symbol is the X or O 
function calculateWinner(symbol){

    //run the possible options of winning
winningConditions.forEach(x=> this.runArrayWinner(x, symbol))


}


//declaring if else statements for each player/box div

//playerTurn is the variable to determine which player is playing
let playerTurn = true;
one.addEventListener("click" , () => {
  
    if (playerTurn === true){
    one.innerHTML = 'X'   
    playerTurn = false

    this.calculateWinner('X')
   
}else{
    one.innerHTML = 'O'  
    
    playerTurn = true
    this.calculateWinner('O')


}


})


two.addEventListener("click" , () => {
if (playerTurn === true){
    two.innerHTML = 'X'  
   
    playerTurn = false
    this.calculateWinner('X')
}else{

    two.innerHTML = 'O'
    
    playerTurn = true
    this.calculateWinner('O')
}


})


three.addEventListener("click" , () => {
if (playerTurn === true){
    three.innerHTML = 'X' 
 
    playerTurn = false
    this.calculateWinner('X')
}else{
    three.innerHTML = 'O'
      
    playerTurn = true
    this.calculateWinner('O')
}

})


four.addEventListener("click" , () => {
if (playerTurn === true){
    four.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    four.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})


five.addEventListener("click" , () => {
if (playerTurn === true){
    five.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    five.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})


six.addEventListener("click" , () => {
debugger
    if (playerTurn === true){
    six.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    six.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})


seven.addEventListener("click" , () => {
if (playerTurn === true){
    seven.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    seven.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})


eight.addEventListener("click" , () => {
if (playerTurn === true){
    eight.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    eight.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})


nine.addEventListener("click" , () => {
if (playerTurn === true){
    nine.innerHTML = 'X'   
    playerTurn = false
    this.calculateWinner('X')
}else{
    nine.innerHTML = 'O'   
    playerTurn = true
    this.calculateWinner('O')
}})

buttonRest.addEventListener("click" , () => {
  
    one.innerHTML = '';
    two.innerHTML = '';
    three.innerHTML = '';
    four.innerHTML = '';
    five.innerHTML = '';
    six.innerHTML = '';
    seven.innerHTML = '';
    eight.innerHTML = '';
    nine.innerHTML = '';
  
    document.getElementById("winningmessage").innerHTML = '';
   playerTurn = true;

})
    

