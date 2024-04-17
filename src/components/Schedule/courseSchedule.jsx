import Image from "next/image";

export default function CourseSchedule() {
  return (
    <div className=" flex items-center flex-col gap-8">
      <div className="flex gap- items-center">
        <Image
          src="/image/aboutUS/logoHand.png"
          className="w-14 lg:w-16"
          width={195}
          height={159}
          alt="Explorem"
        />
        <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
          German Course Schedule
        </h2>
      </div>
      <div className="container flex flex-col gap-4 justify-center bg-[#0149a6] py-4  w-fit items-center">
        <h2 className="text-[#fff] text-3xl font-bold">ONSITE COURSE</h2>
        <div className=" grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
            <h3 className=" text-lg font-semibold text-[#0149a6]">
              Standard Program
            </h3>
            <span className=" text-lg font-semibold text-[#0149a6]">
              2 hours/ day
            </span>
            <span className="font-medium">Monday to Friday</span>
            <div className="flex gap-2 font-medium">
              <span>Time : </span>
              <ul>
                <li>09:00 – 11:00</li>
                <li>11:00 – 13:00</li>
                <li>14:00 – 16:00</li>
                <li>16:00 – 18:00</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
            <h3 className=" text-lg font-semibold text-[#0149a6]">
              Intensive Program
            </h3>
            <span className=" text-lg font-semibold text-[#0149a6]">
              3 hours/ day
            </span>
            <span className="font-medium">Monday to Friday</span>
            <div className="flex gap-2 font-medium">
              <span>Time : </span>
              <ul>
                <li>09:00 – 12:00</li>
                <li>12:30 – 15:30</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
