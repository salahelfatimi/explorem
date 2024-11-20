import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import Image from "next/image";

import FetchImageScroll from "@/components/fetchImageScroll";
import slogen1 from "/public/image/aboutUS/slogen1.jpg";
import saction1 from "/public/image/aboutUS/saction1.jpg";
import Gracila from "/public/image/aboutUS/team/Gracila.jpg";
import Abdessamad from "/public/image/aboutUS/team/Abdessamad.png";

import { useTranslations } from "next-intl";

export async function generateMetadata() {
  return {
    title: "About Us | Recruitment & Training",
    description: "Learn about Explorem SARL, a leader in recruitment and training. Discover our mission, vision, achievements, and expert team.",
    keywords: ['Explorem SARL, about us, recruitment services, training services, company mission, company vision, achievements, expert team, career development, HR solutions'],

    alternates: {
      canonical: `/en/about`,
      languages: {
        de: `/de/about`,
        ar: `/ar/about`,
      },
      
    },
    openGraph: {
      title: 'About Us | Recruitment & Training',
      description: 'Learn about Explorem SARL, a leader in recruitment and training. Discover our mission, vision, achievements, and expert team.',
      url: ['https://explorem.net/en/about','https://explorem.net/ar/about','https://explorem.net/de/about'],
      siteName: "about explorem ",
      images: [
        {
          url: `/image/aboutUS/opengraph-image.jpg`,
          secureUrl: `/image/aboutUS/blogExplorem/opengraph-image.jpg`,
          width: 1280,
          height: 612,
          alt: `Preview image for about explorem`,
        }
      ],
      type: "website",
     
    },
  };
};


