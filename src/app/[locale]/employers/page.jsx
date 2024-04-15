
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import Image from "next/image";
import Contact from "../contact/page";
import { useTranslations } from "next-intl";
import FetchImageScroll from "@/components/fetchImageScroll";

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
  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div>
            <div className="relative">
              <Image
                quality={100}
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

          <div className="px-2 grid grid-cols-1 lg:grid-cols-3  container gap-4  list-outside ">
            {services.map((ele, index) => (
              <div
                key={index}
                className="relative w-96 h-60  text-white overflow-hidden cursor-pointer transition-all duration-700 card flex flex-col   p-2  container"
              >
                <span className="absolute font-bold p-4 text-center inset-0 w-full h-full flex justify-center items-center rounded-2xl  bg-white transition-all duration-100 delay-200 z-20 hover:opacity-0 text-[#0149a6]">
                  {ele.title}
                </span>
                <span className=" absolute inset-0 w-full h-full flex justify-center items-center p-5 text-center font-semibold rounded-2xl bg-[#ffff] text-[#0149A6]  transition-all z-10 card-back  text-sm md:text-base">
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
                  <InfiniteHorizontalScroll>
                    <FetchImageScroll />
                  </InfiniteHorizontalScroll>
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
