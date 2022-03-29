/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
// TODO: answer here

function gatcha(button) {
  switch(button) {
    case 1:
      button = "coba lagi ya"
      break;
    case 2:
      button = "selamat kamu mendapatkan kupon sebanyak 5"
      break;
    case 2:
      button = "selamat kamu mendapatkan kupon sebanyak 10"
      break;
    case 3:
      button = "selamat kamu mendapatkan kupon sebanyak 15"
      break;
    case 4:
      button = "selamat kamu mendapatkan kupon sebanyak 50"
      break;
    case 5:
      button = "selamat kamu mendapatkan kupon sebanyak 100"
      break;
  }
  return button
}

// Create variable button here
let button = (Math.random()*5) + 1;
button = (parseInt(button))
console.log(gatcha(button))

module.exports = gatcha
