import React from "react";
import Link from "next/link";
// import Image from "next/image";

function index({ item, height }) {
  return (
    <Link href={`/products/${item.code}`} passHref>
      <a>
        <div className=" py-4 cursor-pointer transform transition duration-500 hover:scale-105">
          <div className="mb-4 inline-flex shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto hover:shadow-xl border-gray-400 transform transition duration-500 hover:scale-105">
            <div className="rounded-t-lg ">
              <img
                className="w-full rounded-t"
                src={item.thumbnail ? item.thumbnail : "/images/home-img1.jpg"}
                alt={item.title}
              />

              <div className="py-8 px-4 bg-white  rounded-b-md fd-cl">
                <span className="block text-lg text-gray-800 font-bold tracking-wide">
                  {item.title}
                </span>
                <span className="text-gray-600 text-sm read-more">
                  {item.desc}
                </span>
                <div className=" text-left mt-4">
                  <button className="bg-gradient-to-r from-gray-500 via-gray-800 to-gray-600 text-sm text-white py-1 px-3 rounded">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default index;
