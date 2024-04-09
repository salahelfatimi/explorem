"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogOut, Menu, X } from "react-feather";

export default function SideBar() {
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const sideBar = [
    { id: 1, title: "All Blog", href: `/admin/dashboard` },
    { id: 2, title: "Add Blog", href: "/admin/dashboard/addBlog" },
    { id: 3, title: "Testimonial", href: "/admin/dashboard/testimonial"  },
  ];
  return (
    <>
      <aside className="hidden lg:block fixed top-0 left-0 z-40 w-64 h-screen ">
        <div className="  flex flex-col py-6 justify-between bg-white rounded-r-3xl h-full ">
          <div className="flex flex-col  items-center  gap-4">
            <div>
              <h1 className=" font-bold text-[#0149a6] text-xl">
                Explorem Admin
              </h1>
            </div>
            {sideBar.map((ele, index) => (
              <Link
                key={index}
                href={ele.href}
                className={` ${
                  path == ele.href ? " bg-[#0149A6]  text-[#fff]" : "hover:bg-[#0149A6] hover:text-white"
                } text-lg duration-500 text-center font-semibold w-full py-4 rounded-r-3xl mr-4`}
              >
                {ele.title}
              </Link>
            ))}
          </div>
          <div className="flex text-center ">
            <button
              onClick={()=>signOut()}
              className="flex items-center gap-2 justify-center mx-6 rounded-full bg-red-600 hover:bg-white hover:text-red-600 border-2 border-white duration-500 hover:border-red-600 text-white font-bold w-full py-3  "
            >
              
              logOut
              <LogOut className=" w-5 stroke-2"/>
            </button>
          </div>
        </div>
      </aside>

      {/* NAV PHONE */}
      <div>
        <div className=" block fixed bg-white right-0 left-0 lg:hidden z-50">
          <div className="  container  py-8 flex flex-col    ">
            <div className=" flex justify-between items-center">
              <h1 className=" font-bold text-[#0149a6] text-xl">
                Explorem Admin
              </h1>
              <Menu size={30} onClick={() => setOpen(!open)} />
            </div>
            <div
              className={`fixed   inset-0 flex items-center justify-center bg-white  duration-700 transition  ${
                open == false ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                onClick={() => {
                  setOpen(true);
                }}
                className="absolute top-4 right-4 text-red-600 "
              >
                <X size={40} />
              </button>
              <div className=" flex gap-8  items-center flex-col">
                {sideBar.map((ele, index) => (
                  <Link
                    onClick={() => {
                      setOpen(!open);
                    }}
                    key={index}
                    href={ele.href}
                    className={` ${
                      path == ele.href
                        ? "border-b-2 border-[#0149A6]  text-[#0149A6]"
                        : ""
                    } text-lg text-center font-bold w-full py-4`}
                  >
                    {ele.title}
                  </Link>
                ))}
                 <div className="flex w-full text-center ">
                <button
                 onClick={()=>signOut()}
                  className=" bg-red-600 rounded text-white font-bold w-full py-3  "
                >
                  logOut
                </button>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
