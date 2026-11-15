const { hitungCicilan, hitungTotalBunga } = require('../src/cicilan');

describe('hitungCicilan', () => {
  test('pinjaman 12 juta, bunga 12%, tenor 12 bulan', () => {
    expect(hitungCicilan(12000000, 12, 12)).toBeCloseTo(1120000, 2);
  });

  test('pinjaman 5 juta, bunga 10%, tenor 6 bulan', () => {
    expect(hitungCicilan(5000000, 10, 6)).toBeCloseTo(875000, 2);
  });

  test('bunga 0% hanya pokok dibagi tenor', () => {
    expect(hitungCicilan(6000000, 0, 12)).toBeCloseTo(500000, 2);
  });

  test('tenor 1 bulan', () => {
    expect(hitungCicilan(1000000, 12, 1)).toBeCloseTo(1010000, 2);
  });

  test('hasil dibulatkan dua angka di belakang koma', () => {
    expect(hitungCicilan(1000000, 10, 7)).toBeCloseTo(151190.48, 2);
  });
});

describe('hitungTotalBunga', () => {
  test('12 juta, bunga 12%, 12 bulan', () => {
    expect(hitungTotalBunga(12000000, 12, 12)).toBeCloseTo(1440000, 2);
  });

  test('bunga 0% hasilnya 0', () => {
    expect(hitungTotalBunga(6000000, 0, 12)).toBe(0);
  });
});

describe('input tidak valid', () => {
  test('pokok negatif', () => {
    expect(() => hitungCicilan(-1000000, 12, 12)).toThrow();
  });

  test('pokok nol', () => {
    expect(() => hitungCicilan(0, 12, 12)).toThrow();
  });

  test('bunga negatif', () => {
    expect(() => hitungCicilan(1000000, -5, 12)).toThrow();
  });

  test('tenor nol', () => {
    expect(() => hitungCicilan(1000000, 12, 0)).toThrow();
  });

  test('tenor pecahan', () => {
    expect(() => hitungCicilan(1000000, 12, 2.5)).toThrow();
  });

  test('pokok berupa teks', () => {
    expect(() => hitungCicilan('1000000', 12, 12)).toThrow();
  });
});
