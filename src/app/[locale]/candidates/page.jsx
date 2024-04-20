import Image from "next/image";

import { useTranslations } from "next-intl";
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

export default function Candidates() {
  const t = useTranslations("Candidates");
  const Services = [
    {
      id: 1,
      title: t("services.Training/Formation.title"),
      svg: <Book size={40} />,
      description: [
        t("services.Training/Formation.description.0"),
        t("services.Training/Formation.description.1"),
        t("services.Training/Formation.description.2"),
        t("services.Training/Formation.description.3"),
        t("services.Training/Formation.description.4"),
        t("services.Training/Formation.description.5"),
        t("services.Training/Formation.description.6"),
        t("services.Training/Formation.description.7"),
        t("services.Training/Formation.description.8"),
        t("services.Training/Formation.description.9"),
      ],
    },
    {
      id: 2,
      title: t("services.JobPlacement.title"),
      svg: <UserSearch size={40} />,
      description: [
        t("services.JobPlacement.description.0"),
        t("services.JobPlacement.description.1"),
        t("services.JobPlacement.description.2"),
        t("services.JobPlacement.description.3"),
        t("services.JobPlacement.description.4"),
        t("services.JobPlacement.description.5"),
        t("services.JobPlacement.description.6"),
      ],
    },
    {
      id: 3,
      title: t("services.VocationalTrainingPlacement.title"),
      svg: <FileSearch2 size={40} />,
      description: [
        t("services.VocationalTrainingPlacement.description.0"),
        t("services.VocationalTrainingPlacement.description.1"),
        t("services.VocationalTrainingPlacement.description.2"),
        t("services.VocationalTrainingPlacement.description.3"),
        t("services.VocationalTrainingPlacement.description.4"),
        t("services.VocationalTrainingPlacement.description.5"),
      ],
    },
    {
      id: 4,
      title: t("services.DegreeRecognition.title"),
      svg: <GraduationCap size={40} />,
      description: [
        t("services.DegreeRecognition.description.0"),
        t("services.DegreeRecognition.description.1"),
        t("services.DegreeRecognition.description.2"),
        t("services.DegreeRecognition.description.3"),
      ],
    },
    {
      id: 5,
      svg: <School size={40} />,
      title: t("services.ProfessionalQualification.title"),
      description: [
        t("services.ProfessionalQualification.description.0"),
        t("services.ProfessionalQualification.description.1"),
      ],
    },
    {
      id: 6,
      svg: <Plane size={40} />,
      title: t("services.On-boardingandIntegration.title"),
      description: [
        t("services.On-boardingandIntegration.description.0"),
        t("services.On-boardingandIntegration.description.1"),
        t("services.On-boardingandIntegration.description.2"),
        t("services.On-boardingandIntegration.description.3"),
        t("services.On-boardingandIntegration.description.4"),
        t("services.On-boardingandIntegration.description.5"),
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              quality={100}
              src="https://utfs.io/f/637a3c56-d278-4d93-8e8b-7e47457e83b7-rzwhrc.jpg"
              className="h-auto max-w-full w-full  "
              width={1920}
              height={1080}
              alt="Explorem"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-2 lg:p-9 text-[#0149A6]">
                <div className="lg:text-4xl text-md font-bold">
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
                <span>{t("services.Training/Formation.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.2")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.3")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.4")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.5")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.6")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.7")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.8")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.Training/Formation.description.9")}
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[15rem]  sm:h-[12rem] lg:h-48 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <UserSearch size={40} />
                <span>{t("services.JobPlacement.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.0")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.2")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.3")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.4")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.5")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.JobPlacement.description.6")}
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[14rem]  sm:h-[10rem] lg:h-40 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <FileSearch2 size={40} />
                <span>{t("services.VocationalTrainingPlacement.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.0")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.2")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.3")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.4")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.VocationalTrainingPlacement.description.5")}
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[10rem]  sm:h-[8rem] lg:h-36 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <GraduationCap size={40} />
                <span>{t("services.DegreeRecognition.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.DegreeRecognition.description.0")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.DegreeRecognition.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.DegreeRecognition.description.2")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.DegreeRecognition.description.3")}
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[11rem]  sm:h-[8rem] lg:h-32 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <School size={40} />
                <span>{t("services.ProfessionalQualification.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.ProfessionalQualification.description.0")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.ProfessionalQualification.description.1")}
                </li>
              </ul>
            </div>
            <div className=" relative    rounded h-[11rem]  sm:h-[8rem] lg:h-40 group/item even:bg-white even:text-[#0149A6] odd:bg-[#0149A6] odd:text-white overflow-hidden cursor-pointer transition-all duration-700 card    ">
              <div className="absolute flex-col gap-2 font-bold p-4 text-center inset-0 w-full h-full flex   justify-center items-center    transition-all   z-30 group-hover/item:opacity-0 opacity-100 duration-700  ">
                <Plane size={40} />
                <span>{t("services.On-boardingandIntegration.title")}</span>
              </div>
              <ul className="p-3  flex list-disc flex-col gap-2  absolute inset-0 w-full h-full pl-8    list-outside  font-bold    transition-all z-10 card-back   text-sm  opacity-0 duration-700 group-hover/item:opacity-100   ">
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.0")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.1")}
                </li>
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.2")}
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.3")}
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.4")}
                </li>{" "}
                <li className=" text-xs   capitalize  ">
                  {t("services.On-boardingandIntegration.description.5")}
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
