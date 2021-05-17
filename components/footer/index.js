import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "context/state";

export default function index({ postList }) {
  const { dataSosmed } = useAppContext();
  let year = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-full items-center bg-gray-100 py-2">
      <nav className="m-3">
        <Link href="/" exact>
          <a className="m-3 cursor-pointer">Home</a>
        </Link>

        <Link href="/products" exact>
          <a className="m-3 cursor-pointer">Products</a>
        </Link>

        <Link href="/contact" exact>
          <a className="m-3 cursor-pointer">Contact</a>
        </Link>
      </nav>

      <div className="flex">
        {dataSosmed &&
          dataSosmed
            .filter(el => el.code === "sosmed" || el.code === "location")
            .map((item, i) =>
              item.url ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                  key={i}
                >
                  <div className="mx-3 wrapper-icon-small">
                    {/* <img src={`/icon/${item.icon}`} alt={item.code} /> */}
                    <Image
                      alt={item.code}
                      src={`/icon/${item.icon}`}
                      height={32}
                      width={32}
                      // layout="responsive"
                      priority
                    />
                  </div>
                </a>
              ) : (
                <div className="mx-3 wrapper-icon-small">
                  {/* <img src={`/icon/${item.icon}`} alt={item.code} /> */}
                  <Image
                    alt={item.code}
                    src={`/icon/${item.icon}`}
                    height={32}
                    width={32}
                    // layout="responsive"
                    priority
                  />
                </div>
              )
            )}
      </div>

      <div>
        <p className="my-2">{`Copyright ©${year} Sumber Alam Bali`}</p>
      </div>
    </footer>
  );
}
