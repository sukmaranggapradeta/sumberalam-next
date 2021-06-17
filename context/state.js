import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    dataSosmed: [
      {
        code: "sosmed",
        name: "youtubeIcon",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/youtube.png?raw=true",
        url: "https://www.youtube.com/channel/UCCB77cYeLpq_Ou4zBmSNBxQ?view_as=subscriber",
      },
      {
        code: "sosmed",
        name: "instagramIcon",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/instagram.png?raw=true",
        url: "https://www.instagram.com/sumberalamii/",
      },
      {
        code: "contact",
        name: "+628123623566 - Bapak Budhi",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/phone.png?raw=true",
        url: "https://api.whatsapp.com/send?phone=628123623566&text=&source=&data=",
      },
      {
        code: "contact",
        name: "+628124641050 - Ibu Sri",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/phone.png?raw=true",
        url: "https://api.whatsapp.com/send?phone=628124641050&text=&source=&data=",
      },
      {
        code: "contact",
        name: "+6281339085220 - Rangga",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/phone.png?raw=true",
        url: "https://api.whatsapp.com/send?phone=6281805677132&text=&source=&data=",
      },

      {
        code: "email",
        name: "adit.netral@gmail.com",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/gmail.png?raw=true",
        url: null,
      },
      {
        code: "location",
        name: "Sumber Alam - Jl. Prof. Dr. Ida Bagus Mantra No.9x, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
        address:
          "Jl. Prof. Dr. Ida Bagus Mantra No.9x, Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/location.png?raw=true",
        url: "https://goo.gl/maps/khviC8mppjVxsZ8M8",
      },
      {
        code: "location",
        name: "Watu Alam - Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
        address:
          "Kesiman Kertalangu, Kec. Denpasar Tim., Kota Denpasar, Bali 80237",
        icon: "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/location.png?raw=true",
        url: "https://goo.gl/maps/ru8SRoDScAzSF3oa6",
      },
    ],
    dataProducts: [
      {
        code: "palimanan-cirebon",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Palimanan Cirebon",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "palimanan-palem",
        thumbnail: "products/palimanan-palem.jpg",
        sample: ["products/palimanan-palem.jpg"],
        title: "Palimanan Palem",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "palimanan-cacing",
        thumbnail: "products/palimanan-cacing.jpg",
        sample: ["products/palimanan-cacing.jpg"],
        title: "Palimanan Cacing",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "palimanan-serat-jati",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Palimanan Serat Jati",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },

      {
        code: "palimanan-batu-putih-super",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Palimanan Batu Putih Super",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "60 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "palimanan-abu",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Palimanan Abu",
        desc: `Batu Alam Palimanan dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "60 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "marmer",
        thumbnail: "products/marmer-bakar.jpg",
        sample: ["products/marmer-bakar.jpg"],
        title: "Marmer",
        desc: `Batu Alam Marmer dijadikan favorit banyak orang karena tergolong bebatuan alam yang memiliki motif yang menarik.`,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "15 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-alam-putih",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Batu Alam Putih",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
      },
      {
        code: "candi",
        thumbnail: "products/batu-alam-candi.jpg",
        sample: ["products/batu-alam-candi.jpg"],
        title: "Candi",
        desc: "Batu Alam Candi",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±3 cm" },
          { p: "30 cm", l: "30 cm", t: "±3 cm" },
          { p: "30 cm", l: "40 cm", t: "±3 cm" },
          { p: "40 cm", l: "40 cm", t: "±3 cm" },
          { p: "30 cm", l: "60 cm", t: "±3 cm" },
          { p: "20 cm", l: "40 cm", t: "±5 cm" },
          { p: "30 cm", l: "30 cm", t: "±5 cm" },
          { p: "30 cm", l: "40 cm", t: "±5 cm" },
          { p: "40 cm", l: "40 cm", t: "±5 cm" },
          { p: "30 cm", l: "60 cm", t: "±5 cm" },
        ],
      },
      {
        code: "alur-candi-lurus",
        thumbnail: "products/candi-alur-lurus.jpg",
        sample: ["products/candi-alur-lurus.jpg"],
        title: "Alur Candi Lurus",
        desc: "Batu Alam Alur Candi Lurus",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "alur-candi-acak",
        thumbnail: "products/alur-candi-acak.jpg",
        sample: ["products/alur-candi-acak.jpg"],
        title: "Alur Candi Acak",
        desc: "Batu Alam Alur Candi Acak",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-alam-bali-green",
        thumbnail: "products/batu-alam-bali-green.jpg?raw=true",
        sample: ["products/batu-alam-bali-green.jpg?raw=true"],
        title: "Batu Alam Bali Green",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "20 cm", l: "40 cm", t: "±1.8 cm" }],
      },
      {
        code: "batu-pilah-hitam",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Batu Pilah Hitam",
        desc: "Batu Alam Pilah Hitam atau Black Stone",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "Random", l: "Random", t: "Random" },
          { p: "5 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "10 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "15 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-pilah-jember",
        thumbnail: "products/batu-pilah-jember.jpeg?raw=true",
        sample: ["products/batu-pilah-jember.jpeg?raw=true"],
        title: "Batu Pilah Jember",
        desc: "Batu Alam Pilah Jember",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "Random", l: "Random", t: "Random" },
          { p: "5 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "10 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "15 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-hijau-rts",
        thumbnail: "products/batu-hijau-rts.jpg",
        sample: ["products/batu-hijau-rts.jpg"],
        title: "Batu Hijau RTS",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "15 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "20 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-hijau-kolam",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Batu Hijau Kolam",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "10 cm", l: "10 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "bali-green-alur-lurus",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Bali Green Alur Lurus",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "bali-green-alur-acak",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Bali Green Alur Acak",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "bali-green-rtm",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Bali Green RTM",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "40 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "batu-alam-emping",
        thumbnail: "products/batu-alam-emping.jpg?raw=true",
        sample: ["products/batu-alam-emping.jpg?raw=true"],
        title: "Batu Alam Emping",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
      },
      {
        code: "andesit-polos-bakar",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Andesit Polos Bakar",
        desc: `Batu alam andesit kerap dijadikan pilihan favorit para desainer rumah karena kualitasnya yang unggul.
        Batu ini tahan lama, kokoh, dan bisa digunakan di berbagai area rumah seperti pagar, taman, dinding, dan kolam renang.
       `,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
      },
      {
        code: "andesit-bakar-bintik-abu",
        thumbnail: "products/andesit-bakar-abu.jpg",
        sample: ["products/andesit-bakar-abu.jpg"],
        title: "Andesit Bakar Bintik Abu",
        desc: `Batu alam andesit kerap dijadikan pilihan favorit para desainer rumah karena kualitasnya yang unggul.
        Batu ini tahan lama, kokoh, dan bisa digunakan di berbagai area rumah seperti pagar, taman, dinding, dan kolam renang.
       `,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "40 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "60 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "andesit-hitam-bakar",
        thumbnail: "products/andesit-hitam-bakar.jpg",
        sample: ["products/andesit-hitam-bakar.jpg"],
        title: "Andesit Hitam Bakar",
        desc: `Batu alam andesit kerap dijadikan pilihan favorit para desainer rumah karena kualitasnya yang unggul.
        Batu ini tahan lama, kokoh, dan bisa digunakan di berbagai area rumah seperti pagar, taman, dinding, dan kolam renang.
       `,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "40 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "60 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "andesit-rts-susun-sirih",
        thumbnail: "products/andesit-hitam-rts.jpg",
        sample: ["products/andesit-hitam-rts.jpg"],
        title: "Andesit RTS Susun Sirih",
        desc: `Batu alam andesit kerap dijadikan pilihan favorit para desainer rumah karena kualitasnya yang unggul.
        Batu ini tahan lama, kokoh, dan bisa digunakan di berbagai area rumah seperti pagar, taman, dinding, dan kolam renang.
       `,
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "3 cm", l: "40 cm", t: "images/no-image.svg" },
          { p: "5 cm", l: "40 cm", t: "images/no-image.svg" },
        ],
      },
      {
        code: "batu-alam-serai-rtm",
        thumbnail: "products/batu-alam-serai-bali.jpg",
        sample: ["products/batu-alam-serai-bali.jpg"],
        title: "Batu Alam Serai RTM",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "Random", l: "Random", t: "Random" }],
      },
      {
        code: "batu-alam-serai-rts",
        thumbnail: "products/batu-alam-serai-bali.jpg",
        sample: ["products/batu-alam-serai-bali.jpg"],
        title: "Batu Alam Serai RTS",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "Random", l: "Random", t: "Random" }],
      },
      {
        code: "batu-alam-pilah",
        thumbnail: "products/batu-alam-pilah-jember.jpg",
        sample: ["products/batu-alam-pilah-jember.jpg"],
        title: "Batu Alam Pilah",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "Random", l: "Random", t: "Random" },
          { p: "5 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "10 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "15 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
          { p: "30 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },

      {
        code: "batu-alam-marmo-palimanan",
        thumbnail: "products/batu-alam-marmo-palimanan.jpg?raw=true",
        sample: ["products/batu-alam-marmo-palimanan.jpg?raw=true"],
        title: "Marmo Palimanan",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "5 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "palimanan-rts",
        thumbnail: "products/palimanan-rts.jpg",
        sample: ["products/palimanan-rts.jpg"],
        title: "Palimanan RTS",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [
          { p: "10 cm", l: "20 cm", t: "±1.8 cm" },
          { p: "15 cm", l: "30 cm", t: "±1.8 cm" },
          { p: "20 cm", l: "40 cm", t: "±1.8 cm" },
        ],
      },
      {
        code: "coral-putih",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Coral Putih",
        desc: "Batu Coral Putih",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [],
      },
      {
        code: "coral-hijau",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Coral Hijau",
        desc: "Batu Coral Hijau",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [],
      },
      {
        code: "coral-hitam",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Coral Hitam",
        desc: "Batu Coral Hitam",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [],
      },
      {
        code: "coral-abu",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Coral Abu",
        desc: "Batu Coral Abu",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [],
      },
      {
        code: "kobel-stun",
        thumbnail: "products/kobel-stone.jpg",
        sample: ["products/kobel-stone.jpg"],
        title: "Kobel Stun",
        desc: "Batu Alam Kobel Stun",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "10 cm", l: "10 cm", t: "±5 cm" }],
      },
      {
        code: "batu-alam-paras-kerobokan",
        thumbnail: "products/batu-alam-paras-kerobokan.jpg?raw=true",
        sample: ["products/batu-alam-paras-kerobokan.jpg?raw=true"],
        title: "Batu Alam Paras Kerobokan",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "20 cm", l: "40 cm", t: "±1.8 cm" }],
      },
      {
        code: "rst-sukabumi",
        thumbnail: "products/rst-sukabumi.jpeg?raw=true",
        sample: ["products/rst-sukabumi.jpeg?raw=true"],
        title: "Batu Alam RTS Sukabumi",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "20 cm", l: "40 cm", t: "±1.8 cm" }],
      },
      {
        code: "bukit-putih",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Batu Alam Random Bukit Putih",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "Random", l: "Random", t: "Random" }],
      },
      {
        code: "bukit-kipas",
        thumbnail: "images/no-image.svg",
        sample: ["images/no-image.svg"],
        title: "Batu Alam Random Bukit Kipas",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
        size: [{ p: "Random", l: "Random", t: "Random" }],
      },
      {
        code: "lampu-batu-alam",
        thumbnail: "products/lampu-batu-alam.jpeg?raw=true",
        sample: ["products/lampu-batu-alam.jpeg?raw=true"],
        title: "Lampu Batu Alam",
        desc: "short description",
        desc2: `      
        Menggunakan batu sebagai komponen rumah memang menjadi salah satu tren terbaru di Indonesia. 
        Batu alam dengan jenis dan fungsi yang berbeda dapat kita temukan dimana-mana, mulai dari rumah minimalis hingga shabby chic. 
        Tren ini terjadi karena harga batu alam yang makin lama, makin mahal dan tidak pernah turun.      
        `,
        desc3: `
        Batu alam memiliki banyak ukuran, motif dan jenis. 
        Sehingga tidak heran banyak orang yang tertarik untuk menggunakan batu alam sebagai hiasan dinding rumah anda
        `,
      },
    ],
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
