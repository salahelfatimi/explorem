"use client";

import { deleteSingleComment } from "@/app/api/data/Comment/actions";
import { deleteImageScroll } from "@/app/api/data/ImageScroll/actions";
import { Trash, X } from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeleteImageScroll({ idImage, keyImage }) {
  const handeledeleteImage = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this Image with id: ${idImage}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.promise(
          (async () => {
            await deleteImageScroll(idImage, keyImage);
          })(),
          {
            loading: "Deleting Image ...",
            success: <b>Image deleted !</b>,
            error: <b>Failed to deleted Image .</b>,
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

      <button
        onClick={() => handeledeleteImage()}
        className=" absolute top-2 bg-red-600 p-1 rounded-full right-2"
      >
        <X size={25} className="   stroke-white  stroke-2 " />
      </button>
    </>
  );
}
