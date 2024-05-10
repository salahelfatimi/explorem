import { images } from "@/app/data/logoScroll";
import Image from "next/image";
export default  function FetchLogoScroll() {
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4  p-2" key={index}>
          <Image
            title={src.title}
            quality={40}
            width={800}
            height={550}
            src={`/image/partnersLogo/${src.image}`}
            className="max-w-none   h-24 w-auto   "
            alt={src.title}
          />
        </div>
      ))}
    </>
  );
}
