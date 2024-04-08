
import TestimonialComments from "./components/testimonialComments";

import AddTestimonial from "./components/addTestimonial";


export default function Testimonial() {

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

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <TestimonialComments />
      </div>
    </div>
  );
}
