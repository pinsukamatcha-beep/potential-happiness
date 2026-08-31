(function () {
  "use strict";

  /* ---------- util ---------- */
  function escapeHTML(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function formatIDR(n) {
    return "Rp " + Math.round(n).toLocaleString("id-ID");
  }

  function haversineKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  const shoeIconSVG =
    '<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M6 40c0-6 5-10 11-11 6-1 9-4 14-8 6-5 12-8 20-8 7 0 10 3 12 7 2 3 4 5 8 6 3 1 6 4 6 8 0 3-2 5-5 5H10c-2 0-4-2-4-4z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/>' +
    '<path d="M10 44h48" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" opacity="0.35"/>' +
    '<path d="M27 21c1 4 1 9-1 15M35 15c2 5 2 12 0 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
    "</svg>";

  /* ---------- render katalog brand ---------- */
  function renderBrands() {
    const wrap = document.getElementById("brand-rows");
    const html = BRANDS.map(function (brand) {
      const products = PRODUCTS.filter(function (p) { return p.brand === brand.id; });
      const cards = products
        .map(function (p) {
          const priceText =
            p.priceLow === p.priceHigh
              ? formatIDR(p.priceLow)
              : formatIDR(p.priceLow) + " – " + formatIDR(p.priceHigh);
          return (
            '<article class="vitrine">' +
            '<div class="vitrine-icon">' + shoeIconSVG + "</div>" +
            "<h4>" + escapeHTML(p.model) + "</h4>" +
            '<p class="desc">' + escapeHTML(p.desc) + "</p>" +
            '<div class="price-row"><div class="price">' + priceText +
            "<small>kisaran harga resmi</small></div></div>" +
            '<a class="source-link" href="' + p.source.url + '" target="_blank" rel="noopener noreferrer">' +
            "Lihat sumber &amp; foto resmi \u2192 " + escapeHTML(p.source.name) +
            "</a>" +
            "</article>"
          );
        })
        .join("");

      return (
        '<div class="brand-row" id="brand-' + brand.id + '">' +
        '<div class="brand-head">' +
        "<div><h3>" + escapeHTML(brand.name) + "</h3>" +
        '<span class="founded">' + escapeHTML(brand.founded) + "</span></div>" +
        '<p class="tagline">' + escapeHTML(brand.tagline) + "</p>" +
        "</div>" +
        '<div class="product-grid">' + cards + "</div>" +
        "</div>"
      );
    }).join("");
    wrap.innerHTML = html;
  }

  /* ---------- filter chip toko ---------- */
  let activeBrandFilter = null;

  function renderChips() {
    const wrap = document.getElementById("brand-filter");
    const all = ['<button class="chip active" data-brand="">Semua brand</button>'];
    BRANDS.forEach(function (b) {
      all.push('<button class="chip" data-brand="' + b.id + '">' + escapeHTML(b.name) + "</button>");
    });
    wrap.innerHTML = all.join("");
    wrap.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      wrap.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("active"); });
      btn.classList.add("active");
      activeBrandFilter = btn.getAttribute("data-brand") || null;
      if (lastCoords) renderStoreList(lastCoords.lat, lastCoords.lng);
    });
  }

  /* ---------- pencari toko terdekat ---------- */
  let lastCoords = null;

  function renderStoreList(userLat, userLng) {
    const list = document.getElementById("store-list");
    let stores = STORES.map(function (s) {
      return Object.assign({}, s, { distance: haversineKm(userLat, userLng, s.lat, s.lng) });
    });

    if (activeBrandFilter) {
      stores = stores.filter(function (s) { return s.brands.indexOf(activeBrandFilter) !== -1; });
    }

    stores.sort(function (a, b) { return a.distance - b.distance; });
    const nearest = stores.slice(0, 8);

    if (nearest.length === 0) {
      list.innerHTML = '<li class="finder-status">Tidak ada toko brand tersebut pada data yang terverifikasi.</li>';
      return;
    }

    list.innerHTML = nearest
      .map(function (s, i) {
        const mapsUrl =
          "https://www.google.com/maps/search/?api=1&query=" + s.lat + "," + s.lng;
        const brandTags = s.brands
          .map(function (bid) {
            const b = BRANDS.find(function (x) { return x.id === bid; });
            return "<span>" + escapeHTML(b ? b.name : bid) + "</span>";
          })
          .join("");
        return (
          '<li class="store-item" style="animation-delay:' + i * 0.05 + 's">' +
          '<div class="store-rank">' + (i + 1) + "</div>" +
          '<div class="store-info">' +
          '<div class="name">' + escapeHTML(s.name) + "</div>" +
          '<div class="addr">' + escapeHTML(s.address) + ", " + escapeHTML(s.city) + "</div>" +
          '<div class="brands">' + brandTags + "</div>" +
          "</div>" +
          '<div class="store-dist"><div class="km">' + s.distance.toFixed(1) + " km</div>" +
          '<a href="' + mapsUrl + '" target="_blank" rel="noopener noreferrer">Buka di Maps</a></div>' +
          "</li>"
        );
      })
      .join("");
  }

  function initFinder() {
    const btn = document.getElementById("locate-btn");
    const status = document.getElementById("finder-status");

    btn.addEventListener("click", function () {
      if (!("geolocation" in navigator)) {
        status.textContent = "Browser ini tidak mendukung layanan lokasi.";
        return;
      }
      btn.disabled = true;
      btn.textContent = "Meminta izin lokasi\u2026";
      status.textContent = "Menunggu konfirmasi izin lokasi dari browser\u2026";

      navigator.geolocation.getCurrentPosition(
        function (pos) {
          lastCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          btn.disabled = false;
          btn.textContent = "📍 Perbarui Lokasi Saya";
          status.textContent = "Lokasi diizinkan — menampilkan toko resmi terdekat, diurutkan dari yang paling dekat.";
          renderStoreList(lastCoords.lat, lastCoords.lng);
        },
        function (err) {
          btn.disabled = false;
          btn.textContent = "📍 Izinkan Akses Lokasi Saya";
          if (err.code === err.PERMISSION_DENIED) {
            status.textContent = "Akses lokasi ditolak. Izinkan lokasi di pengaturan browser untuk melihat toko terdekat.";
          } else {
            status.textContent = "Lokasi tidak dapat dideteksi saat ini. Coba lagi sebentar.";
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
      );
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderBrands();
    renderChips();
    initFinder();
  });
})();
