import { fetchTestimonialAdmin } from "@/app/api/data/testimonial/actions";
import PaginationTestimonial from "./components/paginationTestimonial";
import TestimonialComments from "./components/testimonialComments";

export default async function Testimonial({ searchParams }) {
  const take = (await searchParams.take) ? parseInt(searchParams.take) : 18;
  const testimonial = await fetchTestimonialAdmin(take);

  return (
    <div className="flex flex-col gap-10  ">
      <div className="flex  flex-col gap-4 ">
        <h1 className=" font-bold text-4xl text-[#0149a6] ">Testimonial</h1>
      </div>

      <div className=" flex flex-col  gap-4 justify-center">
        {testimonial?.length > 0 ? (
          <div className=" gap-10 columns-1 container  md:columns-2    space-y-6 items-center ">
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
