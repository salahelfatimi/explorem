import { fetchBlogs } from "@/app/api/data/actions";
import { useTranslations } from "next-intl";

import { Clock, Link2 } from "react-feather";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "de", "ar"];
const { Link, usePathname } = createSharedPathnamesNavigation({ locales });
export default async function BlogAll() {
  const t = useTranslations("Blog");
  const blogs = await fetchBlogs();
  return (
    <div className=" flex flex-col gap-6">
      <h2 className=" font-bold  text-2xl bg-[#134ba1] text-white w-full text-center py-2 px-3 ">
        {t("AllBlog")}
      </h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <div className="flex flex-col    gap-8 justify-between items-center    container">
            <div className="     w-full flex lg:flex-row  flex-col-reverse   gap-2 rounded-xl border-8 border-white  drop-shadow-2xl  bg-white ">
              <div className="flex justify-between flex-col gap-8 lg:w-1/2 p-6 items-center lg:items-start">
                <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center  text-black">
                  {blog.title}
                </span>
                <div className="flex flex-col   gap-6 items-center lg:items-start">
                  <span className="text-[#9DA4B2] lg:text-base text-sm line-clamp-4  font-semibold">
                    {blog.description}
                  </span>
                </div>

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
              <div className="lg:w-1/2 flex items-center  ">
                <img
                  blurDataURL={blog.imageUrl}
                  placeholder="blur"
                  loading="lazy"
                  width="1920"
                  height="1080"
                  quality={100}
                  className="object-cover      rounded-t-xl  lg:rounded-xl     "
                  src={blog.imageUrl}
                  alt="explorem"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
