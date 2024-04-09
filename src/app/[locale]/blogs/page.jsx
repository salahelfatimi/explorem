
import { fetchBlogs } from "@/app/api/data/blog/actions";
import BlogAll from "./components/blogAll";
import LatestBlog from "./components/latestBlog";
import { getTranslations } from "next-intl/server";

async function Blog() {
  const t = await getTranslations("Blog");
  const latestBlog = await fetchBlogs();
  return (
    <>
      <div className="container flex flex-col gap-6 py-10 ">
        {latestBlog.length ? (
          <>
            <div className="  text-center ">
              <h1 className=" mb-4 text-3xl sm:text-4xl tracking-tight text-[#134ba1] font-bold ">
                {t("title")}
              </h1>
              <p className="text-lg text-gray-500 font-medium">
                {t("description")}
              </p>
            </div>
            <div>
              <LatestBlog />
            </div>
            <div>
              <BlogAll />
            </div>
          </>
        ) : (
          <div className=" flex items-center flex-col gap-6">
            <h2 className=" text-3xl font-bold sm:text-4xl tracking-tight text-[#134ba1] ">
              {t("Attention.title")}
            </h2>
            <span className=" font-semibold text-xl ">{t("Attention.p")}</span>
            <p className=" font-medium text-lg text-center text-[#9DA4B2]">
              {t("Attention.description")}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export default Blog;
