/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

let newGameBtn = document.getElementsByClassName("new-game");
let randomNumber = Math.floor(Math.random() * 10) + 1;
let message = document.getElementsByClassName("message");
let displayScore = document.getElementsByClassName("score");
let input = document.getElementsByTagName("input");
let checkBtn = document.getElementsByClassName("check");
let score = 10;

// TODO: answer here
let hiddenNumber = document.getElementsByClassName("number");

checkBtn[0].addEventListener("click", checkNumber);
newGameBtn[0].addEventListener("click", resetGame);
function displayMessage(msg) {
  // TODO: answer here
  message[0].innerText = msg;
}

function resetGame() {
  // TODO: answer here
  displayMessage("Lets start guessing...");
  score = 10;
  hiddenNumber[0].innerText = "?";
  randomNumber = Math.floor(Math.random() * 10) + 1;
  //dilarang menghapus code dibawah ini!
  document.getElementById("hidden-number").innerHTML = randomNumber;
}

function checkNumber() {
  // TODO: answer here
  let userInput = input[0].valueAsNumber;
  if (userInput != randomNumber) {
    if (userInput <= 0 || userInput > 10) {
      displayMessage("Guess any number between 1 and 10");
      score -= 1;
    } else if (userInput < randomNumber) {
      displayMessage("Too small, buddy!");
      score -= 1;
    } else if (userInput > randomNumber) {
      displayMessage("Oww... that's too big!");
      score -= 1;
    }
    displayScore[0].innerText = score;
  } else {
    displayMessage("Yeay! you guessed it!");
    hiddenNumber[0].innerText = randomNumber;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.getElementById("hidden-number").innerHTML = randomNumber;
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById("hidden-number").innerHTML = randomNumber;