"use client";
import { addCommentToBlog } from "@/app/api/data/Comment/actions";
import Image from "next/image";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const CommentAddForm = ({ blogId }) => {
  const ref = useRef();

  // add comment feature
  const addCommentHandler = async (formData) => {
    toast.promise(
      (async () => {
        await addCommentToBlog(blogId, formData);
        ref?.current?.reset();
      })(),
      {
        loading: "Adding Comment ...",
        success: <b>Comment Added !</b>,
        error: <b>Failed to Add Comment .</b>,
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
      <h2 className="font-manrope font-bold text-xl  text-[#134ba1]  text-center ">
        Add Your Comment
      </h2>
      <form
        ref={ref}
        action={addCommentHandler}
        className="flex flex-col justify-center items-center p-4 gap-8 w-full"
      >
        <div className="flex flex-row gap-4">
          <Image
            className="h-14 w-14 rounded-full  hover:border-4 hover:border-[#134ba1]"
            src="/image/avatar/man.png"
            height={70}
            width={70}
          />{" "}
          <Image
            className="h-14 w-14 rounded-full  hover:border-4 hover:border-[#134ba1]"
            src="/image/avatar/wamen.png"
            height={70}
            width={70}
          />
        </div>

        <textarea
          required
          name="text"
          id=""
          cols="30"
          rows="6"
          placeholder="Add Comment"
          className="w-full border-2 p-4 border-[#134ba1]"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-md font-bold bg-[#134ba1] text-white py-2 px-4"
        >
          Add Comment
        </button>
      </form>
    </>
  );
};

export default CommentAddForm;
