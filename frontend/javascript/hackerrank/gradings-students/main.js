// Grading Students
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  let a = 0;
  let b = 0;
  let k = [];
  let ans = [];
  for (let i = 40; i < 100; i += 5){
    k.push(i)
  }

  for(let i = 0; i < grades.length; i ++){
    for(let j = 0; j < k.length; j ++){
      if(grades[i] > k[j] && grades[i] < k[j] && grades[i] > 40){
        ans.push(grades[i])
      }
    }
  }
  return ans
}

function main() {
  //     var n = parseInt(readLine());
  //     var grades = [];
  //     for(var grades_i = 0; grades_i < n; grades_i++){
  //        grades[grades_i] = parseInt(readLine());
  //     }
  var grades = [73, 67, 38, 33]; // override input
  var result = gradingStudents(grades);
  console.log(result.join("\n"));
}

main(); // execute program

module.exports = gradingStudents