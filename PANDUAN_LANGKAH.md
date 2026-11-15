# Panduan langkah

Tujuannya dapat satu run gagal dan satu run sukses di GitHub Actions. Folder versi-bug dan versi-fix cuma bahan bantu, jangan ikut di-push.

## Persiapan

1. Buat repository baru di GitHub, misalnya kalkulator-cicilan.
2. Ekstrak ZIP ini, lalu pindahkan folder versi-bug dan versi-fix ke luar folder proyek.
3. Di folder proyek jalankan:

git init
git branch -M main
git remote add origin https://github.com/USERNAME/kalkulator-cicilan.git

Ganti USERNAME dengan username GitHub kamu.

## Run gagal

File src/cicilan.js yang sekarang masih berisi versi bug, jadi beberapa test akan gagal. Push dulu:

git add .
git commit -m "tambah kalkulator cicilan dan workflow CI"
git push -u origin main

Buka tab Actions di repository, run-nya akan merah. Screenshot, dan simpan URL run-nya. Buka juga log di langkah npm test dan catat test mana yang gagal beserta nilai yang diharapkan dan yang didapat. Contohnya, test pinjaman 12 juta mengharapkan 1.120.000 tapi hasilnya 2.440.000.

Penyebabnya, tenor dalam bulan langsung dikalikan ke bunga tahunan tanpa dibagi 12.

## Run sukses

Ganti isi src/cicilan.js dengan isi versi-fix/cicilan.js. Cek dulu di lokal:

npm test

Kalau semua lulus, push:

git add src/cicilan.js
git commit -m "perbaiki konversi tenor bulan ke tahun di rumus bunga"
git push

Buka tab Actions lagi, run barunya hijau. Screenshot dan simpan URL-nya.

## Yang dikumpulkan

Sesuai slide 35: tautan repository dan file workflow, screenshot atau URL run pipeline (satu gagal, satu sukses), ringkasan error dan langkah perbaikannya, dan README singkat (sudah ada).

Kalau perlu untuk laporan, perbaikan ini masuk corrective maintenance. Severity tinggi karena fungsi utamanya salah hitung, prioritasnya P1.
