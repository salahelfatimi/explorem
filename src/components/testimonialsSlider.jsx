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
          <SwiperSlide
            key={index}
            className=" bg-white border border-solid border-gray-300 rounded-xl  transition-all duration-500  w-full p-4   hover:shadow-sm "
          >
            <div className="flex items-center mb-7 gap-2 transition-all duration-500 ">
              <Star className=" fill-yellow-400 stroke-yellow-400" />
              <span className="text-base font-semibold text-indigo-600">
                4.9
              </span>
            </div>
            <p className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
              {ele.Comment}
            </p>
            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
              <User
                size={40}
                className=" bg-[#0149a6] rounded-full p-1 stroke-white"
              />
              <div className="block">
                <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                  {ele.fullName}
                </h5>
                <span className="text-sm leading-4 text-gray-500">
                  {ele.job}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;
