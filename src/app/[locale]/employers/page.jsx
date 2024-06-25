import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import Image from "next/image";
import FetchImageScroll from "@/components/fetchImageScroll";
import { Crosshair, EyeIcon, FileTextIcon, FolderCheck, GraduationCap, Handshake, Infinity, MousePointerClick, PaperclipIcon, Plane, RotateCcwIcon, Share2, User2 } from "lucide-react";
import saction1 from '/public/image/employers/saction1.jpg'
import Contactform from "../contact/forma/contact";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  return {
    title: "Employers",
    description: "Our Best Services For Employers  ",
    alternates: {
      canonical: "/en/employers",
      languages: {
        de: "/de/employers",
        ar: "/ar/employers",
      },
      
    },
    images: [
      {
        url: `./opengraph-image.jpg`,
        width: 1200,
        height: 630,
      },
      {
        url: `./opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Explorem SARL",
      },
    ],
  };
};

export default   function Employers({ params: { locale } }) {

  const t =  useTranslations("Employers");
  const services = [
    {
      svg:<Handshake  size={40}/>,
      title: t("Services.line1.title"),
      description: t("Services.line1.description"),
    },
    {
      svg:<Crosshair size={40}/>,
      title: t("Services.line2.title"),
      description: t("Services.line2.description"),
    },
    {
      svg:<GraduationCap  size={40}/>,
      title: t("Services.line3.title"),
      description: t("Services.line3.description"),
    },
    {
      svg:<FileTextIcon size={40}/>,
      title: t("Services.line4.title"),
      description: t("Services.line4.description"),
    },
    {
      svg:<MousePointerClick size={40}/>,
      title: t("Services.line5.title"),
      description: t("Services.line5.description"),
    },
    {
      svg:<EyeIcon size={40}/>,
      title: t("Services.line6.title"),
      description: t("Services.line6.description"),
    },
    {
      svg:<PaperclipIcon size={40}/>,
      title: t("Services.line7.title"),
      description: t("Services.line7.description"),
    },
    {
      svg: <Plane size={40}/>,
      title: t("Services.line8.title"),
      description: t("Services.line8.description"),
    },
    {
      svg:<FolderCheck size={40}/>,
      title: t("Services.line9.title"),
      description: t("Services.line9.description"),
    },
    {
      svg:<Infinity  size={40}/>,
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
                title={'image of book and file explorem'}
                src={saction1}
                className="h-screen max-w-full w-full object-cover  "
                width={1920}
                height={1080}
                placeholder = 'blur'
                alt="image of book and file explorem"
              />

              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-9 text-[#0149A6]">
                  <div className=" text-3xl lg:text-4xl  font-bold text-center">
                    <h1>{t("titleEmployers")}</h1>
                  </div>
                </div>
              </div>
            </div>
            <h2 className=" bg-[#0149A6]   font-bold text-xl lg:text-3xl text-md text-[#ffff] text-center p-4  ">
              {t("descriptionEmployers")}
            </h2>
          </div>

          <div className="  grid grid-cols-1 lg:grid-cols-3 container gap-6   ">
            {services.map((ele, index) => (
              
              <div
                key={index}
                className="relative  last:col-start-1 lg:last:col-start-2  rounded w-full  h-60 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card     "
              >
                <h2 className="absolute font-extrabold flex-col gap-4 p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                  {ele.svg}
                  {ele.title}
                </h2>
                <p className=" absolute inset-0 w-full h-full flex justify-center    items-center p-5 text-center font-semibold    transition-all z-10 card-back   text-sm md:text-base opacity-0 duration-700 group-hover/item:opacity-100 ">
                  {ele.description}
                </p>
              </div>
            ))}
          </div>
          <div>
            <div className="space-y-8">
              <div className="flex flex-col container items-center gap-4">
                <span className="flex  items-center gap-2 justify-center">
                  <Image
                    title="Explorem logo"
                    src="/image/aboutUS/logoHand.png"
                    className="w-14 lg:w-16"
                    width={195}
                    height={159}
                    alt="Explorem logo"
                  />
                  <h2 className=" capitalize font-bold text-center text-xl lg:text-3xl text-[#0149a6]">
                    {t("ourJourneyWithPartners")}
                  </h2>
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
                  <h3 className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
                    <p>{t("slogen.line1")}</p>
                    <p>{t("slogen.line2")}</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-8">
            <div className="flex flex-col items-center gap-4">
              <span className="flex  items-center gap-4 justify-center">
                <Image
                  title="Explorem logo"
                  src="/image/aboutUS/logoHand.png"
                  className="w-14 lg:w-16"
                  width={195}
                  height={159}
                  alt="Explorem logo"
                />
                <h2 className=" capitalize text-center font-bold text-md lg:text-3xl text-[#0149a6]">
                  {t("getInTouch")}
                </h2>
              </span>
            </div>

            <Contactform/>
          </div>
        </div>
      </div>
    </>
  );
}
