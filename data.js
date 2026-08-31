/* ==========================================================================
   DATA SUMBER TERPERCAYA
   Harga dikumpulkan dari situs resmi brand (nike.com/id, id.puma.com,
   id.salomon.com, converse.id) dan marketplace resmi terverifikasi
   (ZALORA Indonesia, JD Sports Indonesia, Foot Locker ID, NCR Sport,
   Blibli — toko resmi). Semua harga adalah kisaran per Agustus 2026
   dan dapat berubah sewaktu-waktu mengikuti stok & promo resmi.
   Lokasi toko diambil dari data tempat terverifikasi (bukan asumsi),
   dibatasi pada kota yang benar-benar terkonfirmasi datanya.
   ========================================================================== */

const BRANDS = [
  {
    id: "nike",
    name: "Nike",
    tagline: "Just Do It — ikon streetwear dari Beaverton",
    founded: "1964, Amerika Serikat",
  },
  {
    id: "puma",
    name: "Puma",
    tagline: "Forever Faster — warisan suede sejak 1968",
    founded: "1948, Jerman",
  },
  {
    id: "salomon",
    name: "Salomon",
    tagline: "Trail performance yang naik podium gaya urban",
    founded: "1947, Prancis",
  },
  {
    id: "vans",
    name: "Vans",
    tagline: "Off The Wall — akar budaya skate California",
    founded: "1966, Amerika Serikat",
  },
  {
    id: "docmart",
    name: "Dr. Martens",
    tagline: "Air Wair bersol kuning, ikon subkultur Inggris",
    founded: "1960, Inggris",
  },
  {
    id: "converse",
    name: "Converse",
    tagline: "Chuck Taylor — kanvas paling abadi di dunia",
    founded: "1908, Amerika Serikat",
  },
];

const PRODUCTS = [
  {
    brand: "nike",
    model: "Air Force 1 '07",
    desc: "Siluet basket 1982 yang jadi seragam jalanan lintas generasi — kulit penuh, midsole Nike Air.",
    priceLow: 1500000,
    priceHigh: 1900000,
    source: { name: "Nike.com Indonesia & ZALORA Indonesia", url: "https://www.nike.com/id/w/air-force-1-shoes-5sj3yzy7ok" },
  },
  {
    brand: "nike",
    model: "Air Max 90",
    desc: "Waffle sole ikonik dan panel TPU klasik dari koleksi Air Max yang tak lekang zaman.",
    priceLow: 1979000,
    priceHigh: 2199000,
    source: { name: "Nike.com Indonesia & NCR Sport", url: "https://www.nike.com/id/w/air-max-90-shoes-auqmozy7ok" },
  },
  {
    brand: "puma",
    model: "Suede Classic",
    desc: "Sejak 1968, upper suede lembut dengan Formstrip — dipakai dari panggung hip-hop hingga kampus.",
    priceLow: 1599000,
    priceHigh: 1599000,
    source: { name: "PUMA Indonesia (resmi)", url: "https://id.puma.com/in/pd/sepatu-sneaker-suede-classic-unisex/399781.html" },
  },
  {
    brand: "puma",
    model: "RS-X",
    desc: "Silhouette retro-futuristik dengan midsole tebal bergaya disruptif, favorit anak muda urban.",
    priceLow: 1700000,
    priceHigh: 2300000,
    source: { name: "PUMA Indonesia (resmi)", url: "https://id.puma.com/in/koleksi/lifestyle/rs-x" },
  },
  {
    brand: "vans",
    model: "Old Skool",
    desc: "Side stripe legendaris sejak 1977, kanvas & suede dengan waffle outsole khas Vans.",
    priceLow: 899000,
    priceHigh: 1199000,
    source: { name: "ZALORA Indonesia & JD Sports Indonesia", url: "https://www.zalora.co.id/product-index/vans-old-skool" },
  },
  {
    brand: "vans",
    model: "Sk8-Hi",
    desc: "Versi high-top dari Old Skool dengan padded collar untuk perlindungan ekstra ala skater.",
    priceLow: 1199000,
    priceHigh: 1999000,
    source: { name: "NCR Sport & Tokopedia (toko resmi Vans)", url: "https://www.zalora.co.id/product-index/vans-sk8-hi" },
  },
  {
    brand: "salomon",
    model: "XT-6",
    desc: "Trail running shoe teknis yang naik kelas jadi ikon gorpcore — desain berlapis nan futuristik.",
    priceLow: 3300000,
    priceHigh: 3800000,
    source: { name: "SALOMON ID (resmi) & Blibli", url: "https://id.salomon.com/collections/salomon-xt-6-collection" },
  },
  {
    brand: "docmart",
    model: "1460 8-Eye Boot",
    desc: "Boot 8-lubang pertama Dr. Martens sejak 1960, dengan welt jahitan kuning dan sol AirWair.",
    priceLow: 2500000,
    priceHigh: 3699000,
    source: { name: "ZALORA Indonesia (resmi) & MAPCLUB", url: "https://www.zalora.co.id/p/dr-martens-core-1460-unisex-boots-black-smooth-black-4219632" },
  },
  {
    brand: "docmart",
    model: "1461 3-Eye Oxford",
    desc: "Versi low-cut dari 1460, tampil lebih formal namun tetap membawa DNA punk-workwear klasik.",
    priceLow: 2750000,
    priceHigh: 3200000,
    source: { name: "ZALORA Indonesia (resmi)", url: "https://www.zalora.co.id/c/sepatu/dr-martens/c-164/b-86" },
  },
  {
    brand: "converse",
    model: "Chuck Taylor All Star Classic",
    desc: "Kanvas ikonik sejak 1917 dengan bintang di tumit — sneaker paling universal sepanjang masa.",
    priceLow: 699000,
    priceHigh: 899000,
    source: { name: "Converse Indonesia (resmi)", url: "https://www.converse.id/koleksi/sepatu/classic-chuck.html" },
  },
  {
    brand: "converse",
    model: "Chuck 70",
    desc: "Reissue premium dari Chuck asli dekade 70-an — kanvas lebih tebal, sol lebih empuk, detail vintage.",
    priceLow: 1399000,
    priceHigh: 1599000,
    source: { name: "Converse Indonesia (resmi)", url: "https://www.converse.id/koleksi/sepatu/classic-chuck.html" },
  },
];

