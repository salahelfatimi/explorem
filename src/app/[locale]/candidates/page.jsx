"use client";
import Image from "next/image";

import { useTranslations } from "next-intl";
import InfiniteHorizontalScroll from "@/components/infiniteHorizontalScroll";
import InscriptionCondidates from "./registrationCondidates/page";

export default function Candidates() {
  const t = useTranslations("Candidates");
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
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              blurDataURL="/image/candidates/saction1.jpg"
              placeholder="blur"
              loading="lazy"
              quality={40}
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
