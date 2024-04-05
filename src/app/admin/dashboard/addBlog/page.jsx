"use client";

import { addBlog } from "@/app/api/data/blog/actions";

import Link from "next/link";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBlog = async () => {
 
  const ref = useRef();
  const addBlogHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(ref.current);
    toast.promise(
      (async () => {
        await addBlog(formData);
        ref.current.reset();
      })(),
      {
        loading: "Adding Blog ...",
        success: <b>Blog Added !</b>,

        error: <b>Failed to Add Blog .</b>,
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
      <form
        ref={ref}
        onSubmit={addBlogHandler}
        className=" container   gap-8 flex  flex-col items-center justify-center"
      >
        <h2 className="capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
          Create a New Blog
        </h2>

        <input
          type="text"
          id="title"
          name="title"
          className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
          placeholder="title"
        />

        <textarea
          id="description"
          name="description"
          rows="4"
          className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
          placeholder="description"
        ></textarea>
        <div className="w-full  capitalize gap-2 flex flex-col text-center">
          <label htmlFor="pdf" className=" font-bold text-xl">
            upload Image Blog
          </label>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            className="bg-[#ffffff] w-full font-semibold  border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold"
          />
        </div>
        <button
          type="submit"
          className="px-12 py-4 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
        >
          Add Blog
        </button>
        <Link
          href="/admin/dashboard/"
          className="text-center px-12 py-4 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-red-500 border-red-500 bg-red-500 text-white"
        >
          Cancel
        </Link>
      </form>
    </>
  );
};

export default AddBlog;
