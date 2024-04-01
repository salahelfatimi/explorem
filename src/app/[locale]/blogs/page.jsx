import { fetchBlogs, getLatestBlog } from "@/app/api/data/actions";
import BlogItem from "@/components/BlogItem";
import Image from "next/image";
import { Clock } from "react-feather";
import BlogAll from "./components/blogAll";
import LatestBlog from "./components/latestBlog";
import { useTranslations } from "next-intl";

function Blog() {
  const t = useTranslations("Blog");
  return (
    <div className="container flex flex-col gap-6 py-10 ">
      <div className="  text-center ">
        <h1 className=" mb-4 text-3xl sm:text-4xl tracking-tight text-[#134ba1] font-bold ">
          {t("title")}
        </h1>
        <p className="text-lg text-black font-medium">{t("description")}</p>
      </div>
      <div>
        <LatestBlog />
      </div>
      <div>
        <BlogAll />
      </div>
    </div>
  );
}
export default Blog;
