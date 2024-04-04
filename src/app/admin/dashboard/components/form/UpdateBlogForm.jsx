"use client";

import { updateBlog } from "@/app/api/data/blog/actions";
import Image from "next/image";
import Link from "next/link";

import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const UpdateBlogForm = ({ blog }) => {
  const ref = useRef();
  const { id, title, imageUrl, description, imageKey } = blog || {};

  // handle update
  const handleUpdateBlog = async (event) => {
    const formData = new FormData(ref.current);
    event.preventDefault();
    toast.promise(
      (async () => {
        await updateBlog(id, formData, imageKey);
        ref?.current.reset();
      })(),
      {
        loading: "Updating Blog ...",
        success: <b>Blog Updated !</b>,
        error: <b>Failed to Updated Blog .</b>,
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
        onSubmit={handleUpdateBlog}
        className="container  gap-8 flex w-full  flex-col items-center justify-center"
      >
        <h2 className="capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
          Update Blog Post
        </h2>
        <Image
          width={1920}
          height={1000}
          className="object-cover rounded w-96      "
          src={imageUrl}
          alt="explorem"
        />
        <input type="hidden" name="urlImage" value={imageUrl} />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          className="bg-[#ffffff] w-full font-semibold  border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold"
        />

        <input
          type="text"
          id="title"
          name="title"
          defaultValue={title}
          className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
          placeholder="Enter title"
        />

        <textarea
          id="description"
          name="description"
          rows="12"
          defaultValue={description}
          className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
          placeholder="Enter description"
        ></textarea>

        <button
          type="submit"
          className="px-12 py-4 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
        >
          Updtae
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

export default UpdateBlogForm;
