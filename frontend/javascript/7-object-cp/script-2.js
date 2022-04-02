// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

let calculator = {
    read: {a: 2,
       b: 3},
    sum (){
        return this.read.a + this.read.b
    },
    substract () {
        return this.read.a - this.read.b
    },
    multiply () {
        return this.read.a * this.read.b
    },
    division () {
        return this.read.a/this.read.b
    }
};
  
calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());