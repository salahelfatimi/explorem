import { fetchTestimonial, fetchTestimonialFalseAdmin } from "@/app/api/data/testimonial/actions";
import PaginationTestimonial from "./components/paginationTestimonial";
import TestimonialComments from "./components/testimonialComments";
import { Bell } from "react-feather";
import Link from "next/link";

export default async function Testimonial({ searchParams }) {
  const take = (await searchParams.take) ? parseInt(searchParams.take) : 18;
  const testimonial = await fetchTestimonial(take);
  const testimonialFalse = await fetchTestimonialFalseAdmin(take);

  return (
    <div className="flex flex-col gap-10  ">
      <div className="flex  flex-row justify-between gap-4 items-center p-4 rounded bg-[#0149a6]">
        <h1 className=" font-bold text-2xl lg:text-4xl text-white ">
          Testimonial
        </h1>
        <Link href="testimonial/testimonialNotValidate" className="bg-white rounded-full relative p-2">
          <Bell size={30} className=" min-w-8 " />
          {testimonialFalse?.length > 0 && (
            <>
              <p className=" absolute -top-3 -right-2 text-white bg-red-500 px-2 rounded-full text-lg  animate-bounce font-bold">
                {testimonialFalse?.length}
              </p>
            </>
          )}
        </Link>
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
                  <TestimonialComments testimonial={testimonial} testimonialFalse={testimonialFalse} />
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
