import { fetchBlogs } from "@/app/api/data/actions";
import { useTranslations } from "next-intl";
import { Clock, Link2 } from "react-feather";

export default async function BlogAll() {
  const t = useTranslations("Blog");
  const blogs = await fetchBlogs();
  return (
    <div className=" flex flex-col gap-6">
        <h2 className=" font-bold text-xl border-[#134ba1] border-y-4 text-[#134ba1] w-full text-center  py-2 px-6 ">
        {t('AllBlog')}
          </h2>
      {blogs.map((blog, index) => (
        <div  key={index}>
          
          <div className="flex flex-col  gap-8 justify-between items-center    container">
            <div className="   w-auto flex  flex-col-reverse  odd:lg:flex-row   even:lg:flex-row-reverse items-center gap-2 rounded-xl border-8 border-white  drop-shadow-2xl  bg-white ">
              <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
                <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center  text-black">
                  {blog.title}
                </span>
                <div className="flex flex-col gap-6 items-center lg:items-start">
                  <span className="text-[#9DA4B2] lg:text-base text-sm line-clamp-4  font-semibold">
                    {blog.description}
                  </span>
                </div>

                <button className="bg-[#134ba0]  font-bold w-full  justify-center  text-white rounded-md  py-2 px-4  capitalize flex gap-2 items-center ">
                  {" "}
                  <span>{t('readMore')}</span> <Link2 size={25} />
                </button>
                <span className="text-[#646c78]   font-semibold flex gap-2">
                  <Clock className="min-w-4" />  {blog.createAt.toLocaleDateString()}
                </span>
              </div>
              <div className="lg:w-1/2">
                <img
                  className="object-cover    rounded-t-xl  lg:rounded-xl     "
                  src={blog.imageUrl}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
