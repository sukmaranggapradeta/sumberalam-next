import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "components/layout";
// import NoData from "components/NoData";
import styles from "styles/Home.module.css";
import { useAppContext } from "context/state";
// import Image from "next/image";

export default function ProductDetail() {
  const router = useRouter();
  const { code } = router.query;
  const { dataProducts } = useAppContext();

  useEffect(() => {
    console.log("dataProducts", dataProducts);
    console.log("code", code);
  }, []);

  const pageMeta = {
    title: code ? code : "",
    description: code
      ? dataProducts.filter(item => item.code === code)[0].desc
      : "",
    image: code
      ? dataProducts.filter(item => item.code === code)[0].thumbnail
      : "",
  };

  return (
    <Layout pageMeta={pageMeta}>
      <section className="flex flex-col w-full">
        <div className="flex">
          {dataProducts.filter(item => item.code === code).length > 0 && (
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
              <div className="flex-1">
                <div className="h-72 md:h-96 relative w-auto">
                  <img
                    className="d-block w-100"
                    src={
                      dataProducts.filter(item => item.code === code)[0]
                        .thumbnail
                        ? `/${
                            dataProducts.filter(item => item.code === code)[0]
                              .thumbnail
                          }`
                        : "/images/home-img1.jpg"
                    }
                    alt={"item"}
                  />
                  {/* <Image
                    alt="Mountains"
                    src={
                      dataProducts.filter(item => item.code === code)[0]
                        .thumbnail
                        ? `/${
                            dataProducts.filter(item => item.code === code)[0]
                              .thumbnail
                          }`
                        : "/images/home-img1.jpg"
                    }
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    priority
                  /> */}
                </div>
                <div className="w-100 justify-content-center">
                  {/* <Image
                    priority
                    src={
                      dataProducts.filter(item => item.code === code)[0]
                        .thumbnail
                        ? `/${
                            dataProducts.filter(item => item.code === code)[0]
                              .thumbnail
                          }`
                        : "/images/home-img1.jpg"
                    }
                    // classNameName={"block lg:hidden h-8 w-auto"}
                    height={1080}
                    width={810}
                    // layout="fill"
                    // objectFit="contain"
                    alt={"sumber alam"}
                  /> */}
                  {/* <Carousel className="mb-2" indicators={false}>
                      {dataProducts.filter(item => item.code === code)[0]
                        .sample &&
                        dataProducts
                          .filter(item => item.code === code)[0]
                          .sample.map((item, i) => (
                            <Carousel.Item key={i}>
                              <img
                                className="d-block w-100"
                                src={require(`img/products/small/${item}`)}
                                alt={item}
                              />
                            </Carousel.Item>
                          ))}
                    </Carousel> */}
                </div>
              </div>
              <div className="flex-1">
                <h1
                  className={`${styles.title} text-xl md:text-3xl my-3 md:my-4`}
                >
                  {dataProducts.filter(item => item.code === code)[0].title}
                </h1>
                <div className="line-title w-2/5 " />
                <p>{dataProducts.filter(item => item.code === code)[0].desc}</p>

                <p>
                  {dataProducts.filter(item => item.code === code)[0].desc2 &&
                    dataProducts.filter(item => item.code === code)[0].desc2}
                </p>

                <p>
                  {dataProducts.filter(item => item.code === code)[0].desc3 &&
                    dataProducts.filter(item => item.code === code)[0].desc3}
                </p>

                <div
                  className={`${styles.title} text-xl md:text-3xl my-3 md:my-4`}
                >
                  Size
                </div>
                <div className="line-title w-2/5" />

                <table className="table-auto border-collapse border border-gray-300 w-full mb-4">
                  <thead>
                    <tr>
                      <th className=" border border-gray-300">#</th>
                      <th className=" border border-gray-300">Length </th>
                      <th className=" border border-gray-300">Width</th>
                      <th className=" border border-gray-300">Thick</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataProducts.filter(item => item.code === code)[0].size &&
                      dataProducts
                        .filter(item => item.code === code)[0]
                        .size.map((item, i) => (
                          <tr key={i}>
                            <td className="border border-gray-300 text-center">
                              {i + 1}
                            </td>
                            <td className="border border-gray-300">{item.p}</td>
                            <td className="border border-gray-300">{item.l}</td>
                            <td className="border border-gray-300 ">
                              {item.t}
                            </td>
                          </tr>
                        ))}
                    <tr>
                      <td className="text-center">
                        {dataProducts.filter(item => item.code === code)[0].size
                          ? dataProducts.filter(item => item.code === code)[0]
                              .size.length + 1
                          : "1"}
                      </td>
                      <td colSpan="3" className="border border-gray-300">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://api.whatsapp.com/send?phone=628124641050&text=sumberalambali.com - ${
                            dataProducts.filter(item => item.code === code)[0]
                              .title
                          }&source=&data=`}
                        >
                          <div className="flex items-center w-full bg-gray-300">
                            <div className="p-2 mr-3 ">
                              <img
                                src="/icon/phone.png"
                                alt={"chat"}
                                height={32}
                                width={32}
                              />
                              {/* <Image
                                priority
                                src="/icon/phone.png"
                                height={32}
                                width={32}
                                alt={"chat"}
                              /> */}
                            </div>
                            <div className="">Custom Size - Chat here</div>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  className={`${styles.title} text-xl md:text-3xl my-3 md:my-4`}
                >
                  Contoh Pemasangan
                </div>
                <div className="line-title w-2/5 " />
                <div className="h-80 w-auto">
                  <iframe
                    title={
                      dataProducts.filter(item => item.code === code)[0].title
                    }
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/WRk1Sl_IYqk"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}

          {/* {dataProducts.filter(item => item.code === code).length <= 0 && (
              <NoData back="/products" />
            )} */}
        </div>
      </section>
    </Layout>
  );
}
