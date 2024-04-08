"use client";
import { addTestimonial } from "@/app/api/data/testimonial/action";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddTestimonial() {
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    fullName: "",
    comment: "",
  });

  const handeleSubmit = async (data) => {
    setValidation(true);
    if (formData.image && formData.fullName && formData.comment) {
      toast.promise(
        (async () => {
          await addTestimonial(data);
          setFormData({
            image: "",
            fullName: "",
            comment: "",
          });
          setValidation(false);
        })(),
        {
          loading: "Adding Comment ...",
          success: <b>Comment Added !</b>,
          error: <b>Failed to Add Comment .</b>,
        }
      );
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <form
        action={handeleSubmit}
        className="flex flex-col gap-4 px-10 py-6 bg-white shadow-md   rounded-md w-full items-center justify-center "
      >
        <h2 className="text-[#0149a6] font-bold text-lg capitalize">
          give us your feedback
        </h2>
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
            } bg-[#ffffff] h-8 w-full font-semibold border p-4 rounded-md text-xs`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.fullName && validation && "Please enter your Full Name"}
          </p>
        </label>
        <label className="block space-y-2 w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Comment
          </span>
          <textarea
            value={formData.comment}
            onChange={handleInputChange}
            name="comment"
            className={`${
              !formData.comment && validation && "border-red-500 "
            }  bg-[#ffffff] border  py-2 px-4 w-full rounded-md font-mono text-xs`}
            cols="30"
            rows="4"
          ></textarea>
          <p className=" text-red-500 text-xs font-medium">
            {!formData.comment && validation && "Please enter your Comment"}
          </p>
        </label>
        <button
          type="submit"
          className="w-full bg-[#0149a6] py-2 text-white font-bold rounded-md"
        >
          Add
        </button>
      </form>
    </>
  );
}
