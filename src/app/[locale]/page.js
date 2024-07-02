import Image from "next/image";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import TestimonialComments from "@/components/testimonialComments";
import FetchImageScroll from "@/components/fetchImageScroll";
import { Instagram, Link2 } from "react-feather";
import LatestBlog from "./blogs/components/latestBlog";
import FetchLogoScroll from "@/components/fetchLogoScroll";
import CourseSchedule from "@/components/Schedule/courseSchedule";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { testimonialHome } from "../data/testimonial";

export async function generateMetadata({params: {locale}}) {
  return {
    title: "Explorem SARL",
    description: "We Make A Difference, We Make It Happen.",
    keywords: ['explore m','explorem','centre de formation','centre de formation marrakech	','center', 'center of learning', 'center of learning german','german','center','study','ausbildung in german','ausbildung','lungage german'],
    alternates: {
      canonical: "/en",
      languages: {
        de: "/de",
        ar: "/ar",
      },
      
    },

    openGraph: {
      title: 'Explorem SARL',
      description: 'We Make A Difference, We Make It Happen. ',
      url: 'https://explorem.net/',
      siteName: " Home page explorem",
      images: [
        {
          url: `/image/index/opengraph-image.jpg`,
          secureUrl: `/image/index/blogExplorem/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `We Make A Difference, We Make It Happen.  `,
        }
      ],
      type: "website",
     
    },
    
   
  };
 
}

export default  function Index({ params: { locale } }) {
  const t =  useTranslations("Index");
  return (
    <>
      <div className="bg-[#F5F5F5]  pt-32  space-y-8 py-12">
        <div className=" flex flex-col   items-center justify-center gap-4">
        <h1 className="flex items-center gap-4 justify-center flex-col text-xl lg:text-2xl font-extrabold capitalize">
          <span>
            {t("title.line1")}{" "}
            <span className="text-[#134BA1] px-2 py-1 bg-white">
              {t("title.line2")}
            </span>
          </span>
          <span>
            {t("title.line3")}{" "}
            <span className="bg-[#134BA1] px-2 py-1 text-white">
              {t("title.line4")}
            </span>
          </span>
        </h1>
          <div className=" flex lg:flex-row flex-col gap-4 items-center ">
            <Link
            title="page to Register For Candidates"
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
                title="Explorem logo"
                src="/image/aboutUS/logoHand.png"
                className="w-14 lg:w-16"
                width={195}
                height={159}
                alt="Explorem logo"
              />
              <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
                {t('latestUpdates')}
              </h2>
            </div>
            <LatestBlog />
            <div className=" text-center text-white">
              <Link
               title='page blogs for explorem'
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
          <ul className={` ${locale==='ar'?'*:border-r-4 text-right':'*:border-l-4 text-left'} *:border-[#0149a6] whitespace-pre-line  *:shadow *:bg-white *:p-2 *:pl-4 *:rounded-r-sm  px-2 lg:text-lg flex flex-col gap-4 font-normal list-outside leading-loose `}>
            <li><p>{t("whatWeHaveAchieved.line1")}</p></li>
            <li><p>{t("whatWeHaveAchieved.line2")}</p></li>
            <li><p>{t("whatWeHaveAchieved.line3")}</p></li>
            <li><p>{t("whatWeHaveAchieved.line4")}</p></li>
            <li><p>
              {t("whatWeHaveAchieved.line5")}
              </p>
              <div className="flex gap-4 items-center ">
                <a
                  title="interviewed with ZDF heute (German TV)"
                  target="_blank"
                  href="https://www.instagram.com/reel/C3lKOTfAwz3/?igsh=MTRkejE5YWY1bDViMA=="
                >
                  <Instagram
                    size={30}
                    className="  stroke-[#fff] rounded-md p-1 bg-[#f7543e]"
                  />
                </a>
                <a
                  title="interviewed with ZDF heute (German TV) in website zdf"
                  target="_blank"
                  href="https://www.zdf.de/nachrichten/politik/ausland/fachkraeftemangel-pflegepersonal-marokko-100.html"
                >
                  <Link2
                    size={30}
                    className=" stroke-[#fff] rounded-md p-1 bg-[#0149a6]"
                  />
                </a>
              </div>
            </li>
            <li><p>{t("whatWeHaveAchieved.line6")}</p></li>
            <li className=" ">
              {t("whatWeHaveAchieved.line7")}
              <div className="flex gap-4 items-center ">
                <a
                  title="Explorem nurse candidates relocated in Germany were featured in WDR Lokalzeit aus Köln"
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
            <li><p>{t("whatWeHaveAchieved.line8")}</p></li>
            <li><p>{t("whatWeHaveAchieved.line9")}</p></li>
            <li><p>{t("whatWeHaveAchieved.line10")}</p></li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className=" flex justify-center items-center gap-4 flex-col">
            <div className="flex gap-4 items-center">
              <Image
                title="Explorem logo"
                src="/image/aboutUS/logoHand.png"
                className="w-14 lg:w-16"
                width={195}
                height={159}
                alt="Explorem logo"
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
              {testimonialHome?.map((testimonial, index) => {
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
              title="page of testimonial for explorem"
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
