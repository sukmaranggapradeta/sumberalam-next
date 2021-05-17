import React from "react";

import styles from "styles/Home.module.css";

import { useAppContext } from "context/state";

import Layout from "components/layout";

export default function contact() {
  const { dataSosmed } = useAppContext();

  const pageMeta = {
    title: "Contact Us - Sumber Alam Bali",
    description:
      "Toko Batu Alam Terlengkap di bali silahkan langsung data ke showroom atau bisa menghubungi toko batu kami",
    image:
      "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/sumberalam-toko.jpeg?raw=true&fit=crop&w=1600&h=800",
  };

  return (
    <Layout pageMeta={pageMeta}>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <h1 className={`${styles.title} text-left`}>Get In Touch</h1>
          <div className="line-title w-2/5" />
          <div className="flex my-2 flex-col">
            {dataSosmed
              .filter(
                el =>
                  el.code === "contact" ||
                  el.code === "email" ||
                  el.code === "location"
              )
              .map((item, i) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                  key={i}
                >
                  <div className="flex items-center my-1">
                    <div className="my-2 mr-3 flex-none">
                      <img
                        src={`icon/${item.icon}`}
                        alt={item.name}
                        height={32}
                        width={32}
                      />
                    </div>
                    <p className="flex align-items-center mb-0">{item.name}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        <div className="flex-1 w-full bg-loading bg-no-repeat bg-contain bg-center  p-4">
          <div className="mapouter w-full md:h-full">
            <div className="gmap_canvas  w-full h-full">
              <iframe
                title="map-sumber-alam-bali"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=prod%20ida%20bagus%20mantra%209x&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
