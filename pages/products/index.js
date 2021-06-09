import React, { useState } from "react";
import Layout from "components/layout";

import CardProduct from "components/cardLama";
import NoData from "components/noData";

// import { useAppContext } from "context/state";

import dataProducts from "context/dataProducts.json";

// export async function getStaticProps() {
//   const { dataSosmed } = useAppContext();
//   // fetch list of posts
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_page=1"
//   );
//   // console.log("dataSosmed", dataSosmed);
//   // console.log("response", response);
//   const postList = await response.json();
//   return {
//     props: {
//       postList,
//     },
//   };
// }

export default function products() {
  // const { dataProducts } = useAppContext();
  const [searchInput, setSearchInput] = useState("");

  const pageMeta = {
    title: "Segala jenis produk batu alam di Sumber Alam Bali",
    description:
      "Toko Batu Alam Terlengkap di bali, kami menyediakan segala jenis batu alam palimanan, candi, andesit, pilah, marmer, ",
    image:
      "https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/sumberalam-toko.jpeg?raw=true&fit=crop&w=1600&h=800",
  };

  return (
    <Layout pageMeta={pageMeta}>
      {/* {console.log("postList", postList)} */}
      <section className="flex flex-col w-full">
        <div className="flex flex-1">
          <div className="mx-auto mb-6 bg-transparent border rounded-md dark:border-gray-700 w-full focus-within:ring ring-primary focus-within:border-teal-500 z-50">
            <form
              action="/search"
              className="flex flex-wrap justify-between md:flex-row"
            >
              <input
                value={searchInput}
                type="search"
                name="query"
                placeholder="Search..."
                onChange={e => setSearchInput(e.target.value)}
                className="flex-1 p-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
              />
              <button className="flex justify-center w-auto md:w-full p-2 m-1 transition-colors duration-200 transform rounded-md bg-primary lg:w-auto hover:bg-teal-300 focus:outline-none focus:bg-teal-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        {dataProducts.filter(
          el => el.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
        ).length <= 0 && <NoData setSearchInput={setSearchInput} />}

        <div className="sumberalam-container ">
          {dataProducts
            .filter(
              el =>
                el.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
            )
            .map((item, i) => (
              // <div key={i} className="sumberalam-item">
              <CardProduct item={item} key={i} />
              // </div>
            ))}
        </div>
      </section>
    </Layout>
  );
}
