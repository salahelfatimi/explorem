"use client";
import Swal from "sweetalert2";
import { deleteBlog } from "@/app/api/data/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Edit, Trash } from "react-feather";

const BlogItem = ({ blog }) => {
  const { id, title, imageUrl, description, createAt } = blog || {};
  const deleteBlogHandler = async (id) => {
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
        // Perform the delete action
        await deleteBlog(id);
      }
    });
  };
  return (
    <>
      <div className="flex gap-4 justify-between items-center shadow-lg rounded bg-white p-4 ">
        <div className="flex gap-4 items-center">
          <Image
            width={1920}
            height={1000}
            className="object-cover rounded w-auto h-48     "
            src={imageUrl}
            alt="explorem"
          />
          <div className="flex flex-col gap-4">
            <h2 className=" font-bold text-lg text-black ">{title}</h2>
            <p className="line-clamp-2 text-[#646c78] font-medium">{description}</p>
            <span className="text-[#646c78] font-medium  ">
              {createAt.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={`dashboard/updateBlog/${id}`}>
            <Edit className="min-w-4   stroke-2  stroke-blue-500" />
          </Link>
          <button onClick={() => deleteBlogHandler(id)}>
            <Trash className="min-w-4 stroke-2  stroke-red-500" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
