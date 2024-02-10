let counter = document.getElementById("quantity-input").value;

let inc = document.getElementById("increment-button");
let dec = document.getElementById("decrement-button");

inc.addEventListener("click", () => {
  counter++;
  document.getElementById("quantity-input").value = counter;
});

dec.addEventListener("click", () => {
  if (document.getElementById("quantity-input").value > 0) {
    counter--;
  }
  document.getElementById("quantity-input").value = counter;
});

const detailProduct = [
  {
    id: 1,
    status: true,
    title: "ANCIKA: DIA YANG BERSAMAKU TAHUN 1995",
    author: "PIDI BAIQ",
    publisher: "MIZAN PUBLISHING",
    image: {
      url: "/detailProduct/logoDetailProduct.jpg",
    },
    description: {
      short:
        "Bismillahirrahmannirahiim. Asalamualaikum, Cika. Jangan sampai Ciwastra berubah, menjadi kekacauan, seperti Angola, Mozambik, Sudan atau Rhodesia. Kita harus berdoa untuk Ciwastra, untuk Buah Batu, untuk Sekelimus, Sapan, Derwati dan daerah-daerah lain di Bandung. Mudah-mudahan semua jalan yang memutar bergerak menuju kasih sayang. Nanti aku akan memberitahumu cukup banyak, bahwa yang aku…",
      long: 'Bismillahirrahmannirahiim. Asalamualaikum, Cika. Jangan sampai Ciwastra berubah, menjadi kekacauan, seperti Angola, Mozambik, Sudan atau Rhodesia. Kita harus berdoa untuk Ciwastra, untuk Buah Batu, untuk Sekelimus, Sapan, Derwati dan daerah-daerah lain di Bandung. Mudah-mudahan semua jalan yang memutar bergerak menuju kasih sayang. Nanti aku akan memberitahumu cukup banyak, bahwa yang aku katakan ini tidak benar. Dilan, hamba Allah. “Menurut kamu, kalau misal ada orang, yang nanya-nanya nama …. ke teman-temanmu … sampai nanya udah nikah belum, menurut kamu orang itu seperti apa?” “Seperti Dilan!” “Ha ha ha!” “Sekarang … boleh nanya lagi?” “Apa?” “Kalau ada yang pernah ketemu kamu di rumah kakekmu … terus orang itu bilang ke Mamamu, dia belum pernah ketemu .... padahal …” “Itu juga Dilan.” "kamu harus tahu, cinta memang buta tapi rasa cemburu itu jeli." —Ancika, 1994 “Saya gak bisa suka ke orang yang ngandelin penampilan. Penampilan emang penting, tapi kepribadian lebih penting. Saya tuh gak suka kalau harus dipaksa-paksain ngegaya, padahal dirinya tersiksa.” —Ancika, 1994 “Aku suka Mike Tyson, aku suka kamu, aku suka Maradona, aku suka Mick Jagger.” —Dilan, 1994 Novel Ancika: Dilan yang Bersamaku telah dinantikan oleh para pembaca dan penggemar novel Seri Dilan karya Ayah Pidi. Novel ini akan menjawab kerinduan terhadap seri novel Dilan. Ancika Mehrunisa Rabu adalah pacar Dilan, setelah Dilan putus dengan Milea. Sosok Ancika pernah muncul secara di dalam novel Milea: Suara dari Dilan. Di dalam novel terbaru Ayah Pidi ini, Ancika akan menceritakan kisah yang terjadi pada 24 tahun yang lalu, ketika Ancika berumur 17 tahun atau pada masa-masa remajanya bersama Dilan. Meskipun Ancika memiliki sifat dan karakter yang berbeda dengan Milea, tetapi novel yang diceritakan oleh Ancika ini tidak bermaksud untuk membanding-bandingkan antara dirinya dengan Milea. Bagaimanapun, kisah Milea dan Dilan merupakan kisah lalu mereka. Di dalam novel ini, pembaca akan diajak melihat Dilan yang mulai menginjak usia dewasa. Dilan kini bukan lagi seorang panglima tempur geng motor yang disegani di Kota Bandung, melainkan tumbuh menjadi mahasiswa yang cerdas dan kreatif. Meskipun begitu, tingkah dan tutur kata Dilan yang lucu tetap melekat pada diri Dilan. Selain itu, sosok Ancika pun tidak kalah menarik daripada Dilan. Dilan dan Ancika walaupun tidak memiliki karakter yang mirip, tapi seolah-olah bahwa mereka berdua memang diciptakan untuk saling mengisi dan saling melengkapi. Apakah Ancika adalah alasan satu-satunya mengapa Dilan tidak bisa balikan dengan Milea? Baca kisah lengkap Ancika di dalam novel ini!',
    },
  },
];

