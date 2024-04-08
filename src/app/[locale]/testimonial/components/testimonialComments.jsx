import { fetchTestimonial } from "@/app/api/data/testimonial/action";
import Image from "next/image";

export default async function TestimonialComments() {
  const testimonial = await fetchTestimonial();

  return (
    <>
      {testimonial.length ? (
        testimonial.map((ele, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 bg-white p-8 rounded-2xl h-fit border-gray-300 border-2"
          >
            <p className="">{ele.text}</p>
            <div className="flex gap-4 items-center">
              <Image
                className="rounded-md bg-[#5199e2] w-10 "
                src={`/image/avatar/${ele.image}.png`}
                height={100}
                width={100}
                alt="avatar"
              />
              <p className="font-bold capitalize">{ele.author}</p>
            </div>
          </div>
        ))
      ) : (
        <div className=" flex items-center justify-center container flex-col gap-6">
          <h2 className=" text-3xl font-bold sm:text-4xl tracking-tight text-[#134ba1] ">
            Attention
          </h2>

          <p className=" font-medium text-lg text-center text-[#9DA4B2]">
            No testimonial provided
          </p>
        </div>
      )}
    </>
  );
}
