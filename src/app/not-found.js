import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-[#F5F5F5]">
        <Image
          width={1000}
          height={1000}
          src={`/image/logo/Explorem_logo.png`}
          className=" w-44 "
          alt="Explorem"
        />
        <p className=" font-bold text-2xl flex items-center gap-2 flex-col text-center justify-center text-[#0248a9]">
          Could not find the requested resource 
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
