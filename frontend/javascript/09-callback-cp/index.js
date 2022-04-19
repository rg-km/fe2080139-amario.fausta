// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  let a = str.split("")
  let c = []
  for (let i = 0; i < str.length; i ++){
    c.push(a[i])
    c.push(a[i])
  }
  return c
}  

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let b = []
  let d = cb(str) //double
  for (let k = 0; k < d.length; k ++){
    for (let j = 0; j < num; j ++){
      b.push(d[k])
    }
  }
  b = b.join("")
  return b
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}