const gambarDetailProdukElm = document.getElementById("gambar-detail-product");
const gambarDetailProduk2Elm = document.getElementById(
  "gambar-detail-product2"
);
const gambarDetailProduk3Elm = document.getElementById(
  "gambar-detail-product3"
);
let onClick = false;

detailProduct.forEach((item) => {
  //gambar detail produk
  const newImgElm = document.createElement("img");
  newImgElm.setAttribute("src", item.image.url);
  newImgElm.setAttribute("alt", "logoProduct");
  newImgElm.setAttribute("width", "200");
  newImgElm.setAttribute("class", "absolute");
  gambarDetailProdukElm.appendChild(newImgElm);

  const newImg1Elm = document.createElement("img");
  newImg1Elm.setAttribute("src", item.image.url);
  newImg1Elm.setAttribute("alt", "logoProduct");
  newImg1Elm.setAttribute("width", "200");
  newImg1Elm.setAttribute("class", "absolute left-[550px] hidden");
  gambarDetailProdukElm.appendChild(newImg1Elm);

  gambarDetailProduk3Elm.addEventListener("click", function () {
    onClick = !onClick;
    if (onClick == true) {
      newImgElm.setAttribute("class", "absolute left-[0px] hidden transition");
      newImg1Elm.setAttribute(
        "class",
        "absolute left-[260px] transition duration-1000"
      );
    }
  });
  gambarDetailProduk2Elm.addEventListener("click", function () {
    onClick = onClick;
    if (onClick == true) {
      newImgElm.setAttribute("class", "absolute left-[0px] hidden transition");
      newImg1Elm.setAttribute(
        "class",
        "absolute left-[260px] transition duration-1000"
      );
    } else {
      newImgElm.setAttribute("class", "absolute left-[260px] transition");
      newImg1Elm.setAttribute("class", "absolute left-[550px] hidden");
    }
  });
  //gambar detail produk 2
  const newImg2Elm = document.createElement("img");
  newImg2Elm.setAttribute("src", item.image.url);
  newImg2Elm.setAttribute("alt", "logoProduct");
  newImg2Elm.setAttribute("width", "70");
  gambarDetailProduk2Elm.appendChild(newImg2Elm);

  //gambar detail produk 3
  const newImg3Elm = document.createElement("img");
  newImg3Elm.setAttribute("src", item.image.url);
  newImg3Elm.setAttribute("alt", "logoProduct");
  newImg3Elm.setAttribute("width", "70");
  gambarDetailProduk3Elm.appendChild(newImg3Elm);

  //ketersedian
  const ketersediaan = document.getElementById("status");
  if (item.status == true) {
    ketersediaan.innerHTML = "Tersedia";
  }
  if (item.status == false) {
    ketersediaan.innerHTML = "Tidak Tersedia";
  }

  //title
  const judul = document.getElementById("title");
  judul.innerHTML = item.title;

  //author - publisher
  const authorElm = document.getElementById("author-publisher");
  const newAuthorElm = document.createElement("h3");
  newAuthorElm.setAttribute(
    "class",
    "text-xs font-bold text-orange-400 font-base md:text-base"
  );
  newAuthorElm.innerHTML = `${item.author} - ${item.publisher}`;
  authorElm.appendChild(newAuthorElm);

  //deskripsi
  const deskripsiSingkat = document.getElementById("short-description");
  const deskripsiTeks = document.getElementById("Deskripsi");
  deskripsiSingkat.innerHTML = item.description.short;
  deskripsiTeks.innerHTML = item.description.long;
});

