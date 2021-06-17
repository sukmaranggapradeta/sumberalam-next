import Layout from "../components/layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  const pageMeta = {
    title: "Toko Batu Alam di Bali - Sumber Alam Bali",
    description:
      "Toko Batu Alam Terlengkap di bali silahkan langsung data ke showroom atau bisa menghubungi toko batu kami",
    image:
      "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/sumberalam-toko.jpeg?raw=true&fit=crop&w=1600&h=800",
  };

  return (
    <Layout pageMeta={pageMeta}>
      <div className="flex flex-col-reverse md:flex-row space-x-0 md:space-x-4 ">
        <div className="flex bg-red-200  w-auto md:w-2/5">
          <img
            src="https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/home-img1.jpg?raw=true"
            alt="sumber alam"
          />
        </div>
        <div className="flex flex-col w-auto md:w-3/5">
          <div className="flex flex-col w-auto">
            <h1 className={`${styles.title} text-xl md:text-3xl`}>
              WE BRING THE NATURE TO YOUR HOUSE
            </h1>
            <div className="line-title w-2/5 mt-2" />
          </div>

          <p>
            Salah satu alasan orang menggunakan batu alam untuk interior atau
            eksterior adalah untuk mempercantik rumah. Di samping itu, konon
            dengan ornamen batu alam, ada kesan menyatu dengan nuansa alam. Ada
            banyak cara yang bisa Anda lakukan untuk mempermanis rumah, terutama
            bagian depan. Salah satunya dengan mengaplikasikan batu alam.
            Terlebih lagi, batu yang satu ini sangat mudah diperoleh dan bisa
            menghadirkan kesan sejuk.
          </p>
          <p>
            Rumah yang menggunakan batu alam pasti tampak lebih natural dan
            mampu memberikan ketenangan bagi pemiliknya. Penataan batu alam yang
            baik bakal menghadirkan kesan dinamis dan tidak monoton. Fungsinya
            tidak hanya sebagai pemanis eksterior rumah, tetapi juga dapat
            diaplikasikan menjadi elemen dekorasi dinding pada interior hunian.
          </p>
        </div>
      </div>
    </Layout>
  );
}
