"use client";
import Swal from "sweetalert2";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Edit, Eye, MessageSquare, Trash } from "react-feather";
import { Published, deleteBlog } from "@/app/api/data/blog/actions";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const BlogItem = ({ blog }) => {
  const router = useRouter();
  const { id, title, imageUrl, description, createAt, published, imageKey } =
    blog || {};

  const handelePublished = async (id, e) => {
    toast.promise(
      (async () => {
        await Published(id, e);
      })(),
      {
        loading: "Published ...",
        success: <b>{`Blog ${e ? "Published" : "not Published"} !`}</b>,
        error: <b>Failed to Add Blog .</b>,
      }
    );
  };

  const deleteBlogHandler = async (id, imageKey) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert this Blog`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        toast.promise(
          (async () => {
            await deleteBlog(id, imageKey);
          })(),
          {
            loading: "Adding Blog ...",
            success: <b>Blog Added !</b>,
            error: <b>Failed to Add Blog .</b>,
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
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center shadow-lg rounded bg-white p-4 ">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <Image
            width={1920}
            height={1000}
            className="object-cover rounded lg:w-72 w-full lg:h-48  lg:max-w-64     "
            src={imageUrl}
            alt="explorem"
          />
          <div className="flex flex-col text-center lg:text-left gap-4">
            <h2 className=" font-bold text-lg text-black ">{title}</h2>
            <p className="line-clamp-4 whitespace-pre-line text-[#646c78] font-medium">
              {description}
            </p>
            <span className="text-[#646c78] font-medium  ">
              {createAt.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row gap-10">
          <Link
            href={`dashboard/comments/${id}`}
            className="flex flex-row  bg-[#0149a6] text-center  items-center rounded  gap-2 p-2"
          >
            <Eye className=" stroke-white" />
            <span className="  font-medium text-white  ">Comments</span>
          </Link>
          <div className="flex flex-row lg:flex-col  items-center  gap-4">
            <span className="font-semibold text-white p-2 bg-[#0149a6]">
              published
            </span>
            <button
              onClick={() => handelePublished(id, true)}
              className={`${
                published ? "bg-[#0149a6] text-white" : "text-[#0149a6]"
              } font-bold p-2  rounded-full`}
            >
              Yes
            </button>
            <button
              onClick={() => handelePublished(id, false)}
              className={`${
                !published ? "bg-red-500 text-white" : "text-red-500"
              } font-bold p-2  rounded-full`}
            >
              No
            </button>
          </div>
          <div className="flex items-center gap-8">
            <Link href={`dashboard/updateBlog/${id}`}>
              <Edit className="min-w-4   stroke-2  stroke-blue-500" />
            </Link>
            <button onClick={() => deleteBlogHandler(id, imageKey)}>
              <Trash className="min-w-4 stroke-2  stroke-red-500" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
