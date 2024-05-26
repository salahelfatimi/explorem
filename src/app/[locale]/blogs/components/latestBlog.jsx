
// import GetBase64Image from "@/app/base64/getBase64ImageSingle";
import Image from "next/image";
import { Clock } from "react-feather";
import { Link } from "@/navigation";
import { latestBlog } from "@/app/data/blog";
import { useTranslations } from "next-intl";


export default  function LatestBlog() {
  const t = useTranslations("Blog");
  
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="container w-full gap-4 lg:items-center  flex flex-col lg:flex-row-reverse ">
          <div className="lg:w-1/2 object-cover h-auto  rounded  shadow-2xl  ">
            <Image
              title={latestBlog.title}
              blurDataURL={latestBlog.base64}
              placeholder="blur"
              width={latestBlog.width}
              height={latestBlog.height}
              src= {`/image/blogExplorem/${latestBlog.Url}`}
              className="object-cover  h-96  rounded-t "
              alt={latestBlog.title}
            />
             {/* <GetBase64Image imageUrl={Url} className={'object-cover  h-auto  rounded-t '} alt={title}/> */}
             
          </div>

          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <span className="text-[#fff] font-bold  bg-[#134ba1] w-fit py-1 px-3">
              {t("new")}
            </span>

            <h2 className=" font-bold text-center lg:text-left text-xl lg:text-4xl text-black ">
              {latestBlog.title}
            </h2>
            <p className="line-clamp-4 whitespace-pre-line text-[#646c78] font-medium">
              {latestBlog.description}
            </p>

            <div className="flex justify-between w-full flex-row-reverse items-center">
              <span className="text-[#646c78]   font-semibold flex gap-2">
                <Clock className="min-w-4" /> {latestBlog.createAt}
              </span>
              <span className="font-bold">
                By <span className="text-[#134ba1]">{latestBlog.author}</span>
              </span>
            </div>
            <Link
          href={`/blogs/${encodeURIComponent(latestBlog.title.trim().replace(/[/%\s]+/g, '-'))}`}
              className="border-2 border-[#134ba1] py-2 px-3 rounded font-bold text-[#134ba1] w-full text-center lg:w-fit"
            >
              {t("readMore")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
