// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  let ans = [];
  let jwb = [];

  for (let i = 0; i < arr.length; i ++){
    let b = 0;
    for (let k = 0; k < arr.length; k ++){
      if(arr[k] == arr[i]){
        b += 0
      }
      else if(arr[k] != arr[i]){
        b += arr[k]
      }  
    }
    ans.push(b)
  }

  let a = ans[0];
  let c = ans[0];
  for (let i = 1; i < ans.length ; i ++){
    if(a < ans[i]){
      a = a
    }
    else if(a > ans[i]){
      a = ans[i]
    }
  }
  for (let i = 1; i < ans.length ; i ++){
    if(c > ans[i]){
      c = c
    }
    else if(c < ans[i]){
      c = ans[i]
    }
  }
  jwb.push(a)
  jwb.push(c)

  return `${a} ${c}`
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum