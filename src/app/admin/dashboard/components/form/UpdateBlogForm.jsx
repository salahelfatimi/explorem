"use client";

import { updateBlog } from "@/app/api/data/blog/actions";
import Image from "next/image";
import Link from "next/link";

import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const UpdateBlogForm = ({ blog }) => {
  const ref = useRef();
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [sizeImage, setSizeImage] = useState(false);
  const { id, title, imageUrl, description, imageKey } = blog || {};
  const handleUpdateBlog = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(ref.current);
    const loadingToast = toast.loading("Updating Blog ...");
    try {
      await updateBlog(id, formData, imageKey);
      ref?.current.reset();

      toast.dismiss(loadingToast);
      toast.success("Blog Updated !");
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Failed to Updated Blog .");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const fileInput = e.target.files[0];
    if (fileInput) {
      const fileSizeInMB = fileInput.size / (1024 * 1024);
      const maxFileSizeMB = 4;
      if (fileSizeInMB > maxFileSizeMB) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setSizeImage(true);
      } else {
        setSizeImage(false);
      }
    }
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
        <label className="block space-y-4 w-full">
          <span className=" block  capitalize   font-medium text-slate-700">
            upload new image
          </span>
          <input
            id="image"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            className={` bg-[#ffffff] w-full font-semibold border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold`}
          />

          {sizeImage && (
            <p className="text-red-500 text-xs font-medium">
              File size exceeds the maximum limit of 4 MB.{" "}
              <a
                className=" text-blue-500 underline "
                href="https://www.iloveimg.com/compress-image"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to compress the image.
              </a>
            </p>
          )}
        </label>
        <label className="block space-y-4 w-full">
          <span className=" block  capitalize   font-medium text-slate-700">
            title
          </span>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
            placeholder="Enter title"
          />
        </label>
        <label className="block space-y-4 w-full">
          <span className=" block  capitalize   font-medium text-slate-700">
            description
          </span>
          <textarea
            id="description"
            name="description"
            rows="12"
            defaultValue={description}
            className="bg-[#ffffff] w-full font-medium  border p-4 rounded-md "
            placeholder="Enter description"
          ></textarea>
        </label>
        <button
          disabled={isLoading}
          type="submit"
          className="px-12 py-4 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
        >
          {isLoading ? "Updating..." : "update Blog"}
        </button>
      </form>
    </>
  );
};

export default UpdateBlogForm;
