import { Clock, Link2 } from "react-feather";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { fetchBlogs } from "@/app/api/data/blog/actions";
import PaginationBlog from "./paginationBlog";

const locales = ["en", "de", "ar"];
const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
export default async function BlogAll({ take }) {
  const t = await getTranslations("Blog");
  const blogs = await fetchBlogs(take);

  return (
    <div className=" flex flex-col gap-6">
      <h2 className=" font-bold  text-2xl text-[#134ba1]  border-y-4 border-[#134ba1] w-full text-center py-2 px-3 ">
        {t("AllBlog")}
      </h2>
      <div className=" columns-1  lg:columns-3 space-y-8 gap-4">
        {blogs.map((blog, index) => (
          <div key={index}>
            <div
              className={` flex break-inside-avoid-column flex-col-reverse    gap-2  rounded  bg-white `}
            >
              <div className="flex justify-between flex-col gap-8 p-6 items-center  ">
                <span className=" uppercase font-bold text-xl  text-center  text-black">
                  {blog.title}
                </span>

                <span className="text-[#9DA4B2] text-center whitespace-pre-line  xl:text-base text-sm line-clamp-4 break-all    font-semibold">
                  {blog.description}
                </span>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="bg-[#134ba0]  font-bold w-full  justify-center  text-white rounded-md  py-2 px-4  capitalize flex gap-2 items-center "
                >
                  <span>{t("readMore")}</span> <Link2 size={25} />
                </Link>
                <div className="flex justify-between  w-full flex-row-reverse items-center">
                  <span className="text-[#646c78]   font-semibold flex gap-2">
                    {blog.createAt.toLocaleDateString()}
                    <Clock className="min-w-4" />{" "}
                  </span>
                  <span className="font-bold">
                    By <span className="text-[#134ba1]">{blog.author}</span>
                  </span>
                </div>
              </div>
              <div className=" flex items-center  ">
                <Image
                  blurDataURL={blog.imageUrl}
                  placeholder="blur"
                  loading="lazy"
                  width="1920"
                  height="1080"
                  quality={100}
                  className="object-cover   rounded-t      "
                  src={blog.imageUrl}
                  alt="explorem"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
          className={`${
            take >= blogs?.length ? "hidden" : "block"
          } flex justify-center`}
        >
          <PaginationBlog take={take} />
        </div>
    </div>
  );
}
