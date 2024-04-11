"use client";

import { addBlog } from "@/app/api/data/blog/actions";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBlogForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [sizeVideo, setSizeVideo] = useState(false);
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const ref = useRef();

  const addBlogHandler = async (event) => {
    event.preventDefault();
    setValidation(true);

    if (formData.title && formData.description && formData.image) {
      setIsLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("image", formData.image);

      const loadingToast = toast.loading("Adding Blog ...");
      try {
        await addBlog(formDataToSend);
        setFormData({
          title: "",
          description: "",
          image: "",
        });
        setValidation(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        toast.dismiss(loadingToast);
        toast.success("Blog Added !");
      } catch {
        setValidation(false);
        toast.dismiss(loadingToast);
        toast.error("Failed to Add Blog .");
      } finally {
        setIsLoading(false);
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
    const fileInput = e.target.files[0];
    if (fileInput) {
      const fileSizeInMB = fileInput.size / (1024 * 1024);
      const maxFileSizeMB = 4;
      if (fileSizeInMB > maxFileSizeMB) {
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        setSizeVideo(true);
      } else {
        setFormData({
          ...formData,
          image: fileInput,
        });
        setSizeVideo(false);
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
      <form
        ref={ref}
        onSubmit={addBlogHandler}
        className="container gap-8 flex flex-col items-center justify-center"
      >
        <h2 className="capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
          Create a New Blog
        </h2>
        <label className="block space-y-2 w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Title
          </span>
          <input
            onChange={handleInputChange}
            type="text"
            id="title"
            name="title"
            className={`${
              !formData.title && validation && "border-red-500"
            } bg-[#ffffff] w-full font-medium border p-4 rounded-md`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.title && validation && "Please enter Title"}
          </p>
        </label>
        <label className="block space-y-2 w-full">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            description{" "}
          </span>
          <textarea
            onChange={handleInputChange}
            id="description"
            name="description"
            rows="4"
            className={`${
              !formData.description && validation && "border-red-500"
            } bg-[#ffffff] w-full font-medium border p-4 rounded-md`}
          ></textarea>
          <p className=" text-red-500 text-xs font-medium">
            {!formData.description && validation && "Please enter description"}
          </p>
        </label>

        <label className="block space-y-4 w-full">
          <span className="after:content-['*'] text-center after:ml-0.5 after:text-red-500 block  capitalize  font-medium text-slate-700">
            upload
          </span>

          <input
            onChange={handleFileChange}
            ref={fileInputRef}
            id="image"
            type="file"
            name="image"
            accept="image/*"
            className={`${
              !formData.image && validation && "border-red-500"
            } bg-[#ffffff] w-full font-semibold border p-4 rounded-md text-xs file:bg-[#0149a6] file:text-white file:rounded file:mr-4 file:py-2 file:px-4 file:border-none file:text-sm file:font-semibold`}
          />
          <p className=" text-red-500 text-xs font-medium">
            {!formData.image && validation ? "Please load Image" : ""}
            {sizeVideo && (
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
          </p>
        </label>

        <button
          disabled={isLoading}
          type="submit"
          className="px-12 py-4 w-full rounded font-bold border-4 duration-700 hover:bg-white hover:text-[#0149a6] border-[#0149a6] bg-[#0149a6] text-white"
        >
          {isLoading ? "Adding..." : "Add Blog"}
        </button>
      </form>
    </>
  );
};

export default AddBlogForm;
