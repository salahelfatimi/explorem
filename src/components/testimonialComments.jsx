import Image from "next/image";
import { getTranslations } from "next-intl/server";
export default async function TestimonialComments({ testimonial }) {
  const { text, image, author, fileKey, fileUrl, createdAt } =
    testimonial || {};
    const t = await getTranslations("Testimonial");
  // Function to determine if the file URL is an image
  const isImage = (url) => /\.(jpg|jpeg|png|gif)$/i.test(url);
  const isString = (url) => typeof url === "string";
  const istext = (url) => /\.(txt|pdf|doc|docx)$/i.test(url);
  const isVideo = (url) => /\.(mp4|avi|mov|wmv)$/i.test(url);
  return (
    <>
      <div className="flex flex-col gap-6  p-8   ">
        <span className=" font-bold bg-red-600 w-fit py-1 px-4 text-white capitalize">{isImage(fileUrl)?t('image'):isVideo(fileUrl)?t('video'):istext(fileUrl)?t('file'):t('comment')}</span>
        {isImage(fileUrl) ? (
          <Image
            className=" bg-[#0149a6] w-auto bg-cover"
            src={fileUrl}
            height={1920}
            width={1080}
            alt="avatar"
          />
        ) : isVideo(fileUrl) ? (
          <video
            className=" bg-[#0149a6] h-[32rem] min-h-96 w-auto  "
            height={100}
            width={100}
            controls
          >
            <source src={fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : isString(text) ? (
          <p className="">{text}</p>
        ) : istext(fileUrl) ? (
          <a href={fileUrl} target="_blank" className=" font-bold text-center hover:bg-red-600 bg-gray-500  duration-500 hover:text-white rounded text-white py-3 px-4">{t('fileClick')}</a>
         
        ) : "text"}
        <div className="flex gap-4  items-center">
          <Image
            className="rounded-full bg-[#0149a6] w-10 "
            src={`/image/avatar/${image}.png`}
            height={100}
            width={100}
            alt="avatar"
          />

          <div className="flex flex-col gap-2 w-full">
            <p className="font-bold text-balance capitalize">{author}</p>
          </div>
        </div>
        <p className="font-semibold text-right">
          {createdAt}
        </p>
      </div>
    </>
  );
}
