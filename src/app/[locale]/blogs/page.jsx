import { fetchBlogs } from "@/app/api/data/actions";
import BlogItem from "@/components/BlogItem";
import Image from "next/image";

const Blog = async () => {
  const blogs = await fetchBlogs();
  return (
    <main className="container  pb-28">
      <header className=" py-16 sm:text-center ">
        <h1 className=" mb-4 text-3xl sm:text-4xl tracking-tight text-[#134ba1] font-extrabold ">
          Latest Blog{" "}
        </h1>
        <p className="text-lg text-black ">
          All the latest Explorem news, straight from the team.
        </p>
      </header>
      <div className=" relative">
        <Image
          width={1920}
          height={1000}
          className="w-full object-cover brightness-50 rounded  h-[30rem] bg-no-repeat "
          src="/image/aboutUS/slideLeft/image2.jpg"
        />
        <div className=" absolute bottom-5 gap-2 left-8 flex flex-col">
          <h2 className=" font-bold text-2xl text-white">
            23 nurse-scholars received their visa !
          </h2>
          <span className="text-[#fff] font-semibold">March 19, 2024</span>
          <span className="bg-[#134ba1] py-2 px-3 rounded font-bold text-white w-fit">Read more</span>
          
        </div>
      </div>
    </main>
  );
};
export default Blog;