export default  function About( { params: { locale } }) {
 
  const t = useTranslations("AboutUS");
  return (
    <div className="flex flex-col gap-8 pb-16 bg-[#F5F5F5] ">
      <div className="flex flex-col gap-10">
        <div className="relative">
          <Image
            title={"image of school explorem"}
            src={saction1}
            className=" h-screen max-w-full w-full object-cover   "
            width={1920}
            height={1080}
            quality={100}
            placeholder="blur"
            alt="image of school explorem"
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-[#0149A6] w-full items-center flex flex-col gap-4 capitalize pt-6 text-white">
              <h1 className=" text-3xl lg:text-4xl  font-bold text-center">{t("aboutUs")}</h1>
              <p className=" text-2xl bg-white text-[#0149A6] w-full text-center font-semibold p-2">{t("aboutUsSlogen")}</p>
            </div>
          </div>
        </div>

        <span className=" text-center  lg:text-2xl    container">
          <p>
            {t("aboutUsText.line1")}{" "}
            <span className=" font-bold text-[#0149A6] ">
              {t("aboutUsText.line2")}
            </span>
            {t("aboutUsText.line3")}
          </p>
          <p>{t("aboutUsText.line4")}</p>
          <p>{t("aboutUsText.line5")}</p>
        </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full container gap-4 ">
        <h2 className="bg-[#0149A6] text-white py-10 px-2 rounded-lg lg:w-1/2 font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
          <p>{t("slogen1.line1")}</p>
          <p>{t("slogen1.line2")}</p>
        </h2>
        <Image
          title={"Happy Students explorem"}
          src={slogen1}
          className="lg:w-1/3 rounded-xl"
          placeholder="blur"
          width={6240}
          height={3512}
          alt="Happy Students explorem"
        />
      </div>
      <div className="container flex flex-col gap-4 lg:flex-row w-full items-center justify-between text-center">
        <span className=" bg-white shadow lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <h2 className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid1.title")}
          </h2>
          <p className=" lg:text-lg font-medium">{t("grid.grid1.text")}</p>
        </span>
        <Image
          title="logo of explorem"
          width={195}
          height={159}
          src="/image/aboutUS/logoHand.png"
          className="w-28"
          alt="logo Explorem"
        />
        <span className=" bg-white shadow lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <h2 className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid2.title")}
          </h2>
          <p className=" lg:text-lg font-medium">{t("grid.grid2.text")}</p>
        </span>
      </div>
      <div className="bg-[url('/image/aboutUS/saction2.jpg')] bg-cover ">
        <div className="bg-[#0149a6]/70  py-16">
          <div className="right-0 left-0 items-center flex flex-col  container gap-12  lg:py-10 py-4 text-white">
            <h2 className="lg:text-4xl text-xl font-bold">
              {t("WhyChooseUs.title")}
            </h2>
            <span className="text-lg lg:text-2xl flex flex-col gap-2 text-center">
              <p className=" font-bold text-[#0149a6] bg-white">
                {t("WhyChooseUs.line1")}
              </p>
              <p className=" font-bold text-[#0149a6] bg-white">
                {t("WhyChooseUs.line2")}
              </p>
              <p>{t("WhyChooseUs.line3")}</p>
              <p>{t("WhyChooseUs.line4")}</p>
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <span className="flex  items-center gap-4 justify-center">
          <Image
            title={'logo of explorem'}
            src="/image/aboutUS/logoHand.png"
            className="w-14 lg:w-16"
            width={195}
            height={159}
            alt="logo of explorem"
          />
          <h2 className=" capitalize font-bold text-xl lg:text-3xl text-[#0149a6]">
            {t("vedioTitle")}
          </h2>
        </span>

        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          playsInline 
          loop
          muted
          width="320"
          height="240"
          preload="none"
          title="Explorem Center: Inspiring Interviews with Managing Director and Students"
        >
          <source src="/video/Explorem.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-col gap-4">
        <div className=" container">
          <div className="bg-[#0149A6] rounded-md px-4 py-10  ">
            <h2 className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
              <p>{t("slogen2.line1")}</p>
              <p>{t("slogen2.line2")}</p>
            </h2>
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll>
              <FetchImageScroll />
            </InfiniteHorizontalScroll>
          </div>
        </div>
      </div>
      <div className=" space-y-12">
        <span className="flex gap-4  items-center justify-center">
          <Image
            title="logo of explorem"
            src="/image/aboutUS/logoHand.png"
            className="w-14 lg:w-16"
            width={195}
            height={159}
            alt="logo of explorem"
          />
          <h2 className=" capitalize font-bold text-xl lg:text-3xl text-[#0149a6]">
            {t("ourTeamManagement.title")}
          </h2>
        </span>
        <div className=" space-y-16">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-4  container ">
            <div className=" flex  justify-center">
              <Image
                 title={'GRACILA V. UCAG, RN, MAN, PHD - Managing Director at explorem'}
                width={555}
                height={388}
                placeholder="blur"
                src={Gracila}
                className="w-2/3 rounded-md "
                alt="GRACILA V. UCAG, RN, MAN, PHD - Managing Director at explorem"
              />
            </div>
            <div className=" flex gap-4 flex-col lg:w-1/2  ">
              <h3 className=" font-bold text-xl text-[#0149a6] text-center lg:text-left">
                {t("ourTeamManagement.team.Gracila.fullName")}
              </h3>
              <span className=" font-semibold bg-[#0149a6] rounded-sm text-white text-center lg:w-fit p-2">
                {t("ourTeamManagement.team.Gracila.job")}
              </span>
              <ul className="px-2  *:border-l-4 *:border-[#0149a6] *:bg-white *:p-2 *:pl-4  *:rounded-r-sm flex flex-col gap-4  list-outside ">
                <li>{t("ourTeamManagement.team.Gracila.experiences.1")}</li>
                <li>{t("ourTeamManagement.team.Gracila.experiences.2")}</li>
                <li>{t("ourTeamManagement.team.Gracila.experiences.3")}</li>
                <li>{t("ourTeamManagement.team.Gracila.experiences.4")}</li>
                <li>{t("ourTeamManagement.team.Gracila.experiences.5")}</li>
                <li>{t("ourTeamManagement.team.Gracila.experiences.6")}</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col items-center justify-center gap-4  container ">
            <div className=" flex  justify-center">
              <Image
                title={'ABDESSAMAD ABOUL OSSOUD - Managing Director at explorem:'}
                placeholder="blur"
                width={334}
                height={264}
                src={Abdessamad}
                className="w-2/3 rounded-md "
                alt="ABDESSAMAD ABOUL OSSOUD - Managing Director at explorem"
              />
            </div>
            <div className=" flex gap-4 flex-col lg:w-1/2  ">
              <h3 className=" font-bold text-xl text-[#0149a6] text-center lg:text-left">
                {t("ourTeamManagement.team.Abdessamad.fullName")}
              </h3>
              <span className=" font-semibold bg-[#0149a6] rounded-sm text-white text-center lg:w-fit p-2">
                {t("ourTeamManagement.team.Abdessamad.job")}
              </span>
              <ul className="px-2    *:border-l-4 *:border-[#0149a6] *:bg-white *:p-2 *:pl-4  *:rounded-r-sm flex flex-col gap-4  list-outside ">
                <li className="  ">
                  {t("ourTeamManagement.team.Abdessamad.experiences.1")}
                </li>
                <li className="  ">
                  {t("ourTeamManagement.team.Abdessamad.experiences.2")}
                </li>
                <li className="  ">
                  {t("ourTeamManagement.team.Abdessamad.experiences.3")}
                </li>
                <li className="  ">
                  {t("ourTeamManagement.team.Abdessamad.experiences.4")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
