"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { File, Image as IconImage, MessageCircle, Video } from "react-feather";
import {
  addTestimonialcomment,
  addTestimonialfile,
} from "@/app/api/data/testimonial/actions";

export default function AddTestimonial() {
  const [validation, setValidation] = useState(false);
  const [inputType, setInputType] = useState("comment");
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    image: "",
    fullName: "",
    testimonialType: "",
  });
  const handeleSubmit = async (e) => {
    e.preventDefault();
    setValidation(true);

    if (formData.fullName && formData.testimonialType && formData.image) {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("testimonialType", formData.testimonialType);

      if (inputType === "comment") {
        formDataToSend.append("comment", formData.testimonialType);
      } else {
        formDataToSend.append("file", formData.testimonialType);
      }

      const loadingToast = toast.loading("Adding Testimonial ...");

      try {
        inputType === "comment"
          ? await addTestimonialcomment(formDataToSend)
          : await addTestimonialfile(formDataToSend);

        setFormData({
          image: "",
          fullName: "",
          testimonialType: "",
        });
        setValidation(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }

        toast.dismiss(loadingToast);

        toast.success("Testimonial Added !");
      } catch (error) {
        console.error("Failed to add testimonial:", error);

        toast.dismiss(loadingToast);

        toast.error("Failed to Add Testimonial .");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      testimonialType: file,
    });
  };
  return (
    <div className="flex flex-col gap-4 px-10 py-6 bg-white shadow-md   rounded-md w-full">
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className=" flex-col flex lg:flex-row gap-4 items-center justify-center">
          <button
            onClick={() => {
              setInputType("comment"), setValidation(false);
            }}
            className={`${
              inputType == "comment"
                ? "bg-[#0149a6] text-white border-white "
                : " text-[#0149a6]  border-[#0149a6]"
            } border-2 flex gap-1 duration-500  py-1 px-2 rounded-full font-medium`}
          >
            <MessageCircle />
            Comment
          </button>

          <button
            onClick={() => {
              setInputType("video"), setValidation(false);
            }}
            className={`${
              inputType == "video"
                ? "bg-[#0149a6] text-white border-white "
                : " text-[#0149a6]  border-[#0149a6]"
            } border-2 flex gap-1  duration-500  py-1 px-2 rounded-full font-medium`}
          >
            <File />
            Image / Video / Doc
          </button>
        </div>
        <h2 className="text-[#0149a6] font-bold text-lg capitalize">
          give us your feedback
        </h2>
      </div>
      <form
        onSubmit={handeleSubmit}
        className="flex flex-col gap-4 items-center justify-center "
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-row gap-4">
            <input
              onChange={handleInputChange}
              id="man"
              className="peer/man"
              type="radio"
              name="image"
              value="man"
              hidden
            />
            <label
              htmlFor="man"
              className={`${
                !formData.image && validation
                  ? "bg-red-500 "
                  : "peer-checked/man:bg-[#0149a6]"
              }  rounded-full`}
            >
              <Image
                className="h-14 w-14 rounded-full "
                src="/image/avatar/man.png"
                height={70}
                width={70}
                alt="avatar"
              />{" "}
            </label>
            <input
              onChange={handleInputChange}
              id="women"
              className="peer/women"
              type="radio"
              name="image"
              value="women"
              hidden
            />
            <label
              htmlFor="women"
              className={` ${
                !formData.image && validation
                  ? "bg-red-500 "
                  : "peer-checked/women:bg-[#0149a6]"
              } rounded-full`}
            >
              <Image
                className="h-14 w-14 rounded-full  "
                src="/image/avatar/women.png"
                height={70}
                width={70}
                alt="avatar"
              />
            </label>
          </div>
          <p className=" text-red-500 text-xs font-medium">
            {!formData.image && validation && "Please choose your avatar "}
          </p>
        </div>
        <label className="block space-y-2 w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Full Name
          </span>
          <input
            onChange={handleInputChange}
            value={formData.fullName}
            name="fullName"
            type="text"
            className={`${
              !formData.fullName && validation && "border-red-500 "
            } bg-[#ffffff]  w-full font-semibold border p-4 rounded-md text-xs`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.fullName && validation && "Please enter your Full Name"}
          </p>
        </label>

        {inputType == "comment" ? (
          <label className="block space-y-2 w-full">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Comment
            </span>
            <textarea
              value={formData.testimonialType}
              onChange={handleInputChange}
              name="testimonialType"
              className={`${
                !formData.testimonialType && validation && "border-red-500 "
              }  bg-[#ffffff] border  py-2 px-4 w-full rounded-md font-mono text-xs`}
              cols="30"
              rows="4"
            ></textarea>
            <p className=" text-red-500 text-xs font-medium">
              {!formData.testimonialType &&
                validation &&
                "Please enter your Comment"}
            </p>
          </label>
        ) : (
          <label className="block space-y-2 w-full">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              uploade
            </span>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              name="file"
              className={`${
                !formData.testimonialType && validation && "border-red-500 "
              }  bg-[#ffffff] w-full font-semibold  border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold`}
            />
            <p className=" text-red-500 text-xs font-medium">
              {!formData.testimonialType &&
                validation &&
                "Please enter your Comment"}
            </p>
          </label>
        )}
        <button
          type="submit"
          className="w-full bg-[#0149a6] py-2 text-white font-bold rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
}
