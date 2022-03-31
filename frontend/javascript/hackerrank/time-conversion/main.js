// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  let c = s.substring(0,2);
  let b = parseInt(c);
  console.log(b)
  let d = s.substring(8,9);
  let e = s.substring(2,8);

  if(d == "P"){
    b += 12
    return`${b}${e}`
  }

  if(d == 'A' && b != 12){
      return`${b}${e}`
  }
  else if(d == 'A' && b == 12 ){
      return `00${e}`
  }

}
function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion