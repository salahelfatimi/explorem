import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import { fetchTestimonialLatest } from "../api/data/testimonial/actions";
import TestimonialComments from "@/components/testimonialComments";
import FetchImageScroll from "@/components/fetchImageScroll";
import { Instagram, Link2 } from "react-feather";
import LatestBlog from "./blogs/components/latestBlog";
import FetchLogoScroll from "@/components/fetchLogoScroll";
import CourseSchedule from "@/components/Schedule/courseSchedule";
import GetBase64Image from "../base64/getBase64ImageSingle";

const locales = ["en", "de", "ar"];
const { Link } = createSharedPathnamesNavigation({ locales });

export default async function Index() {
  const testimonial = await fetchTestimonialLatest();
  const t = await getTranslations("Index");

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
        <div>
          <div className="bg-[#0149a6] py-6 ">
            <div className="px-2">
              <InfiniteHorizontalScroll>
                <FetchImageScroll />
              </InfiniteHorizontalScroll>
            </div>
          </div>
          <div className=" flex bg-white py-10 justify-center items-center gap-8 flex-col">
            <div className="flex gap- items-center">
              <Image
                src="/image/aboutUS/logoHand.png"
                className="w-14 lg:w-16"
                width={195}
                height={159}
                alt="Explorem"
              />
              <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
                {t('latestUpdates')}
              </h2>
            </div>
            <LatestBlog />
            <div className=" text-center text-white">
              <Link
                className="bg-[#0149a6] w-fit py-2 border-white px-4 font-semibold border-2 duration-500 hover:text-[#0149a6] hover:bg-white hover:border-[#0149a6]"
                href="/blogs"
              >
                {t("seeMore")} {t('blog')}
              </Link>
            </div>
          </div>
        </div>

        <div className=" container flex flex-col items-center justify-center  gap-4">
          <div className="flex gap-4 items-center">
            <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
              {t("whatWeHaveAchieved.title")}
            </h2>
          </div>
          <ul className="*:border-l-4 *:border-[#0149a6] *:shadow *:bg-white *:p-2 *:pl-4 *:rounded-r-sm  px-2 lg:text-lg flex flex-col gap-4 font-normal list-outside leading-loose ">
            <li>{t("whatWeHaveAchieved.line1")}</li>
            <li>{t("whatWeHaveAchieved.line2")}</li>
            <li>{t("whatWeHaveAchieved.line3")}</li>
            <li>{t("whatWeHaveAchieved.line4")}</li>
            <li>
              {t("whatWeHaveAchieved.line5")}
              <div className="flex gap-4 items-center ">
                <a
                  arget="_blank"
                  href="https://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA=="
                >
                  <Instagram
                    size={30}
                    className="  stroke-[#fff] rounded-md p-1 bg-[#f7543e]"
                  />
                </a>
                <a
                  arget="_blank"
                  href="https://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html"
                >
                  <Link2
                    size={30}
                    className=" stroke-[#fff] rounded-md p-1 bg-[#0149a6]"
                  />
                </a>
              </div>
            </li>
            <li>{t("whatWeHaveAchieved.line6")}</li>
            <li className=" border-l-4 border-[#0149a6] shadow  bg-white p-2 pl-4 flex flex-col gap-2 rounded-r-sm">
              {t("whatWeHaveAchieved.line7")}
              <div className="flex gap-4 items-center ">
                <a
                  arget="_blank"
                  href="https://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html"
                >
                  <Link2
                    size={30}
                    className=" stroke-[#fff] rounded-md p-1 bg-[#0149a6]"
                  />
                </a>
              </div>
            </li>
            <li>{t("whatWeHaveAchieved.line8")}</li>
            <li>{t("whatWeHaveAchieved.line9")}</li>
            <li>{t("whatWeHaveAchieved.line10")}</li>
          </ul>
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
          <div className=" flex flex-col container  gap-8 justify-center">
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
            <div className=" text-center text-white">
              <Link
                className="bg-[#0149a6] w-fit py-2 border-white px-4 font-semibold border-2 duration-500 hover:text-[#0149a6] hover:bg-white hover:border-[#0149a6]"
                href="/testimonial"
              >
                {t("seeMore")} {t("testimonial.title")}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center py-6 gap-4 items-center">
          <h2 className=" text-3xl border-b-4  border-[#0149a6] font-bold text-[#0149a6] capitalize">
          {t("ourPartners")}
          </h2>
        </div>
        <div className="bg-[#fff] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll>
              <FetchLogoScroll />
            </InfiniteHorizontalScroll>
          </div>
        </div>
      </div>
      <div className=" py-8 ">
        <CourseSchedule />
      </div>
    </>
  );
}
