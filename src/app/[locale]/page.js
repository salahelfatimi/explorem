import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import { fetchTestimonial } from "../api/data/testimonial/actions";
import TestimonialComments from "@/components/testimonialComments";
import FetchImageScroll from "@/components/fetchImageScroll";

const locales = ["en", "de", "ar"];
const { Link } = createSharedPathnamesNavigation({ locales });

export default async function Index() {
  const testimonial = await fetchTestimonial(6);
  const t = await getTranslations("Index");
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
  const grids = [
    {
      title: t("grids.0.title"),
      description: t("grids.0.description"),
      icon: "training.svg",
    },
    {
      title: t("grids.1.title"),
      description: t("grids.1.description"),
      icon: "search-job.svg",
    },
    {
      title: t("grids.2.title"),
      description: t("grids.2.description"),
      icon: "social-management.svg",
    },
    {
      title: t("grids.3.title"),
      description: t("grids.3.description"),
      icon: "diploma.svg",
    },
    {
      title: t("grids.4.title"),
      description: t("grids.4.description"),
      icon: "academy-cap.svg",
    },
    {
      title: t("grids.5.title"),
      description: t("grids.5.description"),
      icon: "passport.svg",
    },
  ];
  return (
    <>
      <div className="bg-[#F5F5F5]   space-y-8 py-12">
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
              className="bg-[#134BA1] lg:py-3 hover:text-[#0149a6] hover:bg-white hover:border-[#0149a6] py-2 transition duration-700 ease-in-out  border-4 border-[#134BA1]  px-6 text-white font-bold rounded-full  capitalize"
            >
              {t("button.Candidates")}
            </Link>
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll>
              <FetchImageScroll />
            </InfiniteHorizontalScroll>
          </div>
        </div>

        <div className=" flex flex-col gap-6 ">
          <div className="flex justify-center gap-4 items-center">
            <Image
              src="/image/aboutUS/logoHand.png"
              className="w-14 lg:w-16"
              width={195}
              height={159}
              alt="Explorem"
            />
            <h2 className="text-3xl text-center font-bold text-[#0149a6] capitalize">
              Our Services
            </h2>
          </div>

          <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
            {grids.map((grid, index) => (
              <div
                key={index}
                className="flex  flex-col  shadow-md odd:bg-[#0149a6] odd:text-white even:text-[#0149a6] even:bg-white justify-center bg-white py-14 px-4   rounded-md items-center gap-6"
              >
                <Image
                  width={500}
                  height={500}
                  src={`/image/index/icon/${grid.icon}`}
                  className="w-14 min-w-14 "
                  alt="explorem"
                />

                <div className="flex flex-col items-center gap-2">
                  <span className=" font-bold text-center lg:text-xl break-words">
                    {grid.title}
                  </span>
                  <span className=" text-md  font-medium text-center">
                    {grid.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <span className="flex  items-center gap-4 justify-center">
            <p className=" capitalize font-bold text-2xl lg:text-3xl text-[#0149a6]">
              {t("vedioTitle")}
            </p>
            <Image
              src="/image/aboutUS/logoHand.png"
              className="w-14 lg:w-16"
              width={195}
              height={159}
              alt="Explorem"
            />
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
        <div className="flex flex-col gap-8">
          <div className=" flex justify-center items-center gap-4 flex-col">
            <div className="flex gap-4 items-center">
              <Image
                src="/image/aboutUS/logoHand.png"
                className="w-14 lg:w-16"
                width={195}
                height={159}
                alt="Explorem"
              />
              <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
                {t("testimonial.title")}
              </h2>
            </div>

            <p className=" text-xl font-medium text-gray-600">
              {t("testimonial.description")}
            </p>
          </div>
          <div className=" flex flex-col container  gap-4 justify-center">
            {testimonial?.length > 0 ? (
              <div className=" gap-10 columns-1 md:columns-2 lg:columns-3 space-y-6 items-center  ">
                {testimonial?.map((testimonial, index) => {
                  return (
                    <div
                      key={index}
                      className={`even:bg-white  break-inside-avoid-column odd:bg-[#0149a6] odd:text-white border-[#ffff]   rounded  shadow-lg  `}
                    >
                      <TestimonialComments testimonial={testimonial} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col gap-6 h-full">
                <p className="font-medium text-lgtext-center text-[#9DA4B2]">
                  No testimonial provided
                </p>
              </div>
            )}
          </div>
          <div className=" text-center text-white">
            <Link
              className="bg-[#0149a6] w-fit py-2 border-white px-4 font-semibold border-2 duration-500 hover:text-[#0149a6] hover:bg-white hover:border-[#0149a6]"
              href="/testimonial"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
