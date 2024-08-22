import React from "react";
import Image from "next/image";

export default function News() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container-headnav px-6 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-[40px]">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              S‘ngi Yangiliklar
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              {/* <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              /> */}
              <Image
                src="https://dummyimage.com/720x400"
                alt="content"
                className="h-40 rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              {/* <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              /> */}
              <Image
                src="https://dummyimage.com/721x401"
                alt="content"
                className="h-40 rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Colosseum Roma
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-3 rounded-lg">
            <Image
                src="https://dummyimage.com/722x402"
                alt="content"
                className="h-40 rounded w-full object-cover object-center mb-6"
              />
              <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Great Pyramid of Giza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
