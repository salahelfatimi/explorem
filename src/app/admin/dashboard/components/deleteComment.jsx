"use client"

import { deleteComment } from "@/app/api/data/Comment/actions";
import { Trash } from "react-feather";
import Swal from "sweetalert2";

export default function DeleteComment({id, idBlog}) {
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
            await Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          
            await deleteComment(id, idBlog);
            
            
           
          }
        });
      };
  return (
    <>
      <button onClick={() => deleteCommentHandler()}>
        <Trash className="min-w-4 stroke-2  stroke-red-500" />
      </button>
      
    </>
  );
}
