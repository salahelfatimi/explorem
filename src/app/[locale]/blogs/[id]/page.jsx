
import Image from "next/image";

import { Clock, Facebook, Instagram, Send } from "react-feather";
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
  const createMarkup = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, '<a class=" text-blue-500 underline underline-offset-2" href="$1" target="_blank">$1</a>');
  };
  return (
    <>
      <div className="container px-4 items-center   flex flex-col gap-16 py-10">
        <h3 className="font-bold italic   border-b-4 text-[#134ba1] border-[#134ba1] uppercase text-wrap text-center text-2xl lg:text-4xl   ">
          {blog?.title}
        </h3>
        <div className=" flex  flex-col lg:flex-row gap-4">
          {"/image/aboutUS/slideLeft/image1.jpg" ? (
            <Image
              blurDataURL={blog.imageUrl}
              placeholder="blur"
              loading="lazy"
              quality={100}
              src={blog.imageUrl}
              alt={blog?.title}
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
            <a href="https://web.facebook.com/ExploremSARL" className="  rounded-full duration-500 border-[#134ba1] bg-[#134ba1] hover:bg-white  border-2 w-fit h-fit p-2">
              <Facebook className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
            <a href="https://www.instagram.com/explorem21/" className=" rounded-full duration-500 border-[#134ba1] bg-[#134ba1] hover:bg-white border-2 w-fit h-fit p-2">
              <Instagram className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.explorem.net/en/blogs/${id}`} className=" rounded-full duration-500 border-[#134ba1] hover:bg-white bg-[#134ba1] border-2 w-fit h-fit p-2">
              <Send className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center text-xl justify-between gap-4">
          <span className="font-bold">
            By <span className="text-[#134ba1] uppercase">Explorem</span>
          </span>
        </div>

        <p
          className="whitespace-pre-line text-center lg:text-left break-words container   leading-loose capitalize  lg:text-xl"
          dangerouslySetInnerHTML={{ __html: createMarkup(blog.description) }}
        ></p>
      </div>
     
     
    </>
  );
}
