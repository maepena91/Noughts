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


//declaring if else statements for each player/box div
let playerOneTurn = true
one.addEventListener("click" , () => {
if (playerOneTurn === true){
    one.classList = 'x'   
    playerOneTurn = false
}else{
    one.classList = 'o'   
    playerOneTurn = true
}})

let player2Turn = true
two.addEventListener("click" , () => {
if (player2Turn === true){
    two.classList = 'x'   
    player2Turn = false
}else{
    two.classList = 'o'   
    player2Turn = true
}})

let player3Turn = true
three.addEventListener("click" , () => {
if (player3Turn === true){
    three.classList = 'x'   
    player3Turn = false
}else{
    three.classList = 'o'   
    player3Turn = true
}})

let player4Turn = true
four.addEventListener("click" , () => {
if (player4Turn === true){
    four.classList = 'x'   
    player4Turn = false
}else{
    four.classList = 'o'   
    player4Turn = true
}})

let player5Turn = true
five.addEventListener("click" , () => {
if (player5Turn === true){
    five.classList = 'x'   
    player5Turn = false
}else{
    five.classList = 'o'   
    player5Turn = true
}})

let player6Turn = true
six.addEventListener("click" , () => {
if (player6Turn === true){
    six.classList = 'x'   
    player6Turn = false
}else{
    six.classList = 'o'   
    player6Turn = true
}})

let player7Turn = true
seven.addEventListener("click" , () => {
if (player7Turn === true){
    seven.classList = 'x'   
    player7Turn = false
}else{
    seven.classList = 'o'   
    player7Turn = true
}})

let player8Turn = true
eight.addEventListener("click" , () => {
if (player8Turn === true){
    eight.classList = 'x'   
    player8Turn = false
}else{
    eight.classList = 'o'   
    player8Turn = true
}})

let player9Turn = true
nine.addEventListener("click" , () => {
if (player9Turn === true){
    nine.classList = 'x'   
    player9Turn = false
}else{
    nine.classList = 'o'   
    player9Turn = true
}})

//button reset

//declaring the winner
function detectWin(){

}
