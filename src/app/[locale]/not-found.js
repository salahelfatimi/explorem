import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-96  bg-[#F5F5F5]">
      
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-black">
          Look like this page doesn&apos;t exist
        </p>
        <Link
          className=" underline underline-offset-4  font-bold text-xl text-blue-600 flex  duration-700 items-center gap-2"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </>
  );
}
