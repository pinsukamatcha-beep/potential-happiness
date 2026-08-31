# Maison Sole — Etalase Sneaker Ikonik

Website statis (HTML/CSS/JS murni, tanpa build tool) yang menampilkan
kisaran harga resmi sneaker Nike, Puma, Salomon, Vans, Dr. Martens, dan
Converse, lengkap dengan pencari toko resmi terdekat berbasis lokasi
perangkat pengguna.

## Menjalankan secara lokal
Cukup buka `index.html` langsung di browser, atau jalankan server statis
sederhana, misalnya:

```
npx serve .
```

## Deploy ke GitHub Pages
1. Push seluruh isi folder ini ke root repository GitHub kamu.
2. Buka Settings → Pages → Source → pilih branch `main` dan folder `/root`.
3. Situs akan tersedia di `https://<username>.github.io/<repo>/`.

## Struktur file
- `index.html` — struktur halaman
- `style.css` — desain visual (tema putih gading / ivory, editorial-luxury)
- `data.js` — data harga sneaker & lokasi toko (sumber tercantum di dalamnya)
- `app.js` — logika render katalog & pencari toko terdekat (geolocation)

## Catatan sumber data
- Harga: situs resmi brand (nike.com/id, id.puma.com, id.salomon.com,
  converse.id) serta reseller resmi/berlisensi (ZALORA Indonesia, JD Sports
  Indonesia, Foot Locker ID, NCR Sport). Kisaran harga per Agustus 2026,
  dapat berubah — tautan "Lihat sumber" di tiap produk mengarah ke halaman
  resminya untuk foto & harga terbaru.
- Toko: hanya mencantumkan gerai yang datanya benar-benar terverifikasi
  (Jakarta, Tangerang, Surabaya, Bandung). Tidak ada lokasi karangan.
- Foto produk sengaja tidak disematkan langsung di halaman (untuk menghormati
  hak cipta foto resmi brand) — setiap kartu produk memberi tautan langsung
  ke sumber resmi yang memuat foto aslinya.
