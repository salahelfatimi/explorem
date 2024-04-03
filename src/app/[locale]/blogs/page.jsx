import { fetchBlogs } from "@/app/api/data/actions";
import BlogAll from "./components/blogAll";
import LatestBlog from "./components/latestBlog";
import { useTranslations } from "next-intl";

function Blog() {
  const t = useTranslations("Blog");
  const blogs = fetchBlogs();
  return (
    <div className="container flex flex-col gap-6 py-10 ">
      {blogs.length > 0 ? (
        <>
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
        </>
      ) : (
        <div className=" flex items-center flex-col gap-6">
          <h2 className=" text-3xl font-bold sm:text-4xl tracking-tight text-[#134ba1] uppercase">Attention</h2>
          <span className=" font-semibold text-xl ">No Blogs Published Yet</span>
          <p className=" font-medium text-lg text-center text-[#9DA4B2]">
            We're sorry, but it looks like there are no blog posts available at
            the moment. Our team at ExploreM is working diligently to bring you
            valuable content soon. In the meantime, why not explore and learn
            more about our language services and offerings? You can navigate
            through other sections of our website to discover how we can assist
            you in your language learning journey. Don't forget to sign up for
            our newsletter to stay updated on future blog posts. Thank you for
            your patience and understanding.
          </p>
        </div>
      )}
    </div>
  );
}
export default Blog;
