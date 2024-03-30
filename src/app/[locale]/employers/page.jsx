"use client";

import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import Image from "next/image";
import Contact from "../contact/page";
import { useTranslations } from "next-intl";




export default function Employers() {
 const t = useTranslations("Employers");

  const services = [
    {
      title: t("Services.line1.title"),
      description: t("Services.line1.description"),
    },
    {
      title: t("Services.line2.title"),
      description: t("Services.line2.description"),
    },
    {
      title: t("Services.line3.title"),
      description: t("Services.line3.description"),
    },
    {
      title: t("Services.line4.title"),
      description: t("Services.line4.description"),
    },
    {
      title: t("Services.line5.title"),
      description: t("Services.line5.description"),
    },
    {
      title: t("Services.line6.title"),
      description: t("Services.line6.description"),
    },
    {
      title: t("Services.line7.title"),
      description: t("Services.line7.description"),
    },
    {
      title: t("Services.line8.title"),
      description: t("Services.line8.description"),
    },
    {
      title: t("Services.line9.title"),
      description: t("Services.line9.description"),
    },
    {
      title: t("Services.line10.title"),
      description: t("Services.line10.description"),
    },
  ];
  const Partners = [
    { src: "/image/employers/partnersGrid/imagePartners3.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners4.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners5.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners6.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners1.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners7.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners8.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners9.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners10.jpg" },
  ];
  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div>
            <div className="relative">
              <Image
                src="/image/employers/saction1.jpg"
                className="h-auto max-w-full w-full  "
                width={6240}
                height={2153}
                quality={50}
                alt="Explorem"
              />

              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-2 lg:p-9 text-[#0149A6]">
                  <div className="lg:text-4xl text-md font-bold">
                    <h1>{t("titleEmployers")}</h1>
                  </div>
                </div>
              </div>
            </div>
            <h2 className=" bg-[#0149A6]   font-bold lg:text-3xl text-md text-[#ffff] text-center p-4  ">
              {t("descriptionEmployers")}
            </h2>
          </div>

          <div className="px-2 grid grid-cols-1 lg:grid-cols-2  container gap-4  list-outside ">
            {services.map((ele, index) => (
              <div
                key={index}
                className="border-l-4 flex flex-col border-[#c:\Users\salah\Downloads\favicon_io\favicon.ico] bg-white p-2 pl-4  rounded-r-sm container"
              >
                <span className="text-md lg:text-lg  font-semibold mb-4 text-[#0149a6]">
                  {ele.title}
                </span>
                <span className="text-gray-700 text-sm md:text-base">
                  {ele.description}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <span className="flex  items-center gap-4 justify-center">
                  <Image
                    src="/image/aboutUS/logoHand.png"
                    className="w-20 lg:w-24"
                    width={195}
                    height={159}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt="Explorem"
                  />
                  <span className=" capitalize font-bold text-xl lg:text-2xl text-[#0149a6]">
                    {t("ourJourneyWithPartners")}
                  </span>
                </span>
              </div>
              <div className="bg-[#0149a6] py-6 ">
                <div className="px-2">
                  <InfiniteHorizontalScroll images={Partners} />
                </div>
              </div>
              <div className=" container">
                <div className="bg-[#0149A6] rounded-md px-4 py-10  ">
                  <span className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
                    <p>{t("slogen.line1")}</p>
                    <p>{t("slogen.line2")}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-8">
            <div className="flex flex-col items-center gap-4">
              <span className="flex  items-center gap-4 justify-center">
                <Image
                  src="/image/aboutUS/logoHand.png"
                  className="w-20 lg:w-24"
                  width={195}
                  height={159}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="Explorem"
                />
                <span className=" capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
                  {t("getInTouch")}
                </span>
              </span>
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
