"use client";
import { locales } from "@/config";
import { Link, usePathname } from "@/navigation";
import Image from "next/image";

import { useState } from "react";
import { ChevronDown } from "react-feather";


export default function ChangeLungage({ setOpen, open, locale }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const pathname = usePathname();
  
  return (
    <>
      <div className="relative inline-block text-left">
        <button
          className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 "
          onClick={() => {
            setShowLanguage(!showLanguage);
          }}
        >
          <Image
            width={500}
            height={300}
            src={`/image/flag/${locale}.gif`}
            className="h-6 w-8"
            alt="explorem"
          />
          <ChevronDown size={20}  className="-mr-1 ml-2 h-5 w-5" />
        </button>
        {showLanguage && (
          <div className=" absolute bottom-12 lg:bottom-auto right-0  mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className=" grid grid-cols-1 gap-2" role="none">
              {locales.map((language, index) => {
                return (
                  <Link
                    href={pathname}
                    locale={language}
                    className={`${
                      locale === language
                        ? "bg-[#0149a6] text-white"
                        : "text-gray-700"
                    }  px-4 py-2 text-sm gap-2 text-left items-center inline-flex  first:rounded-t-md last:rounded-b-md hover:bg-[#0149a6] hover:text-white `}
                    key={index}
                    onClick={() => {
                     
                      setShowLanguage(!showLanguage);
                      setOpen(!open);
                      
                    }}
                  >
                    <Image
                      width={500}
                      height={500}
                      src={`/image/flag/${language}.gif`}
                      className="h-7 w-12"
                      alt="explorem"
                    />
                    <span className=" capitalize font-semibold ">
                      {language === "en"
                        ? "English"
                        : language === "ar"
                        ? "Arabic"
                        : "Germany"}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
