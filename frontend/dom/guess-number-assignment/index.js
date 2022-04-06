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

// TODO: answer here
let newGameBtn = document.getElementsByClassName("btn btn-warning new-game");
let randomNumber = document.getElementsByClassName("number");
let message = document.getElementsByClassName("message");
let displayScore = document.getElementsByClassName("score");
let input = document.getElementsByClassName("input");
let checkBtn = document.getElementsByClassName("btn btn-primary check");
let score = document.getElementsByClassName("score");


randomNumber = (Math.floor(Math.random()*10))
function displayMessage(msg) {
  // TODO: answer here
  if (input == randomNumber){
    msg = "benar"
    message.innerHTML(msg)
  }
  else if (input < randomNumber){
    msg = "kurang besar"
    message.innerHTML(msg)
  }
  else if(input > randomNumber){
    msg = "kurang kecil"
    message.innerHTML(msg)
  }
}

function resetGame() {
  // TODO: answer here
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber