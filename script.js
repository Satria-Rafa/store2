let produk = [
  {
    img: "/image/google pixel 9 pro.jpg",
    merk: "Google",
    nama: "Google Pixel 9 Pro",
    harga: 10000000,
  },
  {
    img: "/image/honor magic 6 pro.jpg",
    merk: "Honor",
    nama: "Honor Magic 6 Pro",
    harga: 9000000,
  },
  {
    img: "/image/huawei pura 70 pro.jpg",
    merk: "Huawei",
    nama: "Huawei Pura 70 pro",
    harga: 15000000,
  },
  {
    img: "/image/ip 14.jpg",
    merk: "Iphone",
    nama: "Iphone 14",
    harga: 11000000,
  },
  {
    img: "/image/nothing phone 3a.jpg",
    merk: "Nothing",
    nama: "Nothing Phone 3A",
    harga: 12000000,
  },
  {
    img: "/image/samsung a16.jpg",
    merk: "Samsung",
    nama: "Samsung A 16",
    harga: 3000000,
  },
  {
    img: "/image/vivo x200.jpg",
    merk: "vivo",
    nama: "Vivo X200",
    harga: 17000000,
  },
  {
    img: "/image/xiaomi 15 ultra.jpg",
    merk: "xiaomi",
    nama: "Xiaomi 15 Ultra",
    harga: 15000000,
  },
];

let saldo = 10000000;

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function tampilKanSaldo() {
  document.getElementById(
    "saldo"
  ).innerHTML = `Saldo : ${formatRupiah(saldo)}`;
}

// TAMPILKAN SALDO

tampilKanSaldo();

// TAMPILKAN PRODUK

function tampilProduk(data) {
  let barang = data.map((item, index) => {
    return `
      <div class="box">
        <img src="${item.img}">
        <div class="card-body">
          <h2>${item.merk}</h2>
          <h3>${item.nama}</h3>
          <h4>${formatRupiah(item.harga)}</h4>
          <button class="btn-grad beli" data-index="${index}">
            Beli
          </button>
        </div>
      </div>
    `;
  });

  document.getElementById("containerBarang").innerHTML = barang.join("");
}

tampilProduk(produk)
// EVENT BELI 

const tombolBeli = document.querySelectorAll(".beli");

tombolBeli.forEach((tombol) => {
  tombol.addEventListener("click", () => {
    const index = tombol.getAttribute("data-index");

    const item = produk[index];

    if (saldo < item.harga) {
      alert("Saldo kurang!");
    } else {
      const konfirmasi = confirm(
        `Apakah anda ingin membeli ${item.nama}?`
      );

      if (konfirmasi) {
        saldo -= item.harga;

        tampilKanSaldo();

        alert(`Berhasil membeli ${item.nama}`);
      }
    }
  });
});

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
  let keyword = this.value.toLowerCase();

  let hasil = produk.filter((item) => {
    return (
      item.nama.toLowerCase().includes(keyword) ||
      item.merk.toLowerCase().includes(keyword)
    );
  });

  tampilProduk(hasil);
});