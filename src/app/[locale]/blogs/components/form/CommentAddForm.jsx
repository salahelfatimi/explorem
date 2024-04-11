"use client";
import { addCommentToBlog } from "@/app/api/data/Comment/actions";
import Image from "next/image";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CommentAddForm = ({ blogId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const [formData, setFormData] = useState({
    image: "",
    fullName: "",
    text: "",
  });
  // add comment feature
  const addCommentHandler = async (e) => {
    e.preventDefault();

    setValidation(true);
   
   
    if (
      formData.fullName &&
    formData.text  &&
      formData.image
    ) {
      const formDataToSend = new FormData();
      formDataToSend.append("image", formData.image);
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("text", formData.text);
      setIsLoading(true);


      const loadingToast = toast.loading("Adding Comment ...");

      try {
        await addCommentToBlog(blogId, formDataToSend);
        setFormData({
          image: "",
          fullName: "",
          text: "",
        });
        setValidation(false);
        toast.dismiss(loadingToast);

        toast.success("Comment Added !");
      } catch (error) {
        setValidation(false);
        toast.dismiss(loadingToast);
        toast.error("Failed to Add Comment .");
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
  return (
    <>
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <h2 className="font-manrope font-bold text-xl  text-[#134ba1]  text-center ">
        Add Your Comment
      </h2>
      <form
     
        onSubmit={addCommentHandler}
        className="flex flex-col justify-center items-center p-4 gap-8 w-full"
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
        <label className="block space-y-2 w-full">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Comment
            </span>
            <textarea
              value={formData.text}
              onChange={handleInputChange}
              name="text"
              className={`${
                !formData.text && validation && "border-red-500 "
              }  bg-[#ffffff] border  py-2 px-4 w-full rounded-md font-mono text-xs`}
              cols="30"
              rows="4"
            ></textarea>
            <p className=" text-red-500 text-xs font-medium">
              {!formData.text && validation && "Please enter your Comment"}
            </p>
          </label>

        <button
          type="submit"
          className="w-full rounded-md font-bold bg-[#134ba1] text-white py-2 px-4"
          disabled={isLoading}
       >
           {isLoading ? "Adding..." : "Add Comment"}
        </button>
      </form>
    </>
  );
};

export default CommentAddForm;
