/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch

let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let detik = 0;
let menit = 0;
let jam = 0;
let pause = true;

startbtn.addEventListener("click",start);
stopbtn.addEventListener("click",stop);
resetbtn.addEventListener("click",reset);


function start() {
  // TODO: answer here
  if (pause){
    pause = false;
    runTime();
  }
  
}

function stop() {
  // TODO: answer here
  if(pause == false){
    pause = true;
  }
}

function reset() {
  // TODO: answer here
  let detik = 0;
  let menit = 0;
  let jam = 0;
  stopwatch.innerHTML("00:00:00")
}

function runTime() {
  // TODO: answer   here
  if(pause == false){
    detik = parseInt(detik)
    menit = parseInt(menit)
    jam = parseInt(jam)

    detik += 1

    if (detik == 60){
      detik = 0
      menit += 1
    }

    if(menit == 60){
      menit = 0
      jam += 1
    }

    if(detik < 10){
      detik = `0${detik}`
    }
    if(menit < 10){
      menit = `0${menit}`
    }
    if(jam < 10){
      jam = `0${jam}`
    }

    stopwatch.innerHTML = `${jam}:${menit}:${detik}`
    setTimeout("runTime()",1000);
  }
}