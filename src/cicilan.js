// Kalkulator cicilan dengan bunga flat.
// cicilan = (pokok + total bunga) / tenor, bunga dihitung per tahun.

function cekInput(pokok, bunga, tenor) {
  if (typeof pokok !== 'number' || Number.isNaN(pokok) || pokok <= 0) {
    throw new Error('Pokok pinjaman harus angka dan lebih dari 0');
  }
  if (typeof bunga !== 'number' || Number.isNaN(bunga) || bunga < 0) {
    throw new Error('Bunga harus angka dan tidak boleh negatif');
  }
  if (!Number.isInteger(tenor) || tenor <= 0) {
    throw new Error('Tenor harus bilangan bulat lebih dari 0');
  }
}

function bulatkan(angka) {
  return Math.round(angka * 100) / 100;
}

function hitungTotalBunga(pokok, bunga, tenor) {
  cekInput(pokok, bunga, tenor);
  return bulatkan(pokok * (bunga / 100) * (tenor / 12));
}

function hitungCicilan(pokok, bunga, tenor) {
  cekInput(pokok, bunga, tenor);
  const totalBunga = pokok * (bunga / 100) * (tenor / 12);
  return bulatkan((pokok + totalBunga) / tenor);
}

module.exports = { hitungCicilan, hitungTotalBunga };
