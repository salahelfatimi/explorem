"use client";


import { deletedTestimonial } from "@/app/api/data/testimonial/action";
import { Trash } from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

export default function DeletedTestimonial({ id }) {
  const deleteTestimonialHandler = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this Testimonial with id: ${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.promise(
          (async () => {
            await deletedTestimonial(id);
          })(),
          {
            loading: "Deleting Testimonial ...",
            success: <b>Testimonial Deleted !</b>,
            error: <b>Failed to Deleted Testimonial .</b>,
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
      <button className="flex justify-end" onClick={() => deleteTestimonialHandler()}>
        <Trash className="min-w-4 stroke-2  stroke-red-500" />
      </button>
    </>
  );
}
