/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  const initial = 0;

    const output = numbers.reduce((prev, current) => {
        return prev + current
    }, initial);

    /**
     * Output dari fungsi ini hanya dipengharui oleh input saja.
     * Tidak mengubah nilai apapun hanya menghasilkan nilai baru.
     */
    return output;
};

module.exports = sumTotalArray