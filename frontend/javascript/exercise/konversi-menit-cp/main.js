/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */



function konversiMenit(menit) {
  let a = 0;
  let b = '';
  let c = parseInt(menit/60);
  let d = menit - c*60;
  if(menit <= 59){
    b = `0:${menit}`
  }else if(menit > 59 && d < 10){
    b = `${c}:0${d}`
  }else if(menit > 59 && d > 10){
    b = `${c}:${d}`
  }
  return b
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;