const product = [
  {
    id: 1,
    title: "Asbunayah",
    author: "Pidi Baiq",
    image: {
      url: "/detailProduct/logoProductPidiBaik1.jpg",
    },
    price: {
      discount: {
        status: true,
        discountPrice: "67.000",
      },
      realPrice: "79000",
    },
  },
  {
    id: 2,
    title: "Paket spesial gratis tshirt mi...",
    author: "Pidi Baiq",
    image: {
      url: "/detailProduct/logoProductPidiBaik2.jpg",
    },
    price: {
      discount: {
        status: true,
        discountPrice: "248.000",
      },
      realPrice: "292.000",
    },
  },
  {
    id: 3,
    title: "Baracas : Barisan anti cinta a...",
    author: "Pidi Baiq",
    image: {
      url: "/detailProduct/logoProductPidiBaik3.jpg",
    },
    price: {
      discount: {
        status: true,
        discountPrice: "20.000",
      },
      realPrice: "49.000",
    },
  },
  {
    id: 4,
    title: "Paket seri dilan (milea ttd+di...",
    author: "Pidi Baiq",
    image: {
      url: "/detailProduct/logoProductPidiBaik4.jpg",
    },
    price: {
      discount: {
        status: true,
        discountPrice: "217.000",
      },
      realPrice: "180.000",
    },
  },
  {
    id: 5,
    title: "Milea suara dari dilan",
    author: "Pidi Baiq",
    image: {
      url: "/detailProduct/logoProductPidiBaik5.jpg",
    },
    price: {
      discount: {
        status: true,
        discountPrice: "71.200",
      },
      realPrice: "89.000",
    },
  },
];

const listProductElm = document.getElementById("product");

product.map((item) => {
  //tambah kerangka
  const newListProductElm = document.createElement("div");
  newListProductElm.classList.add("list-product");
  listProductElm.appendChild(newListProductElm);
  //tambah pembungkus gambar
  const wrapImageElm = document.createElement("a");
  wrapImageElm.setAttribute("href", "#");
  newListProductElm.appendChild(wrapImageElm);

  //tambah gambar
  const imageElm = document.createElement("img");
  imageElm.setAttribute("src", item.image.url);
  imageElm.setAttribute("alt", "sampul Produk Pidi Baiq");
  imageElm.setAttribute("class", "w-24 h-32 hover:opacity-50");
  wrapImageElm.appendChild(imageElm);

  //tambah pembungkus content
  const wrapContentElm = document.createElement("div");
  wrapContentElm.setAttribute("class", "pt-3");
  newListProductElm.appendChild(wrapContentElm);

  //tambah content
  const titleElm = document.createElement("h5");
  titleElm.setAttribute("class", "text-sm max-w-32 h-7");
  titleElm.innerHTML = item.title;
  wrapContentElm.appendChild(titleElm);

  const authorElm = document.createElement("p");
  authorElm.setAttribute("class", "text-xs text-gray-600 pt-7");
  authorElm.innerHTML = item.author;
  wrapContentElm.appendChild(authorElm);

  const priceElm = document.createElement("p");
  priceElm.innerHTML = item.price.realPrice;
  if (item.price.discount.status == true) {
    priceElm.setAttribute("class", "text-xs text-gray-700 line-through");
  } else {
    priceElm.setAttribute("class", "text-xs text-gray-700");
  }
  wrapContentElm.appendChild(priceElm);

  if (item.price.discount.status == true) {
    const discountElm = document.createElement("p");
    discountElm.setAttribute("class", "pl-2 text-sm text-orange-600");
    discountElm.innerHTML = item.price.discount.discountPrice;
    wrapContentElm.appendChild(discountElm);
  }
});
