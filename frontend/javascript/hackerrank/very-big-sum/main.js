// A Very Big Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  let a = 0;
  for (let i = 0; i < ar.length; i ++){
    a += ar[i]
  }
  return a
}

function main() {
  var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; // override input
  var result = aVeryBigSum(ar);
  console.log(result);
}

main(); // execute program

module.exports = aVeryBigSum