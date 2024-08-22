"use client";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  return (
    <header className="text-gray-600 shadow">
      <div className="container-headnav flex justify-between items-center p-[20px] cmd:flex-col csm:flex-row gap-y-[20px]">
        <Link href={"/"} className="flex items-center gap-x-[10px]">
          {/* <img src="/img/gerb.svg" alt="" className="w-[50px]" /> */}
          <Image src="/img/gerb.svg" alt="" className="w-[50px]" />

          <span className="text-[18px] text-stone-800 font-semibold">
            Baxrin MFY
          </span>
        </Link>

        <nav className="flex gap-x-[20px] csm:hidden">
          <Link href={"/"} className="text-stone-800 hover:text-stone-400">
            Bosh sahifa
          </Link>
          <Link href={"/staff"} className="text-stone-800 hover:text-stone-400">
            Kengash Azolari
          </Link>
          <Link href={"/streets"} className="text-stone-800 hover:text-stone-400">
            Mahalla ko’chalari
          </Link>
          <Link href={"/contact"} className="text-stone-800 hover:text-stone-400">
            Bog’lanish
          </Link>
        </nav>

        <div className="flex gap-x-[20px] cxl:gap-x-[15px] clg:hidden">
          <Link
            href={"#"}
            className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
          >
            <FaYoutube  className="text-gray-600"/>
          </Link>
          <Link
            href={"#"}
            className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
          >
            <RiInstagramFill  className="text-gray-600"/>
          </Link>
          <Link
            href={"#"}
            className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
          >
            <FaTelegramPlane  className="text-gray-600"/>
          </Link>
          <Link
            href={"#"}
            className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
          >
            <FaFacebook  className="text-gray-600"/>
          </Link>
        </div>

        <button
          className="csm:block hidden"
          onClick={() => setIsClick(!isClick)}
        >
          {isClick ? (
            // <img src="/img/burger1.png" alt="menu" className="w-[35px]" />
            <Image src="/img/burger1.png" alt="menu" className="w-[35px]" />

          ) : (
            // <img src="/img/burger1.png" alt="menu" className="w-[30px]" />
            <Image src="/img/burger1.png" alt="menu" className="w-[30px]" />

          )}
        </button> 
      </div>
      {isClick && (
        <div className="p-[20px] hidden csm:flex flex-col items-center gap-y-[20px]">
          <Link href={"/"} className="text-stone-800 hover:text-stone-400">
            Bosh sahifa
          </Link>
          <Link href={"/"} className="text-stone-800 hover:text-stone-400">
            Kengash Azolari
          </Link>
          <Link href={"/"} className="text-stone-800 hover:text-stone-400">
            Mahalla ko’chalari
          </Link>
          <Link href={"/"} className="text-stone-800 hover:text-stone-400">
            Bog’lanish
          </Link>
          <div className="flex gap-x-[20px] cxl:gap-x-[15px]">
            <Link
              href={"#"}
              className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
            >
              <FaYoutube className="text-gray-600"/>
            </Link>
            <Link
              href={"#"}
              className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
            >
              <RiInstagramFill className="text-gray-600"/>
            </Link>
            <Link
              href={"#"}
              className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
            >
              <FaTelegramPlane className="text-gray-600"/>
            </Link>
            <Link
              href={"#"}
              className="text-gray-900 text-[20px] cxl:text-[15px] hover:text-stone-400"
            >
              <FaFacebook className="text-gray-600"/>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
