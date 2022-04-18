/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer hereconst max = numbers.reduce((acc, curr) => {
    const max = numbers.reduce((acc, curr) => {
      return acc > curr ? acc : curr;
    });
  return max;
};

module.exports = maxFromArray