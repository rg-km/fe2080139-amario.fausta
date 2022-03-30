// Breaking the Records
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  let a = scores[0];
  let b = scores[0];
  let kecil = 0;
  let besar = 0;
  let arrrr = [];
  for(let i = 1; i < scores.length ; i ++){
    if(a < scores[i]){
      besar ++
      a = scores[i]
      console.log(a)
    }
    if( b > scores[i]){
      kecil ++
      b = scores[i]
    }
  }
  arrrr.push(besar);
  arrrr.push(kecil)
  return arrrr
}

function main() {
  //     var n = parseInt(readLine());
  //     s = readLine().split(' ');
  //     s = s.map(Number);
  var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]; // override input
  var result = breakingRecords(scores);
  console.log(result.join(' ') + '\n')

}

main(); // execute program

module.exports = breakingRecords