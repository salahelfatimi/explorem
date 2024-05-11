"use client";

import { useState } from "react";
import ChangeLungage from "./changeLungage/changeLungage";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/navigation";
import { PanelLeftClose, PanelRightClose } from "lucide-react";



export default function Navbar({ locale }) {
  const pathname = usePathname();
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(true);
  const Nav = [
    { id: 1, title: "home", href: `/` },
    { id: 2, title: "employers", href: "/employers" },
    { id: 3, title: "candidates", href: "/candidates" },
    { id: 5, title: "testimonial", href: "/testimonial" },
    { id: 6, title: "blog", href: "/blogs" },
    { id: 7, title: "contact", href: "/contact" },
    { id: 8, title: "about", href: "/about" },
  
  ];
 
  return (
    <nav>
      
      {/* nav pc */}
      <div className=" bg-white py-4    fixed   right-0 left-0 lg:block z-50 ">
        <div className="   flex justify-between items-center container px-4">
          <h1>
            <Image
              width={388}
              height={244}
              src={`/image/logo/Explorem_logo.png`}
              className=" w-28 "
              alt="Explorem SARL"
            />
          </h1>
          <div className="lg:block hidden">
                    <ul className=" flex items-center   gap-4">
                        {
                            Nav.map((ele,index)=>(
                              
                                <li key={index} className={` capitalize text-lg  font-semibold hover:text-[#0149A6] duration-500 hover:border-[#0149A6]  border-b-2 ${pathname == ele.href ? 'border-[#0149A6]  border-b-2 text-[#0149A6]' : 'text-black border-[#fff]'}`}>
                                  <Link href={ele.href}>{t(ele.title)}</Link>
                                </li>
                            ))
                        }
                        <li> <ChangeLungage open={true} locale={locale} setOpen={setOpen} /></li>
                    </ul>
                    
            </div>
            <button className="block lg:hidden "  onClick={() => {setOpen(!open);}}>{open?<PanelLeftClose size={35} className=" text-[#0149A6]  " />: <PanelRightClose size={35} className=" text-red-500  "/>}</button>

        </div>
      </div>
       {/* nav phone */}
      <div className=" block fixed bg-white right-0 left-0  lg:hidden z-40">
            <div className="  container  p-4 flex flex-col    ">
            <div
                className={`fixed pt-20 lg:pt-28  inset-0 flex flex-col gap-10 items-center justify-center bg-white  duration-700 transition  ${
                open == false ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className=" flex flex-col items-center gap-10">
                        {
                            Nav.map((ele,index)=>(
                              <button onClick={() => {setOpen(!open);}}key={index}>
                                <li  className={` capitalize text-lg  font-semibold hover:text-[#0149A6] duration-500 hover:border-[#0149A6]  border-b-2 ${pathname == ele.href ? 'border-[#0149A6]  border-b-2 text-[#0149A6]' : 'text-black border-[#fff]'}`}>
                                  <Link href={ele.href}>{t(ele.title)}</Link>
                                </li>
                              </button>
                            ))
                        }
                        <li> <ChangeLungage open={true} locale={locale} setOpen={setOpen} /></li>
                    </ul>
            </div>
            </div>
        </div>
       
     
     
    </nav>
  );
}
