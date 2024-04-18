import Image from "next/image";

export default function CourseSchedule() {
  const dayNames = [
   
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
];
const currentDayIndex = new Date().getDay()-1;
  return (
    <div className=" flex items-center flex-col gap-8">
      <div className="flex gap-2 justify-center items-center">
        <h2 className=" text-3xl font-bold text-[#0149a6] capitalize">
          German Course Schedule
        </h2>
      </div>
      <div className="container flex flex-col gap-4 justify-center bg-[#0149a6] py-4  w-fit items-center">
        <h2 className="text-[#fff] text-3xl font-bold">ONSITE COURSE</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
            <h3 className=" text-lg font-semibold bg-[#0149a6] text-white px-2">
              Standard Program
            </h3>
            <span className="  font-semibold text-[#0149a6]">2 hours/ day</span>
            <span className="font-medium">Monday to Friday</span>
            <div className="flex gap-2 font-medium">
              <span>Time : </span>
              <ul className="text-[#0149a6] ">
                <li>09:00 – 11:00</li>
                <li>11:00 – 13:00</li>
                <li>14:00 – 16:00</li>
                <li>16:00 – 18:00</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
            <h3 className=" text-lg font-semibold bg-[#0149a6] text-white px-2">
              Intensive Program
            </h3>
            <span className="  font-semibold text-[#0149a6]">3 hours/ day</span>
            <span className="font-medium">Monday to Friday</span>
            <div className="flex gap-2 font-medium">
              <span>Time : </span>
              <ul className="text-[#0149a6]">
                <li>09:00 – 12:00</li>
                <li>12:30 – 15:30</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className=" text-lg  w-fit  font-semibold text-[#0149a6] bg-white px-2">
            Ongoing Onsite Course
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
              <h3 className=" text-lg text-center font-semibold bg-[#0149a6] text-white px-2">
                Standard Program (A2)
              </h3>
             
              <div className="flex gap-2 font-medium">
                
                <ul className="text-[#0149a6] py-4">
                  {dayNames.map((ele,index)=>(
                    <li className={`flex gap-8 items-center justify-between  py-2 px-1 ${index === currentDayIndex ? 'bg-[#0149a6] text-white ' : ''}`} key={index}><span>{ele}</span><span>16:00 – 18:00</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
              <h3 className=" text-lg text-center font-semibold bg-[#0149a6] text-white px-2">
                Intensive Program (A1)
              </h3>

              <div className="flex gap-2 font-medium">
                
                <ul className="text-[#0149a6] py-4">
                  {dayNames.map((ele,index)=>(
                    <li className={`flex gap-8 items-center justify-between  py-2 px-1 ${index === currentDayIndex ? 'bg-[#0149a6] text-white ' : ''}`} key={index}><span>{ele}</span><span>12:30 – 15:30</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className=" text-lg text-center  w-fit  font-semibold text-[#0149a6] bg-white px-2">
            Ongoing Registration (until April 30, 2024)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
              <h3 className=" text-lg text-center font-semibold bg-[#0149a6] text-white px-2">
                Standard Program (B1)
              </h3>
              <span className="font-medium">Monday to Friday</span>
              <div className="flex gap-2 font-medium">
                <span>Time : </span>
                <ul className="text-[#0149a6]">
                  <li>16:00 – 18:00</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
              <h3 className=" text-lg text-center font-semibold bg-[#0149a6] text-white px-2">
                Standard Program (A1)
              </h3>

              <span className="font-medium">Monday to Friday</span>
              <div className="flex gap-2 font-medium">
                <span>Time : </span>
                <ul className="text-[#0149a6]">
                  <li>19:00 – 21:00</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 justify-center bg-[#0149a6] py-4  w-fit items-center">
        <h2 className="text-[#fff] text-3xl font-bold">ONLINE COURSE</h2>
      
        <div className="flex flex-col items-center gap-4">
          <h3 className=" text-lg  w-fit  font-semibold text-center text-[#0149a6] bg-white px-2">
          Ongoing registration (until April 30, 2024)
          </h3>
          <div className="">
           
            <div className="flex flex-col gap-1 bg-[#fff]  py-6 px-14  ">
              <h3 className=" text-lg font-semibold text-center bg-[#0149a6] text-white px-2">
                Intensive Program (A1)
              </h3>

              <div className="flex gap-2 font-medium">
                
                <ul className="text-[#0149a6] py-4">
                  {dayNames.map((ele,index)=>(
                    <li className={`flex gap-8 items-center justify-between  py-2 px-1 ${index === currentDayIndex ? 'bg-[#0149a6] text-white ' : ''}`} key={index}><span>{ele}</span><span>20:00 – 23:00</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
