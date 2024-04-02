import { getLatestBlog } from "@/app/api/data/actions";
import { useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import Image from "next/image";

import { Clock } from "react-feather";
const locales = ["en", "de", "ar"];
const {  Link } = createSharedPathnamesNavigation({ locales });
export default async function LatestBlog() {
  const t = useTranslations("Blog");
  const latestBlog = await getLatestBlog();
  const { id, title, imageUrl, description, author, createAt } =
    latestBlog || {};
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* <h2 className=" font-bold  text-2xl bg-[#134ba1] text-white w-full text-center py-2 px-3 ">
        {t('LatestBlog')}
        </h2> */}
        <div className=" w-full gap-4 lg:items-center  flex flex-col lg:flex-row-reverse ">
          <Image
            blurDataURL={imageUrl}
            placeholder="blur"
            loading="lazy"
            quality={100}
            width={1920}
            height={1000}
            className="lg:w-1/2 object-cover  rounded  shadow-2xl   lg:h-[30rem] bg-no-repeat "
            src={imageUrl}
            alt="explorem"
          />
          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <span className="text-[#fff] font-bold  bg-[#134ba1] w-fit py-1 px-3">
              {t("new")}
            </span>

            <h2 className=" font-bold text-xl lg:text-4xl text-black ">
              {title}
            </h2>
            <p className="line-clamp-4 text-[#646c78] font-medium">
              {description}
            </p>

            <div className="flex justify-between w-full flex-row-reverse items-center">
              <span className="text-[#646c78]   font-semibold flex gap-2">
                <Clock className="min-w-4" /> {createAt?.toLocaleDateString()}
              </span>
              <span className="font-bold">
                By <span className="text-[#134ba1]">{author}</span>
              </span>
            </div>
            <Link
              href={`/blogs/${id}`}
              className="border-2 border-[#134ba1] py-2 px-3 rounded font-bold text-[#134ba1] w-fit"
            >
              {t("readMore")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
