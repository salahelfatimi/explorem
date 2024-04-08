import Image from "next/image";

export default async function TestimonialComments({ testimonial }) {
  const { text, image, author, createdAt } = testimonial || {};
  return (
    <>
      <div className="flex flex-col gap-6  p-8   ">
        <p className="">{text}</p>
        <div className="flex gap-4  items-center">
          <Image
            className="rounded-full bg-[#0149a6] w-10 "
            src={`/image/avatar/${image}.png`}
            height={100}
            width={100}
            alt="avatar"
          />
          <p className="font-bold text-balance capitalize">{author}</p>
          <div className="flex flex-col gap-2 w-full">
            
            <p className="font-semibold text-right">
              {createdAt.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
