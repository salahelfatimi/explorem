"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const path=usePathname()
  return (
    
    <div className="  flex flex-col py-6 justify-between bg-white h-full ">
      <div className="flex flex-col  items-center  gap-4">
        <div>
          <h1 className=" font-bold text-[#0149a6] text-xl">Explorem Admin</h1>
        </div>
        <Link href="/auth/dashboard"  className={` ${path=="/auth/dashboard"?'bg-[#0149a6] text-white ':'text-[#0149a6]'} text-lg text-center font-semibold w-full py-4`}>All Blog</Link>
        <Link href="/auth/dashboard/addBlog"  className={` ${path=="/auth/dashboard/addBlog"?'bg-[#0149a6] text-white ':'text-[#0149a6]'} text-lg text-center font-semibold w-full py-4`}>Add Blog</Link>
        <Link href={"#"} className=" text-[#0149a6] text-center  text-lg font-semibold w-full py-4">Cumment</Link>
      </div>
      <div className="flex text-center ">
        <Link href={"/"} className=" bg-red-600 text-white font-bold w-full py-3  ">logOut</Link>
      </div>
    </div>
  );
}
