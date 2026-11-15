# Kalkulator Cicilan

Program kecil untuk menghitung cicilan bulanan dengan bunga flat. Dibuat untuk tugas praktik pipeline CI di mata kuliah Rekayasa Perangkat Lunak.

Rumusnya:

total bunga = pokok x (bunga / 100) x (tenor / 12)
cicilan = (pokok + total bunga) / tenor

Contohnya, pinjaman Rp12.000.000 dengan bunga 12% per tahun selama 12 bulan punya total bunga Rp1.440.000, jadi cicilannya Rp1.120.000 per bulan.

## Cara menjalankan

Butuh Node.js versi 20 atau lebih baru. Dari folder proyek:

npm ci
npm test

## Cara pakai fungsinya

const { hitungCicilan, hitungTotalBunga } = require('./src/cicilan');

hitungCicilan(12000000, 12, 12);    // 1120000
hitungTotalBunga(12000000, 12, 12); // 1440000

Kalau pokok kurang dari atau sama dengan 0, bunga negatif, tenor bukan bilangan bulat positif, atau inputnya bukan angka, fungsi akan melempar error.

## CI

Workflow ada di .github/workflows/ci.yml dan jalan otomatis setiap ada push atau pull request. Isinya checkout kode, pasang Node.js, install dependensi dengan npm ci, lalu jalankan npm test. Hasilnya bisa dilihat di tab Actions di GitHub.
