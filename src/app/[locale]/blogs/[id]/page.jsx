import Image from "next/image";

import { Clock, Facebook, Instagram, Send } from "react-feather";
import { CommentListings } from "../components/CommentListings";
import CommentAddForm from "../components/form/CommentAddForm";
import { fetchSingleBlog } from "@/app/api/data/blog/actions";
export default async function BlogDetail({ params }) {
  const id = params?.id;

  const blog = await fetchSingleBlog(id);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="container items-center   flex flex-col gap-16 py-10">
        <h3 className="font-bold italic   border-b-4 text-[#134ba1] border-[#134ba1] uppercase text-wrap text-center text-2xl lg:text-4xl   ">
          {blog.title}
        </h3>
        <div className=" flex  flex-col lg:flex-row gap-4">
          {"/image/aboutUS/slideLeft/image1.jpg" ? (
            <Image
              blurDataURL={blog.imageUrl}
              placeholder="blur"
              loading="lazy"
              quality={100}
              src={blog.imageUrl}
              alt="ffff"
              width="1920"
              height="1080"
              className=" object-cover  rounded  shadow-2xl  w-full lg:h-[30rem] bg-no-repeat   "
            />
          ) : null}
          <div className="flex justify-center lg:flex-col gap-4 items-center">
            <span className=" border-t-4 border-[#134ba1] items-center  h-fit p-2 flex-row lg:flex-col font-bold flex gap-2">
              <p className="text-[#134ba1] font-extrabold text-xl">
                {new Date(blog.createAt).getDate()}
              </p>

              <p className="">
                {monthNames[new Date(blog.createAt).getMonth() + 1]}
              </p>
              <p className=" bg-[#134ba1] text-white py-1 px-4">
                {new Date(blog.createAt).getFullYear()}
              </p>
            </span>
            <span className=" rounded-full border-[#134ba1]  border-2 w-fit h-fit p-2">
              <Facebook className=" stroke-[#134ba1] stroke-2" />
            </span>
            <span className=" rounded-full border-[#134ba1] border-2 w-fit h-fit p-2">
              <Instagram className=" stroke-[#134ba1] stroke-2" />
            </span>
            <span className=" rounded-full border-[#134ba1] border-2 w-fit h-fit p-2">
              <Send className=" stroke-[#134ba1] stroke-2" />
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center text-xl justify-between gap-4">
          <span className="font-bold">
            By <span className="text-[#134ba1] uppercase">Explorem</span>
          </span>
        </div>

        <p className="  whitespace-pre-line text-center lg:text-left  text-wrap subpixel-antialiased  leading-loose capitalize tracking-wide lg:text-xl   ">
          {blog.description}
        </p>
      </div>
      <div className="flex gap-4 flex-col  container">
        <div>
          <CommentListings blogId={blog.id} />
        </div>
        <div className=" bg-white px-4 py-6">
          <CommentAddForm blogId={blog.id} />
        </div>
      </div>
    </>
  );
}
