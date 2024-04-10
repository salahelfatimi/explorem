import Image from "next/image";
import DeletedTestimonial from "./deletedTestimonial";

export default async function TestimonialComments({ testimonial }) {
  const { id, text, image, author, fileKey, fileUrl, createdAt } =
    testimonial || {};
  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };
  // Function to determine if the file URL is an image
  const isImage = (url) => /\.(jpg|jpeg|png|gif)$/i.test(url);
  const isString = (url) => typeof url === "string";
  const istext = (url) => /\.(txt|pdf|doc|docx)$/i.test(url);

  // Function to determine if the file URL is a video
  const isVideo = (url) => /\.(mp4|avi|mov|wmv)$/i.test(url);
  return (
    <>
      <div className="flex flex-col gap-6  p-8   ">
        <div className="flex justify-between   ">
          {isToday(new Date(createdAt)) && (
            <p className="bg-red-500 text-white shadow-lg font-semibold py-1 px-2">
              New
            </p>
          )}
          <DeletedTestimonial id={id} fileKey={fileKey} />
        </div>
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
            className=" bg-[#0149a6] w-auto  "
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
          <iframe
            src={`${fileUrl}`}
            width="100%"
            height="100%"
            className="w-full h-[34rem] "
          ></iframe>
        ) : null}
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
          {createdAt.toLocaleDateString()}
        </p>
      </div>
    </>
  );
}
