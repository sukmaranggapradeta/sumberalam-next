import React from "react";

export default function index() {
  return (
    <div className="">
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
        <img
          className="h-56 w-full object-cover object-center"
          // src={el.thumbnail}
          alt=""
        />
        <div className="p-4 h-auto md:h-40 lg:h-48">
          <a
            href="#"
            className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
          >
            {/* {el.title} */}
          </a>
          <div className="overflow-ellipsis overflow-hidden text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm ">
            {/* {el.desc} */}
          </div>
          <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
            <a
              className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
              href="#"
            >
              #forest
            </a>
            <a
              className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
              href="#"
            >
              #walk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
