/*
Buatlah sebuah program untuk melakukan cek pada plat nomer yang ada
Setiap plat nomer di pisahkan oleh karakter ";"
- jika paramater kosong maka akan menampilkan "invalid data"
- jika paramater merupakan string kosong maka akan menampilkan "plat tidak ditemukan"
- jika paramater terdapat plat ganjil dan tidak ada plat genap maka akan menampilkan "plat ganjil sebanyak <jumlah plat> dan plat genap tidak ditemukan"
- jika paramater terdapat plat genap dan tidak ada plat ganjil maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil tidak ditemukan"
- jika paramater terdapat plat ganjil maupun genap maka akan menampilkan "plat genap sebanyak <jumlah plat> dan plat ganjil sebanyak <jumlah plat>"
*/

function ganjilGenap(plat) {
  // TODO: answer here
  let gnjl = 0;
  let gnp = 0;
  let a = '';

  if(typeof(plat) == "string" && plat != ''){
    for (let i = 1; i < plat.length ; i ++){
      if(plat[i] == ";" && (parseInt(plat[i-1]) % 2 == 0)){
          gnp ++
      }
      else if(plat[i] == ";" && (parseInt(plat[i-1]) % 2 != 0)){
          gnjl ++
      }
    }
    if(plat[plat.length - 1] % 2 != 0){
      gnjl ++
    }
    else if(plat[plat.length - 1] % 2 == 0){
      gnp ++
    }
    
    if (gnp == 0){
      a =  `plat ganjil sebanyak ${gnjl} dan plat genap tidak ditemukan`;
    }
    else if (gnjl == 0){
      a = `plat genap sebanyak ${gnp} dan plat ganjil tidak ditemukan`;
    }else if (gnjl != 0 && gnp != 0) {
      a =  `plat genap sebanyak ${gnp} dan plat ganjil sebanyak ${gnjl}`; 
    }
    return a
     

  }else if(plat == ''){
    return "plat tidak ditemukan"
  }else if(typeof(plat) != "string"){
    return "invalid data"
  }


}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data

module.exports = ganjilGenap