// Mencari nilai maksimum bilangan yang berurutan yang ada di dalam array
//
// contoh:
// [-1, 2, 3, -9, 11] == 11, nilai maksimum bilangan berurutan adalah 11 (bilangan terakhir), karena bilangan2 lainnya jika dijumlahkan tidak lebih besar dari 11
// [-2, -1, 1, 2] == 3, nilai maksimum bilangan berurutan adalah 3 (2 bilangan terakhir), karena bilangan2 lainnya jika dijumlahkan tidak lebih besar dari 3
// [100, -9, 2, -3, 5] == 100, nilai maksimum bilangan berurutan adalah 100 (bilangan pertama), karena bilangan2 lainnya jika dijumlahkan tidak lebih besar dari 100
// [1, 2, 3] == 6, nilai maksimum bilangan berurutan adalah 6 (semua bilangan), karena semua bilangan positif dan berurutan, sehingga nilai maksimumnya 6
// [2,  -1, 2, 3, -9] == 6, nilai maksimum bilangan berurutan adalah 6 (penjumlahan dari 2 + (-1) + 2 + 3), lebih besar dari penjumlahan urutan bilangan lainnya
// [-1, -2, -3] == 0, jika semua bilangan negatif, kita bisa mengembalikan nilai 0 


let numInput = prompt("Masukan urutan bilangan dengan pemisah spasi:");
let arr = numInput.split(" ").map(Number);

// jika tidak ada elemen dalam array, jika semua bilangan negatif, dapat mengembalikan nilai 0

// TODO: answer here
a = arr;
let b = a[0];
let maxSum = 0;
let minus = 0;
for (let i = 1; i < a.length; i ++){
  if(b > a[i]){
    b = b;
  }
  else if(b < a[i]){
    b = a[i]
  }
}

let jml = [];
for (let i = 0; i < a.length - 1; i ++){
  let jmlh = a[i];
  for(let k = i+1; k < a.length; k ++ ){
    jmlh += a[k];
    jml.push(jmlh);
  } 
}

let c = jml[0];
for (let i = 1; i < jml.length; i ++){
  if(c > jml[i]){
    c = c;  
  }
  else if(c < jml[i]){
    c = jml[i]
  }
}

if(c > b){
  maxSum = c;  
}
else if(b > c){
  maxSum = b;
}

for (let i = 0; i < a.length - 1; i ++){
  if(a[i] >= 0){
    minus = 1
  }
}



if(minus == 0){
  maxSum = 0
}else{ maxSum = maxSum}
console.log(maxSum)



console.log(maxSum);
