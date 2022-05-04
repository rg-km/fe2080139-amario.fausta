// Terapkan pow(x, n), yang menghitung x pangkat n (yaitu, x^n)
//
// Contoh 1:
// Input: x = 2.0, n = 10
// Output: 1024.0
//
// Contoh 2:
//
// Input: x = 2.1, n = 3
// Output: 9.261
//
// Example 3:
// Input: n = 2.0, n = -2
// Output: 0.25
// Explanation: 2^-2 = (1/2)^2 = 1/4 = 0.25

function myPow(x, n) {
    if (n === 0) return 1;
    
    let pow = Math.abs(n);
    
    // TODO: answer here
    // TODO: answer here
    let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
    return n < 0 ? 1/result : result;
}

module.exports = { myPow }