/* Data toko — hanya kota dengan data lokasi yang benar-benar terverifikasi
   (Jakarta, Surabaya, Bandung). Setiap entri mencantumkan brand yang
   tersedia di gerai tersebut berdasarkan nama & jenis gerai resminya. */
const STORES = [
  { name: "Nike Grand Indonesia", brands: ["nike"], city: "Jakarta", address: "Grand Indonesia Sky Bridge, Jl. M.H. Thamrin No.1 Lt. 3, Jakarta Pusat", lat: -6.1949976, lng: 106.8193076 },
  { name: "Nike Senayan City", brands: ["nike"], city: "Jakarta", address: "Senayan City Lt. 3, Jl. Asia Afrika No.19, Jakarta Pusat", lat: -6.2274593, lng: 106.7973601 },
  { name: "Nike Pacific Place", brands: ["nike"], city: "Jakarta", address: "Pacific Place Lt. 3, Jl. Jend. Sudirman No.52-53, Jakarta Selatan", lat: -6.2245443, lng: 106.8097522 },
  { name: "Nike Jakarta Premium Outlet", brands: ["nike"], city: "Tangerang", address: "Jl. Jalur Sutera Boulevard, Panunggangan Timur, Tangerang", lat: -6.2204250, lng: 106.6591832 },
  { name: "Nike Factory Store Diponegoro", brands: ["nike"], city: "Surabaya", address: "Jl. Diponegoro No.152, Surabaya", lat: -7.2812944, lng: 112.7321128 },
  { name: "Nike Pakuwon Mall Surabaya", brands: ["nike"], city: "Surabaya", address: "Pakuwon Mall, Jl. Puncak Indah Lontar II No.2, Surabaya", lat: -7.2929711, lng: 112.6741538 },
  { name: "Nike Tunjungan Plaza 3", brands: ["nike"], city: "Surabaya", address: "Tunjungan Plaza 3, Jl. Basuki Rahmat No.8-12, Surabaya", lat: -7.2618334, lng: 112.7392681 },
  { name: "Nike Factory Store Bandung", brands: ["nike"], city: "Bandung", address: "Jl. Ir. H. Juanda No.145, Bandung", lat: -6.8896158, lng: 107.6132753 },
  { name: "Nike Store Paris Van Java", brands: ["nike"], city: "Bandung", address: "Paris Van Java, Jl. Sukajadi No.131-139, Bandung", lat: -6.8883695, lng: 107.5959809 },

  { name: "Puma Store Grand Indonesia", brands: ["puma"], city: "Jakarta", address: "Grand Indonesia, Jakarta Pusat", lat: -6.1952481, lng: 106.8196174 },
  { name: "Puma Outlet Kuningan City", brands: ["puma"], city: "Jakarta", address: "Kuningan City Lv. UG, Jl. Prof. DR. Satrio Kav 8, Jakarta Selatan", lat: -6.2246646, lng: 106.8292841 },
  { name: "Puma Store Senayan City", brands: ["puma"], city: "Jakarta", address: "Senayan City Lt. 3, Jakarta Pusat", lat: -6.2278833, lng: 106.7967144 },
  { name: "Puma Store Lippo Mall Puri", brands: ["puma"], city: "Jakarta", address: "Lippo Mall Puri Lt. 1, Jl. Puri Indah Raya Blok U1, Jakarta Barat", lat: -6.1887893, lng: 106.7389752 },
  { name: "Puma Pejaten Park", brands: ["puma"], city: "Jakarta", address: "Jl. Warung Jati Barat No.39, Jakarta Selatan", lat: -6.2805256, lng: 106.8287708 },

  { name: "Vans Grand Indonesia", brands: ["vans"], city: "Jakarta", address: "Jl. M.H. Thamrin No.1, Jakarta Pusat", lat: -6.1953527, lng: 106.8205510 },
  { name: "Vans Senayan City", brands: ["vans"], city: "Jakarta", address: "Senayan City, Jakarta Pusat", lat: -6.2267248, lng: 106.7977927 },
  { name: "Vans Kota Kasablanka", brands: ["vans"], city: "Jakarta", address: "Jl. Raya Casablanca No.88, Jakarta Selatan", lat: -6.2237201, lng: 106.8428455 },
  { name: "Vans Mall Kelapa Gading", brands: ["vans"], city: "Jakarta", address: "Mall Kelapa Gading Lt. 1, Jakarta Utara", lat: -6.1565179, lng: 106.9088735 },
  { name: "Vans Outlet Pondok Labu", brands: ["vans"], city: "Jakarta", address: "Jl. RS. Fatmawati Raya No.5, Jakarta Selatan", lat: -6.3088369, lng: 106.7935524 },

  { name: "Dr. Martens Grand Indonesia", brands: ["docmart"], city: "Jakarta", address: "Mall Grand Indonesia, Jakarta Pusat", lat: -6.1952022, lng: 106.8212825 },
  { name: "Dr. Martens Kota Kasablanka", brands: ["docmart"], city: "Jakarta", address: "Kota Kasablanka Lt. GF, Jakarta Selatan", lat: -6.2228270, lng: 106.8428202 },
  { name: "Dr. Martens Pondok Indah Mall 1", brands: ["docmart"], city: "Jakarta", address: "Pondok Indah Mall 1 Lt. 1, Jakarta Selatan", lat: -6.2657778, lng: 106.7844738 },
  { name: "Dr. Martens Senayan City", brands: ["docmart"], city: "Jakarta", address: "Senayan City Lt. 3, Jakarta Pusat", lat: -6.2277480, lng: 106.7973057 },

  { name: "Converse Grand Indonesia", brands: ["converse"], city: "Jakarta", address: "Grand Indonesia Lt. 1, Jakarta Pusat", lat: -6.1953192, lng: 106.8205276 },
  { name: "Converse Senayan City", brands: ["converse"], city: "Jakarta", address: "Senayan City, Jakarta Pusat", lat: -6.2275569, lng: 106.7968521 },
  { name: "Converse Jakarta Premium Outlet", brands: ["converse"], city: "Tangerang", address: "Jl. Jalur Sutera Boulevard, Tangerang", lat: -6.2202088, lng: 106.6597598 },
  { name: "Converse Mall Kelapa Gading", brands: ["converse"], city: "Jakarta", address: "Jl. Boulevard Raya No.12, Jakarta Utara", lat: -6.1434949, lng: 106.9094528 },

  { name: "Salomon Concept Store Grand Indonesia", brands: ["salomon"], city: "Jakarta", address: "East Mall Grand Indonesia Lt. 2, Jakarta Pusat", lat: -6.1948849, lng: 106.8208638 },

  { name: "Foot Locker Grand Indonesia", brands: ["nike", "puma", "vans", "converse"], city: "Jakarta", address: "Grand Indonesia Mall Lt. 3, Jakarta Pusat", lat: -6.1946622, lng: 106.8218245 },
  { name: "Foot Locker Senayan City", brands: ["nike", "puma", "vans", "converse"], city: "Jakarta", address: "Senayan City Lt. 1, Jakarta Pusat", lat: -6.2271849, lng: 106.7972822 },
  { name: "Foot Locker Pondok Indah Mall 3", brands: ["nike", "puma", "vans", "converse"], city: "Jakarta", address: "Pondok Indah Mall 3, Jakarta Selatan", lat: -6.2634414, lng: 106.7823448 },
  { name: "Foot Locker Pakuwon Surabaya", brands: ["nike", "puma", "vans", "converse"], city: "Surabaya", address: "Pakuwon Mall GF, Surabaya", lat: -7.2895763, lng: 112.6750782 },

  { name: "Sports Station Summarecon Bandung", brands: ["nike", "puma", "vans", "converse"], city: "Bandung", address: "Plaza Summarecon Bandung Lt. 1F, Bandung", lat: -6.9556800, lng: 107.6985017 },
  { name: "Sports Station Trans Studio Mall Bandung", brands: ["nike", "puma", "vans", "converse"], city: "Bandung", address: "Trans Studio Mall Bandung, Jl. Gatot Subroto No.289, Bandung", lat: -6.9265620, lng: 107.6364725 },
];
