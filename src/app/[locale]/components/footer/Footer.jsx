"use client";
import { Clock1, MapPinIcon, PhoneCall, PhoneCallIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "react-feather";
import toast, { Toaster } from "react-hot-toast";

export default function Footer({locale}) {
  const t = useTranslations("Footer");
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const [email, setEmail] = useState("");
 
  const newsLetter = async (e) => {
    e.preventDefault();

    setValidation(true);

    if (email) {
      setIsLoading(true);
      const loadingToast = toast.loading("Subscribing ...");
      try {
        const response = await fetch("/api/newsLetter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        if (response.status === 200) {
          setEmail("");
          setValidation(false);
          setIsLoading(false);
          toast.dismiss(loadingToast);
          toast.success(" Subscribe Newsletter!");
        }
      } catch {
        toast.dismiss(loadingToast);
        setIsLoading(false);
        toast.error("Failed to SUBSCRIBE Newsletter.");
      }
    }
  };

  return (
    <footer className="bg-[#22242B]">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className=" py-20 container gap-8 flex flex-col lg:flex-row items-center justify-between">
        <div className=" flex flex-col   gap-4">
          <span className="flex flex-col lg:flex-row text-center items-center hover:underline decoration-4 underline-offset-4 hover:duration-700 transition  decoration-[#0149A6] gap-2">
            <MapPinIcon size={30} className=" stroke-[#0149A6]" />
            <a
              title="Location of explorem Center"
              href="https://maps.app.goo.gl/djcimpjqdNjy9pcZ6"
              target="_blank"
              className=" font-bold text-white"
            >
              6 Rue des Vieux Marrakchis, Bureau Nr 7 Gueliz, Marrakech, Morocco
            </a>
          </span>
          <span className="flex flex-col lg:flex-row text-center items-center hover:underline decoration-4 underline-offset-4 hover:duration-700 transition  decoration-[#0149A6] gap-2">
            <PhoneCallIcon size={30} className=" stroke-[#0149A6]" />
            <a title="Contact Phone Number for explorem Center" href="tel:+212809-891297" className=" font-bold text-white">
              (+212) 8 09 89 12 97
            </a>
          </span>
          <span className="flex  flex-col lg:flex-row text-center items-center  gap-2">
            <Clock1 size={30} className=" stroke-[#0149A6]" />
            <p className=" font-bold text-white ">
              Monday - Friday: 9 AM - 6 PM{" "}
            </p>
          </span>
          <span className="flex gap-6 justify-between lg:justify-normal">
            <a
            title=" Facebook Profile for explorem"
              href="https://web.facebook.com/ExploremSARL"
              target="_blank"
              className="bg-[#0149a6]   p-2 rounded-full"
            >
              <Facebook size={25} className=" stroke-white" />
            </a>
            <a
              title="Explorem Official YouTube Channel"
              href="https://www.youtube.com/@Explorem-mw5rq"
              target="_blank"
              className="bg-red-500   p-2 rounded-full"
            >
              <Youtube size={25} className=" stroke-white" />
            </a>
            <a
              title=" LinkedIn Profile for explorem"
              href="https://www.linkedin.com/in/gracila-vacaro-ucag-b14136127/"
              target="_blank"
              className="bg-[#0077b5]   p-2 rounded-full"
            >
              <Linkedin size={25} className=" stroke-white" />
            </a>
            <a
              title=" tiktok Profile for explorem"
              href="https://www.tiktok.com/@explorem3?_t=8kje1qeF88j&_r=1"
              target="_blank"
              className="bg-black   p-2 rounded-full"
            >
              <Image
                width={500}
                height={500}
                src="/image/index/icon/tiktok.svg"
                className=" w-6"
                alt="explorem"
              />
            </a>
            <a
              title=" Instagram Profile for explorem"
              href="https://www.instagram.com/explorem21/"
              target="_blank"
              className="bg-[#f7543e]   p-2 rounded-full"
            >
              <Instagram size={25} className=" stroke-white" />
            </a>
          </span>
        </div>
        <form
          onSubmit={newsLetter}
          className="flex flex-col gap-4 w-full lg:w-auto"
        >
          <h3 className=" font-bold text-xl text-center lg:text-left text-white">
            {t("newsLetter")}
          </h3>
          <label className=" space-y-2 flex flex-col ">
            <input
              type="email"
              name="Newsletter"
              value={email}
              placeholder={t("email")}
              onChange={(e) => setEmail(e.target.value)}
              className={`${
                !email && validation && "border-red-500 "
              }  placeholder-white bg-[#22242B] border-[#0149A6]  text-white border-2 py-2 px-4 rounded-full `}
              id="Newsletter"
            />
            <p className="text-red-500 text-center text-xs font-medium">
              {!email && validation && "Please enter your Email"}
            </p>
          </label>
          <button
          title="SUBSCRIBE in Newsletter"
            disabled={isLoading}
            type="submit"
            className="px-12 py-1 w-full rounded-full font-bold border-4 duration-700 hover:bg-[#22242B] hover:text-[#fff] border-[#0149a6] bg-[#0149a6] text-white"
          >
            {isLoading ? "sending..." : t("subscribe")}
          </button>
        </form>
      </div>
      <div className=" flex items-center justify-center bg-[#0149A6] py-4">
        <span className={` flex gap-4 flex-col ${locale==='ar'?'lg:flex-row-reverse':'lg:flex-row'}  items-center font-bold capitalize text-center md:text-start text-white `}>
          {t("Copyright1")} &copy; {new Date().getFullYear()} .{t("Copyright2")}
          <span className="bg-white text-[#0149A6] w-fit p-2 uppercase font-bold">
            explorem
          </span>
        </span>
      </div>
    </footer>
  );
}
