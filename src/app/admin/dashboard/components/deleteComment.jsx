"use client";

import {  deleteSingleComment } from "@/app/api/data/Comment/actions";
import { Trash } from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteComment({ id, idBlog }) {
  const deleteCommentHandler = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this Blog with id: ${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.promise(
          (async () => {
            await deleteSingleComment(id, idBlog);
          })(),
          {
            loading: "Deleting Comment ...",
            success: <b>Comment Deleted !</b>,
            error: <b>Failed to Deleted Comment .</b>,
          }
        );
      }
    });
  };
  return (
    <>
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <button onClick={() => deleteCommentHandler()}>
        <Trash className="min-w-4 stroke-2  stroke-red-500" />
      </button>
    </>
  );
}
