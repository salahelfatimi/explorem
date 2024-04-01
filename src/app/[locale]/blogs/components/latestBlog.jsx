import { getLatestBlog } from "@/app/api/data/actions";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { Clock } from "react-feather";

export default async function LatestBlog() {
  const t = useTranslations("Blog");
  const latestBlog = await getLatestBlog();
  const { id, title, imageUrl, description, createAt } = latestBlog || {};
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className=" font-bold  text-2xl bg-[#134ba1] text-white w-full text-center py-2 px-3 ">
        {t('LatestBlog')}
        </h2>
        <div className=" w-full gap-4 items-center flex flex-col lg:flex-row-reverse ">
          <Image
            width={1920}
            height={1000}
            className="lg:w-1/2 object-cover  rounded brightness-75   lg:h-[30rem] bg-no-repeat "
            src={imageUrl}
            alt="explorem"
          />
          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <div className="flex-row-reverse flex items-center justify-between">
              <span className="text-[#646c78] font-semibold flex gap-2">
                <Clock className="min-w-4" /> {createAt.toLocaleDateString()}
              </span>
              <span className="text-[#fff] font-bold  bg-[#134ba1] py-1 px-3">
              {t('new')}
              </span>
            </div>
            <h2 className=" font-bold text-xl lg:text-4xl text-black ">
              {title}
            </h2>
            <p className="line-clamp-4 text-[#646c78] font-medium">
              {description}
            </p>

            <span className="border-2 border-[#134ba1] py-2 px-3 rounded font-bold text-[#134ba1] w-fit">
            {t('readMore')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
