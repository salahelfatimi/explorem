import { Clock, Link2 } from "react-feather";

export default function BlogAll() {
  return (
    <>
      <div className="flex flex-col  gap-8 justify-between items-center    container">
        <div className="   w-auto flex  flex-col-reverse  odd:lg:flex-row   even:lg:flex-row-reverse items-center gap-2 rounded-xl border-8 border-white  drop-shadow-2xl  bg-white ">
          <div className="flex flex-col gap-8 lg:w-1/2 p-6 items-center  lg:items-start">
            <span className=" uppercase font-bold text-lg lg:text-xl lg:text-start text-center  text-black">
              23 nurse-scholars received their visa !
            </span>
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <span className="text-[#9DA4B2] lg:text-base text-sm line-clamp-4  font-semibold">
                Explorem made it happen. Explorem made a difference. ✨️🇩🇪
                Explorem offers online and onsite German courses from A1 to B2
                level with affordable fees, in partnership with German
                employers, since year 2020. Explorem offers training programs
                (Ausbildung) and job placement programs in partnership with
                German employers and companies. Explorem provides candidates
                support from A0 level to relocation to the target country in
                terms of language training, documentation, recognition or
                diploma equivalency, professional qualification, and visa
                process since year 2020.
              </span>
            </div>

            <button className="bg-[#134ba0]  font-bold w-full  justify-center  text-white rounded-md  py-2 px-4  capitalize flex gap-2 items-center ">
              {" "}
              <span>Read More</span> <Link2 size={25} />
            </button>
            <span className="text-[#646c78]   font-semibold flex gap-2">
              <Clock className="min-w-4" /> March 19, 2024
            </span>
          </div>
          <div className="lg:w-1/2">
            <img
              className="object-cover    rounded-t-xl  lg:rounded-xl  h-full   "
              src="/image/aboutUS/slideLeft/image2.jpg"
              alt=""
            />
          </div>
        </div>
        
      </div>
    </>
  );
}
