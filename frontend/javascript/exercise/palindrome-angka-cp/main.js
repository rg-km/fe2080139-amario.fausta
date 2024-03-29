/*
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  let pal = [];
  let ans = 0;
  for( let i = 11; i < 500; i ++ ){ 
    let b = '';
    b = String(i)
    b = b.split("")
    b = b.reverse()
    b = b.join("")
    b = parseInt(b)
    console.log(b)
    if (i == b){
        pal.push(i);
    }
  }

  for( let i = 0; i < pal.length; i ++){
    if(num < pal[0]){
      ans = 11
    } 
    else if(num > pal[i] && num < pal[i+1]){
      ans = pal[i+1]
    }
  }

  return ans
} 

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome