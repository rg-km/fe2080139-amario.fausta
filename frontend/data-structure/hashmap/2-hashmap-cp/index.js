// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
  // TODO: replace this
  let str1Map = new Map();
  let str2Map = new Map();
str1 = str1.split("")
str2 = str2.split("")
let n = 1
for(let k of str1){
    if(str1Map.has(k)){
        str1Map.set(k, n + 1)
    }
    else{
        str1Map.set(k, n)
    }
}
for(let k of str2){
      if(str2Map.has(k)){
          str2Map.set(k, n + 1)
      }
      else{
          str2Map.set(k, n)
      }
  }
  for(let k of str1Map){
      var hasilSementara = [];
      if(str1Map.get(k[0]) == str2Map.get(k[0])){
          hasilSementara.push(true)
      }
      else{
          hasilSementara.push(false)
      }

  }
  return hasilSementara[0]
}
console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
  anagramChecker,
};