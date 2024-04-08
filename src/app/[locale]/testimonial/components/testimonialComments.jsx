
import Image from "next/image";

export default async function TestimonialComments({testimonial}) {
  const { text, image, author } = testimonial || {};
  return (
    <>
      <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl h-fit border-gray-300 border-2">
        <p className="">{text}</p>
        <div className="flex gap-4 items-center">
          <Image
            className="rounded-md bg-[#5199e2] w-10 "
            src={`/image/avatar/${image}.png`}
            height={100}
            width={100}
            alt="avatar"
          />
          <p className="font-bold capitalize">{author}</p>
        </div>
      </div>
    </>
  );
}
