"use client"


import {  useState } from "react";
import { Menu, Moon, Phone, X } from "react-feather";
import ChangeLungage from "./changeLungage/changeLungage";
import Image from "next/image";
import {  useTranslations } from "next-intl";
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

const locales = ['en', 'de','ar'] ;
const {Link, usePathname} = createSharedPathnamesNavigation({locales});



export default function Navbar({locale}) {
  
  const pathname=usePathname()
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(true);
  const Nav = [
    { id: 1, title: "home", href: `/` },
    { id: 2, title: "employers", href: "/employers" },
    { id: 3, title: "candidates", href: "/candidates" },
    { id: 4, title: "blog", href: "/blogs" },
    { id: 5, title: "contact", href: "/contact" },
    { id: 6, title: "about", href: "/about" },

  ];

  return (
    <nav>
    
      {/* nav pc */}
      <div className=" hidden fixed  bg-white right-0 left-0 lg:block z-50 ">
        <div className="  container  px-8  py-4 flex  flex-row justify-between items-center ">
          <div>
            <Image
              width={388}
              height={244}
              src={`/image/logo/Explorem_logo.png`}
              className=" w-28 "
              alt="Explorem"
            />
          </div>
          <div className=" flex gap-6 items-center ">
            {Nav.map((ele, index) => (
              <div key={index}>
                <Link
                  href={ele.href}
                 
                  className={`${
                    pathname  == ele.href
                      ? "border-b-2 border-[#0149A6]  text-[#0149A6]"
                      : ""
                  } capitalize text-lg font-semibold`}
                >
                  {t(ele.title)}
                </Link>
              </div>
            ))}
            <a
              className="flex items-center  gap-2 border-[#0149A6] border-2 py-2 px-2 text-white rounded-full text-sm "
              href="tel:+212809-891297"
            >
              <Phone size={20} className=" stroke-[#0149A6]" />
              <span className="  text-[#0149A6] text-medium font-semibold ">
                {" "}
                (+212) 8 09 89 12 97
              </span>
            </a>
            <ChangeLungage open={true} locale={locale} setOpen={setOpen} />
            {/* <button className="bg-[#0149A6] rounded-full p-1">
              <Moon size={25} className="  stroke-white   " />
            </button> */}
          </div>
        </div>
      </div>

      {/* nav phone */}
      <div className=" block fixed bg-white right-0 left-0 lg:hidden z-50">
        <div className="  container  p-4 flex flex-col    ">
          <div className=" flex justify-between items-center">
            <Image
              width={388}
              height={244}
              src={`/image/logo/Explorem_logo.png`}
              className=" w-24 "
              alt="Explorem"
            />
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
              {Nav.map((ele, index) => (
                <button
                  onClick={() => {
                    setOpen(!open);
                  }}
                  key={index}
                >
                  <Link
                    href={ele.href}
                   
                    className={`${
                      pathname == ele.href
                        ? "border-b-2 border-[#0149A6]  text-[#0149A6]"
                        : ""
                    } capitalize text-lg font-semibold`}
                  >
                    {t(ele.title)}
                  </Link>
                </button>
              ))}
              <a
                className="flex items-center  gap-2 border-[#0149A6] border-2 py-2 px-2 text-white rounded-full text-sm "
                href="tel:+212809-891297"
              >
                <Phone size={20} className=" stroke-[#0149A6]" />
                <span className="  text-[#0149A6] text-medium font-semibold ">
                  {" "}
                  (+212) 8 09 89 12 97
                </span>
              </a>
              <ChangeLungage open={true} locale={locale} setOpen={setOpen} />
              {/* <button className="bg-[#0149A6] rounded-full p-1">
                <Moon size={25} className="  stroke-white   " />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
