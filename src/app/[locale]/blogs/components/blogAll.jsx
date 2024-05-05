import { Clock, Link2 } from "react-feather";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { fetchBlogs } from "@/app/api/data/blog/actions";
import PaginationBlog from "./paginationBlog";


import { Link, usePathname } from "@/navigation";

export default async function BlogAll({ take }) {
  const t = await getTranslations("Blog");
  const blogs = await fetchBlogs(take);

  return (
    <div className=" flex flex-col gap-6">
      <h2 className=" font-bold  text-2xl text-[#134ba1]  border-y-4 border-[#134ba1] w-full text-center py-2 px-3 ">
        {t("AllBlog")}
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className=" ">
            <div
              className={` flex flex-col-reverse justify-between h-full    gap-2  rounded  bg-white `}
            >
              <div className="flex justify-between flex-col gap-8 p-6 items-center  ">
                <h2 className="  font-bold text-xl  text-center  text-black">
                  {blog.title}
                </h2>

                <p className="text-[#9DA4B2] text-center whitespace-pre-line  xl:text-base text-sm line-clamp-4 break-all    font-semibold">
                  {blog.description}
                </p>

                <Link
              href={`/blogs/${encodeURIComponent(blog.title.trim().replace(/[/%\s]+/g, '-'))}`}
                  className="bg-[#134ba0]  font-bold w-full  justify-center  text-white rounded-md  py-2 px-4  capitalize flex gap-2 items-center "
                >
                  <span>{t("readMore")}</span> <Link2 size={25} />
                </Link>
                <div className="flex justify-between  w-full flex-row-reverse items-center">
                  <span className="text-[#646c78]   font-semibold flex gap-2">
                    {blog.createAt}
                    <Clock className="min-w-4" />{" "}
                  </span>
                  <span className="font-bold">
                    By <span className="text-[#134ba1]">{blog.author}</span>
                  </span>
                </div>
              </div>
              <div className=" flex items-center  ">
                <Image
                  blurDataURL={blog.base64}
                  placeholder="blur"
                  width={blog.width}
                  height={blog.height}
                  quality={100}
                  alt={blog.title}
                  title={blog.title}
                  className="object-cover  max-h-96  rounded-t      "
                  src={blog.Url}
                />
                </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${
          take > blogs?.length ? "hidden" : "block"
        } flex justify-center`}
      >
        <PaginationBlog take={take} />
      </div>
    </div>
  );
}
