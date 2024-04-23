import { getLatestBlog } from "@/app/api/data/blog/actions";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import { Clock } from "react-feather";
const locales = ["en", "de", "ar"];
const { Link } = createSharedPathnamesNavigation({ locales });
export default async function LatestBlog() {
  const t = await getTranslations("Blog");
  const latestBlog = await getLatestBlog();
  const {
    id,
    title,
    imageUrl,
    base64,
    description,
    width,
    height,
    author,
    createAt,
  } = latestBlog || {};
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="container w-full gap-4 lg:items-center  flex flex-col lg:flex-row-reverse ">
          <div className="lg:w-1/2 object-cover h-auto  rounded  shadow-2xl  ">
            <Image
              title={title}
              blurDataURL={base64}
              placeholder="blur"
              quality={100}
              width={width}
              height={height}
              src={imageUrl}
              className="object-cover  h-auto  rounded-t "
              alt={title}
            />
          </div>

          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <span className="text-[#fff] font-bold  bg-[#134ba1] w-fit py-1 px-3">
              {t("new")}
            </span>

            <h2 className=" font-bold text-xl lg:text-4xl text-black ">
              {title}
            </h2>
            <p className="line-clamp-4 whitespace-pre-line text-[#646c78] font-medium">
              {description}
            </p>

            <div className="flex justify-between w-full flex-row-reverse items-center">
              <span className="text-[#646c78]   font-semibold flex gap-2">
                <Clock className="min-w-4" /> {createAt}
              </span>
              <span className="font-bold">
                By <span className="text-[#134ba1]">{author}</span>
              </span>
            </div>
            <Link
              href={`/blogs/${title.replace(/\s+/g, '-')}`}
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
