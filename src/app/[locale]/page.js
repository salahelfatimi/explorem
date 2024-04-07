import { useTranslations } from "next-intl";
import Image from "next/image";

import TestimonialsSlider from "@/components/testimonialsSlider";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";

const locales = ["en", "de", "ar"];
const { Link } = createSharedPathnamesNavigation({ locales });

export default function Index() {
  const t = useTranslations("Index");
  const images = [
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
      <div className="bg-[#F5F5F5]  space-y-8 py-12">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className="flex items-center gap-4 justify-center flex-col text-xl lg:text-2xl font-extrabold capitalize">
            <span>
              {t("title.line1")}
              {"   "}

              <span className="text-[#134BA1] px-2 py-1  bg-white ">
                {t("title.line2")}
              </span>
            </span>
            <span>
              {t("title.line3")}
              {"   "}
              <span className="bg-[#134BA1] px-2 py-1 text-white  ">
                {t("title.line4")}
              </span>
            </span>
          </h1>
          <div className=" flex lg:flex-row flex-col gap-4 items-center ">
            <Link
              href="/candidates"
              className="bg-[#134BA1] lg:py-3 py-2 transition duration-700 ease-in-out  border-4 border-[#134BA1]  px-6 text-white font-bold rounded-full  capitalize"
            >
              {t("button.Candidates")}
            </Link>
            {/* <Link
              href="/employers"
              className="bg-[#ffff] lg:py-3 py-2 transition duration-700 ease-in-out  border-4 border-[#134BA1]  px-6 text-[#134BA1] font-bold rounded-full  capitalize"
            >
              {t("button.Employers")}
            </Link> */}
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            {" "}
            <InfiniteHorizontalScroll images={images} />
          </div>
        </div>
        <div>
          <div className=" container grid items-center gap-4  grid-cols-1  lg:grid-cols-2">
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/training.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.0.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.0.description")}
                </span>
              </div>
            </div>
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/search-job.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.1.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.1.description")}
                </span>
              </div>
            </div>
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/social-management.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.2.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.2.description")}
                </span>
              </div>
            </div>
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/diploma.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.3.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.3.description")}
                </span>
              </div>
            </div>
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/academy-cap.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.4.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.4.description")}
                </span>
              </div>
            </div>
            <div className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2">
              <div className=" border-[#0149a6]   border-4 p-3 rounded-full">
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/passport.svg`}
                  className="w-11 min-w-11 fill-white"
                  alt="explorem"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                  {t("grids.5.title")}
                </span>
                <span className=" text-md font-medium">
                  {t("grids.5.description")}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
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
            <p className=" capitalize font-bold text-xl lg:text-2xl text-[#0149a6]">
              {t("vedioTitle")}
            </p>
          </span>

          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            width="320"
            height="240"
            preload="none"
          >
            <source src="/video/Explorem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <TestimonialsSlider />
        </div>
      </div>
    </>
  );
}
