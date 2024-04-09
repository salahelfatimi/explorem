"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Controller,
  FreeMode,
  Grid,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
import { Star, User } from "react-feather";
import { useTranslations } from "next-intl";
import Image from "next/image";

const TestimonialsSlider = () => {
  const t = useTranslations("Index");
  const testimonials = [
    {
      id: 1,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 2,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 3,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 4,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 5,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 6,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
  ];
  return (
    <div className=" container p-2">
      <div className="mb-10 ">
        <span className="lg:text-4xl capitalize text-[#0149a6] font-medium text-center block mb-2">
          {t("testimonial.title")}
        </span>
        <h2 className="lg:text-2xl text-center capitalize font-bold text-gray-900 ">
          {t("testimonial.description")}
        </h2>
      </div>
      <Swiper
        modules={[Autoplay, Grid, FreeMode, Mousewheel, Controller]}
        autoplay
        mousewheel={false}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {testimonials.map((ele, index) => (
          <SwiperSlide key={index} className="flex flex-col gap-10 bg-white p-8 rounded-2xl h-fit border-gray-300 border-2">
            <p className="">{ele.Comment}</p>
            <div className="flex gap-4 items-center">
              <Image
                className="rounded-md bg-[#5199e2] w-10 "
                src="/image/avatar/man.png"
                height={100}
                width={100}
                alt="avatar"
              />
              <p className="font-bold capitalize">{ele.fullName}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
