import Image from "next/image";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import InscriptionCondidates from "./registrationCondidates/page";
import FetchImageScroll from "@/components/fetchImageScroll";
import {
  Book,
  FileSearch2,
  GraduationCap,
  Plane,
  School,
  UserSearch,
} from "lucide-react";
import saction1 from "/public/image/candidates/saction1.jpg";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  return {
    title: "Candidates",
    description: "Our Best Services For Candidates",
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


export default   function Candidates({ params: { locale } }) {
 
  const t =  useTranslations("Candidates");
 

  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              title={"explorem"}
              quality={100}
              src={saction1}
              className="h-screen max-w-full w-full object-cover object-left lg:object-center"
              placeholder="blur"
              width={1920}
              height={1080}
              alt="Explorem"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-9 text-[#0149A6]">
                <div className=" text-3xl lg:text-4xl  font-bold text-center">
                  <h1>{t("titleCandidates")}</h1>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="container">
          <div className="px-2 columns-1 lg:columns-2 space-y-3   gap-4   ">
            <div className=" relative    rounded h-[18rem]  sm:h-[16rem] lg:h-64 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <Book size={40} />
                <h2>{t("services.Training/Formation.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.2")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.3")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.4")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.5")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.6")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.7")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.8")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.Training/Formation.description.9")}</p>
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[15rem]  sm:h-[12rem] lg:h-48 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <UserSearch size={40} />
                <h2>{t("services.JobPlacement.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.0")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.2")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.3")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.4")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.5")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.JobPlacement.description.6")}</p>
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[14rem]  sm:h-[10rem] lg:h-40 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <FileSearch2 size={40} />
                <h2>{t("services.VocationalTrainingPlacement.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.0")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.2")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.3")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.4")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.VocationalTrainingPlacement.description.5")}</p>
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[10rem]  sm:h-[8rem] lg:h-36 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <GraduationCap size={40} />
                <h2>{t("services.DegreeRecognition.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.DegreeRecognition.description.0")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.DegreeRecognition.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.DegreeRecognition.description.2")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.DegreeRecognition.description.3")}</p>
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[11rem]  sm:h-[8rem] lg:h-32 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <School size={40} />
                <h2>{t("services.ProfessionalQualification.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.ProfessionalQualification.description.0")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.ProfessionalQualification.description.1")}</p>
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[11rem]  sm:h-[8rem] lg:h-40 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <Plane size={40} />
                <h2>{t("services.On-boardingandIntegration.title")}</h2>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.0")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.1")}</p>
                </li>
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.2")}</p>
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.3")}</p>
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.4")}</p>
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  <p>{t("services.On-boardingandIntegration.description.5")}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll>
              <FetchImageScroll />
            </InfiniteHorizontalScroll>
          </div>
        </div>
        <div>
          <InscriptionCondidates />
        </div>
      </div>
    </>
  );
}
