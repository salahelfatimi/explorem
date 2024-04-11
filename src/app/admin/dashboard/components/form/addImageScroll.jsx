"use client";

import { addImageScroll } from "@/app/api/data/ImageScroll/actions";
import Link from "next/link";
import { useRef, useState } from "react";
import { Upload } from "react-feather";
import toast, { Toaster } from "react-hot-toast";

export default function AddImageScrollHandler({ imagesLength }) {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addImageScrollHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append("image", image[0]);
      setIsLoading(true);
      const loadingToast = toast.loading("Adding Image Scroll ...");
      try {
        await addImageScroll(formData);
        toast.success("Image Scroll Added !");
        setImage(null);
        toast.dismiss(loadingToast);
      } catch {
        toast.dismiss(loadingToast);
        toast.error("Failed to Add Image Scroll .");
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "bg-white text-black",
        }}
      />
      <form onSubmit={addImageScrollHandler}>
        <div className="flex items-center justify-center w-full break-inside-avoid-column">
          <label
            htmlFor="dropzone-file"
            className={`${
              imagesLength >= 10 ? "cursor-not-allowed" : "cursor-pointer"
            } flex flex-col items-center justify-center w-full h-64 border-2 border-[#0149a6] border-dashed rounded-lg  bg-white`}
          >
            <div className="flex flex-col items-center justify-center gap-2 pt-5 pb-6">
              <Upload size={30} className="stroke-[#0149a6]" />
              <p className="mb-2 text-sm font-semibold text-center text-[#0149a6]">
                {imagesLength >= 10
                  ? "You can only upload up to 10 images. Please delete some images."
                  : "Click to upload or drag and drop"}
              </p>
              {image && (
                <p className="text-xs text-[#0149a6]">{image[0].name}</p>
              )}
              <p className="text-xs text-[#0149a6]">PNG, JPG</p>
            </div>
            <button
              type="submit"
              className="px-6 py-2 w-fit rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
              disabled={imagesLength >= 10 || isLoading}
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
            <input
              onChange={(e) => setImage(e.target.files)}
              accept="image/*"
              id="dropzone-file"
              name="image"
              type="file"
              className="hidden"
              disabled={imagesLength >= 10 || isLoading}
            />
          </label>
        </div>
      </form>
    </>
  );
}
