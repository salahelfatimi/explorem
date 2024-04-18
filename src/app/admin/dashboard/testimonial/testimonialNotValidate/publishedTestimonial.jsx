"use client";

import {  publishedTestimonial } from "@/app/api/data/testimonial/actions";
import { EyeOff, Trash } from "react-feather";
import toast, { Toaster } from "react-hot-toast";


export default function PublishedTestimonial({ id }) {
  const publishedTestimonialHandler = async () => {
    toast.promise(
      (async () => {
        await publishedTestimonial(id);
      })(),
      {
        loading: "Published Testimonial ...",
        success: <b>Testimonial Published !</b>,
        error: <b>Failed to Published Testimonial .</b>,
      }
    );
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <button onClick={() => publishedTestimonialHandler()}>
        <EyeOff className="min-w-4 stroke-2  stroke-blue-500" />
      </button>
    </>
  );
}
