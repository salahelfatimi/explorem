import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import { Instagram, Link } from "react-feather";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations("AboutUS");
  const images1 = [
    { src: "/image/aboutUS/slideLeft/image1.jpg" },
    { src: "/image/aboutUS/slideLeft/image2.jpg" },
    { src: "/image/aboutUS/slideLeft/image3.jpg" },
    { src: "/image/aboutUS/slideLeft/image4.jpg" },
    { src: "/image/aboutUS/slideLeft/image5.jpg" },
    { src: "/image/aboutUS/slideLeft/image6.jpg" },
  ];
  const images2 = [
    { src: "/image/aboutUS/slideLeft/image7.jpg" },
    { src: "/image/aboutUS/slideLeft/image8.jpg" },
    { src: "/image/aboutUS/slideLeft/image9.jpg" },
    { src: "/image/aboutUS/slideLeft/image10.jpg" },
    { src: "/image/aboutUS/slideLeft/image11.jpg" },
    { src: "/image/aboutUS/slideLeft/image12.jpg" },
  ];
  return (
    <div className="flex flex-col gap-8 pb-16 bg-[#F5F5F5] ">
      <div className="flex flex-col gap-10">
        <div className="relative">
          <Image
            src="/image/aboutUS/saction1.jpg"
            className="h-auto max-w-full w-full  "
            width={1920}
            height={1080}
            

            alt="Explorem"
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-[#0149A6] w-full items-center flex flex-col gap-2 capitalize p-1 lg:p-4 text-white">
              <h1 className="lg:text-4xl text-md font-bold">{t("aboutUs")}</h1>
              <span className=" text-sm lg:text-2xl">{t("aboutUsSlogen")}</span>
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
        <span className="bg-[#0149A6] text-white py-10 px-2 rounded-lg lg:w-1/2 font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
          <p>{t("slogen1.line1")}</p>
          <p>{t("slogen1.line2")}</p>
        </span>
        <Image
          src="/image/aboutUS/slogen1.jpg"
          className="lg:w-1/3 rounded-xl"
          width={500}
          height={500}
          alt="Explorem"
        />
      </div>
      <div className="container flex flex-col gap-4 lg:flex-row w-full items-center justify-between text-center">
        <span className=" bg-white lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <p className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid1.title")}
          </p>
          <p className=" lg:text-lg font-medium">{t("grid.grid1.text")}</p>
        </span>
        <Image
          width={195}
          height={159}
          src="/image/aboutUS/logoHand.png"
          className="w-36"
          alt="Explorem"
        />
        <span className=" bg-white lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <p className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid2.title")}
          </p>
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
      <div className=" container flex flex-col  gap-4">
        <p className=" capitalize font-bold text-center text-xl lg:text-3xl text-[#0149a6]">
          {t("whatWeHaveAchieved.title")}
        </p>

        <ul className="  px-2 lg:text-lg flex flex-col gap-4 font-semibold list-outside leading-loose ">
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line1")}
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line2")}
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line3")}
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line4")}
          </li>
          <li className=" border-l-4 border-[#0149a6]  bg-white p-2 pl-4 flex flex-col gap-2 rounded-r-sm">
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
                <Link
                  size={30}
                  className=" stroke-[#fff] rounded-md p-1 bg-[#0149a6]"
                />
              </a>
            </div>
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line6")}
          </li>
          <li className=" border-l-4 border-[#0149a6]  bg-white p-2 pl-4 flex flex-col gap-2 rounded-r-sm">
            {t("whatWeHaveAchieved.line7")}
            <div className="flex gap-4 items-center ">
              <a
                arget="_blank"
                href="https://www1.wdr.de/lokalzeit/fernsehen/koeln/pflegeinternat-gegen-pflegekraeftemangel-im-bergischen--100.html"
              >
                <Link
                  size={30}
                  className=" stroke-[#fff] rounded-md p-1 bg-[#0149a6]"
                />
              </a>
            </div>
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line8")}
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line9")}
          </li>
          <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
            {t("whatWeHaveAchieved.line10")}
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll images={images1} />
          </div>
        </div>
        <div className=" container">
          <div className="bg-[#0149A6] rounded-md px-4 py-10  ">
            <span className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
              <p>{t("slogen2.line1")}</p>
              <p>{t("slogen2.line2")}</p>
            </span>
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll images={images2} />
          </div>
        </div>
      </div>
      <div className=" space-y-12">
        <span className="flex gap-4  items-center justify-center">
          <Image
            width={500}
            height={500}
            src="/image/aboutUS/logoHand.png"
            className="w-24 lg:w-28"
            alt="Explorem"
          />
          <p className=" capitalize font-bold text-xl lg:text-xl text-[#0149a6]">
            {t("ourTeamManagement.title")}
          </p>
        </span>
        <div className=" space-y-16">
          <div className="flex lg:flex-row flex-col items-center justify-center gap-4  container ">
            <div className=" flex  justify-center">
              <Image
                width={500}
                height={500}
                src="/image/aboutUS/team/Gracila.jpg"
                className="w-2/3 rounded-md "
                alt="Gracila"
              />
            </div>
            <div className=" flex gap-4 flex-col lg:w-1/2  ">
              <span className=" font-bold text-xl text-[#0149a6] text-center lg:text-left">
                {t("ourTeamManagement.team.Gracila.fullName")}
              </span>
              <span className=" font-semibold bg-[#0149a6] rounded-sm text-white text-center lg:w-fit p-2">
                {t("ourTeamManagement.team.Gracila.job")}
              </span>
              <ul className="px-2 flex flex-col gap-4  list-outside ">
                <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4  rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.1")}
                </li>
                <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.2")}
                </li>
                <li className=" border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.3")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.4")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.5")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Gracila.experiences.6")}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row-reverse flex-col items-center justify-center gap-4  container ">
            <div className=" flex  justify-center">
              <Image
                width={500}
                height={500}
                src="/image/aboutUS/team/Abdessamad.png"
                className="w-2/3 rounded-md "
                alt="Gracila"
              />
            </div>
            <div className=" flex gap-4 flex-col lg:w-1/2  ">
              <span className=" font-bold text-xl text-[#0149a6] text-center lg:text-left">
                {t("ourTeamManagement.team.Abdessamad.fullName")}
              </span>
              <span className=" font-semibold bg-[#0149a6] rounded-sm text-white text-center lg:w-fit p-2">
                {t("ourTeamManagement.team.Abdessamad.job")}
              </span>
              <ul className="px-2 flex flex-col gap-4  list-outside ">
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Abdessamad.experiences.1")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Abdessamad.experiences.2")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
                  {t("ourTeamManagement.team.Abdessamad.experiences.3")}
                </li>
                <li className="  border-l-4 border-[#0149a6] bg-white p-2 pl-4 rounded-r-sm">
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
