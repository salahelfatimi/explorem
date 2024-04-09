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
    "https://utfs.io/f/f4c6f5f8-a9c1-43dc-b9d9-c9cb5b7473f4-jlo1c3.jpg",
    "https://utfs.io/f/b7543642-62fb-4d92-9114-e7771da839b7-vmbc8r.jpg",
    "https://utfs.io/f/b2b7c254-2b7c-4624-8cff-8f7437fd7fa8-jlo1c4.jpg",
    "https://utfs.io/f/d85adf98-614d-4585-b8db-f9a0ee5fd57d-vmbc8s.jpg",
    "https://utfs.io/f/523cff19-04cb-4d62-a4fb-fad93c957897-jlo1c5.jpg",
    "https://utfs.io/f/03f5ffd8-6c66-4e70-af4a-f004a7f3a2f7-jlo1c2.jpg",
    "https://utfs.io/f/c5d41032-39a0-49e3-b020-04b9017d0497-jlo1c7.jpg",
    "https://utfs.io/f/64303de1-d64e-419e-bd93-3357eba72581-jlo1c6.jpg",
    "https://utfs.io/f/996d0739-a423-48ff-a5af-5dd96322642f-vmbc8q.jpg",
    "https://utfs.io/f/c91c9872-f303-4b6e-8a8c-bbb19b6c55af-jlo1ca.jpg",
  ];
  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div>
            <div className="relative">
              <Image
                quality={40}
                src="/image/employers/saction1.jpg"
                className="h-auto max-w-full w-full  "
                width={1920}
                height={1080}
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
                className="border-l-4 flex flex-col border-[#0149a6] bg-white p-2 pl-4  rounded-r-sm container"
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
                    className="w-14 lg:w-16"
                    width={195}
                    height={159}
                    alt="Explorem"
                  />
                  <span className=" capitalize font-bold text-xl lg:text-3xl text-[#0149a6]">
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
                  className="w-14 lg:w-16"
                  width={195}
                  height={159}
                  alt="Explorem"
                />
                <span className=" capitalize text-center font-bold text-md lg:text-3xl text-[#0149a6]">
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
