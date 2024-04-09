import Image from "next/image";
import { Trash2 } from "react-feather";
import DeletedTestimonial from "./deletedTestimonial";

export default async function TestimonialComments({ testimonial }) {
  const {id, text, image, author, createdAt } = testimonial || {};
  return (
    <>
      <div className="flex flex-col gap-6  p-8   ">
        <DeletedTestimonial id={id} />
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
