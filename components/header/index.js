import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="bg-gray-800 w-full flex-none">
        <div className="mx-auto px-2 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block"  --> */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  src="https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/sumberalam.png?raw=true"
                  alt={"sumber alam"}
                  height={32}
                  width={32}
                />
                {/* <Image
                  priority
                  src="https://github.com/sukmaranggapradeta/sumberalam_img/blob/main/icon/sumberalam.png?raw=true"
                  // classNameName={"block lg:hidden h-8 w-auto"}
                  height={32}
                  width={32}
                  alt={"sumber alam"}
                /> */}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                      aria-current="page"
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/products">
                    <a
                      className={
                        router.pathname == "/products"
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Products
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname == "/contact"
                          ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showMobileMenu && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/">
                <a
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
              <Link href="/products">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Products
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
