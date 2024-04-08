import { fetchTestimonial } from "@/app/api/data/testimonial/action";

import AddTestimonial from "./components/addTestimonial";
import PaginationTestimonial from "./components/paginationTestimonial";
import TestimonialComments from "./components/testimonialComments";

export default async function Testimonial({ searchParams }) {
  const take = (await searchParams) == {} ? 6 : parseInt(searchParams.take);
  const testimonial = await fetchTestimonial(take);

  return (
    <div className="flex flex-col  container gap-6 py-12  ">
      <div className="flex  flex-col gap-4 items-center">
        <span className=" py-1 px-4 rounded-full text-white font-bold shadow-xl bg-[#0149a6]">
          Client stories
        </span>
        <h1 className=" font-serif font-bold text-4xl ">Our wall of love</h1>
        <p className=" text-[#9da4b2]  text-center  text-lg ">
          Read what our client are saying about Explorem
        </p>
      </div>
      <div>
        <AddTestimonial />
      </div>
      <div className=" flex flex-col  gap-4 justify-center">
        {testimonial?.length > 0 ? (
          <div className=" gap-16 columns-1 lg:columns-2 space-y-6 items-center ">
            {testimonial?.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className={`even:bg-white  break-inside-avoid-column odd:bg-[#0149a6] odd:text-white border-[#ffff]   rounded  shadow-lg  `}
                >
                  <TestimonialComments testimonial={testimonial} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-6 h-full">
            <p className="font-medium text-lgtext-center text-[#9DA4B2]">
              No testimonial provided
            </p>
          </div>
        )}

        <div
          className={`${
            take > testimonial?.length ? "hidden" : "block"
          } flex justify-center`}
        >
          <PaginationTestimonial searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
