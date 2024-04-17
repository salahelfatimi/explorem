import { Clock1, MapPinIcon, PhoneCall, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Youtube,
} from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-[#22242B]">
      <div className=" py-20 container gap-8 flex flex-col lg:flex-row items-center justify-between">
        <div className=" flex flex-col   gap-4">
          <span className="flex flex-col lg:flex-row text-center items-center hover:underline decoration-4 underline-offset-4 hover:duration-700 transition  decoration-[#0149A6] gap-2">
            <MapPinIcon size={30} className=" stroke-[#0149A6]" />
            <a
              href="https://maps.app.goo.gl/djcimpjqdNjy9pcZ6"
              target="_blank"
              className=" font-bold text-white"
            >
              6 Rue des Vieux Marrakchis, Bureau Nr 7 Gueliz, Marrakech, Morocco
            </a>
          </span>
          <span className="flex flex-col lg:flex-row text-center items-center hover:underline decoration-4 underline-offset-4 hover:duration-700 transition  decoration-[#0149A6] gap-2">
            <PhoneCallIcon size={30} className=" stroke-[#0149A6]" />
            <a href="tel:+212809-891297" className=" font-bold text-white">
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
              href="https://web.facebook.com/ExploremSARL"
              target="_blank"
              className="bg-[#0149a6]   p-2 rounded-full"
            >
              <Facebook size={25} className=" stroke-white" />
            </a>
            <a
              href="https://www.youtube.com/@Explorem-mw5rq"
              target="_blank"
              className="bg-red-500   p-2 rounded-full"
            >
              <Youtube size={25} className=" stroke-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/gracila-vacaro-ucag-b14136127/"
              target="_blank"
              className="bg-[#0077b5]   p-2 rounded-full"
            >
              <Linkedin size={25} className=" stroke-white" />
            </a>
            <a
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
              href="https://www.instagram.com/explorem21/"
              target="_blank"
              className="bg-[#f7543e]   p-2 rounded-full"
            >
              <Instagram size={25} className=" stroke-white" />
            </a>
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <span className=" font-bold text-xl text-center lg:text-left text-white">
            Newsletter
          </span>
          <input
            type="text"
            name="Newsletter"
            placeholder="Your Email"
            className=" placeholder-white bg-[#22242B] border-[#0149A6] border-2 py-2 px-4 rounded-full "
            id="Newsletter"
          />
          <button className="bg-[#0149A6] rounded-full py-2 px-4 text-white font-semibold uppercase">
            subscribe
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-[#0149A6] py-4">
        <span className=" flex gap-4 flex-col lg:flex-row items-center font-bold capitalize text-center md:text-start text-white ">
          Copyright &copy; {new Date().getFullYear()} . All rights are reserved
          by{" "}
          <span className="bg-white text-[#0149A6] w-fit p-2 uppercase font-bold">
            explorem
          </span>
        </span>
      </div>
    </footer>
  );
}
