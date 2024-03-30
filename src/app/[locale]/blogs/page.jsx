import { fetchBlogs } from "@/app/api/data/actions";
import BlogItem from "@/components/BlogItem";
import Image from "next/image";
import { Clock } from "react-feather";
import BlogAll from "./components/blogAll";

const Blog = async () => {
 
  return (
    <main className="container flex flex-col gap-4  pb-28">
      <header className=" py-16 sm:text-center ">
        <h1 className=" mb-4 text-3xl sm:text-4xl tracking-tight text-[#134ba1] font-bold ">
          Our Blog
        </h1>
        <p className="text-lg text-black font-medium">
          All the latest Explorem news, straight from the team.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        <h2 className=" font-medium text-xl bg-[#134ba1] text-white w-fit py-2 px-3 ">
          Latest blog
        </h2>
        <div className=" w-full gap-4 items-center flex flex-col lg:flex-row-reverse ">
          <Image
            width={1920}
            height={1000}
            className="lg:w-1/2 object-cover  rounded brightness-75   lg:h-[30rem] bg-no-repeat "
            src="/image/aboutUS/slideLeft/image2.jpg"
          />
          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <span className="text-[#646c78] font-semibold flex gap-2">
              <Clock className="min-w-4" /> March 19, 2024
            </span>
            <h2 className=" font-bold text-xl lg:text-4xl text-black ">
              23 nurse-scholars received their visa !
            </h2>
            <p className="line-clamp-4 text-[#646c78] font-medium">
              Explorem made it happen. Explorem made a difference. ✨️🇩🇪
              Explorem offers online and onsite German courses from A1 to B2
              level with affordable fees, in partnership with German employers,
              since year 2020. Explorem offers training programs (Ausbildung)
              and job placement programs in partnership with German employers
              and companies. Explorem provides candidates support from A0 level
              to relocation to the target country in terms of language training,
              documentation, recognition or diploma equivalency, professional
              qualification, and visa process since year 2020.
            </p>

            <span className="border-2 border-[#134ba1] py-2 px-3 rounded font-bold text-[#134ba1] w-fit">
              Read More
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-6">
        <h2 className=" font-medium text-xl bg-[#134ba1] text-white w-full text-center rounded py-2 px-3 ">
          All blog
        </h2>
        <div>
          <BlogAll />
        </div>
      </div>
    </main>
  );
};
export default Blog;
