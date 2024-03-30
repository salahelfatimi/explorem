"use client"
import Image from "next/image";



import { useTranslations } from "next-intl";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import InscriptionCondidates from "./registrationCondidates/page";


export default function Candidates() {
    const t = useTranslations("Candidates")
  const Services = [
    {
      id: 1,
      title: t("services.Training/Formation.title"),
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
      description: [
        t("services.DegreeRecognition.description.0"),
        t("services.DegreeRecognition.description.1"),
        t("services.DegreeRecognition.description.2"),
        t("services.DegreeRecognition.description.3"),
      ],
    },
    {
      id: 5,
      title: t("services.ProfessionalQualification.title"),
      description: [
        t("services.ProfessionalQualification.description.0"),
        t("services.ProfessionalQualification.description.1"),
      ],
    },
    {
      id: 6,
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

  const Condidates = [
    { src: "/image/aboutUS/slideLeft/image1.jpg" },
    { src: "/image/aboutUS/slideLeft/image2.jpg" },
    { src: "/image/aboutUS/slideLeft/image3.jpg" },
    { src: "/image/aboutUS/slideLeft/image4.jpg" },
    { src: "/image/aboutUS/slideLeft/image5.jpg" },
    { src: "/image/aboutUS/slideLeft/image6.jpg" },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              src="/image/candidates/saction1.jpg"
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
          <div className="px-2 grid grid-cols-1 lg:grid-cols-2   gap-4  list-outside ">
            {Services.map((ele, index) => (
              <div
              
                key={index}
                className=" flex flex-col  bg-white shadow  rounded-lg "
              >
                <span className="text-sm md:text-base  font-semibold mb-4 text-white rounded-t-lg p-4 bg-[#0149a6]">
                  {ele.title}
                </span>
                <ul className="p-3 pl-4 flex flex-col gap-2    ">
                  {ele.description.map((ele, index) => (
                    <li
                      key={index}
                      className=" text-xs md:text-sm capitalize  border-[#0149a6] border-l-4 pl-4 "
                    >
                      {ele}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0149a6] py-6 ">
          <div className="px-2">
            <InfiniteHorizontalScroll images={Condidates} />
          </div>
        </div>
        <div>
          <InscriptionCondidates />
        </div>
      </div>
    </>
  );
}
