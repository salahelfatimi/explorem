

import { useTranslations } from "next-intl";
import BlogAll from "./components/blogAll";
import LatestBlog from "./components/latestBlog";

export async function generateMetadata() {
  return {
    title: "Blog",
    description: "All the latest Explorem news, straight from the team .",
    
  };
};

 function Blog({ searchParams }) {
  const take = ( searchParams.take) ? parseInt(searchParams.take) : 4;
  const t =  useTranslations("Blog");
  return (
    <>
      <div className="container flex flex-col gap-6 py-10 pt-32 ">
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
              <BlogAll  take={take}/> 
            </div>
          </>
          
      </div>
    </>
  );
}
export default Blog;
