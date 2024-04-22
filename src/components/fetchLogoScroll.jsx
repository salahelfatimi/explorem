import { fetchImageScroll } from "@/app/api/data/ImageScroll/actions";
import Image from "next/image";
export default async function FetchLogoScroll() {
    const images = [

      "Barmer.png",
      "Brera.png",
      "Little.png",
      "MarburgConsulting.png",
      "mfpd.png",
      "Barmer.png",
      "Brera.png",
      "Little.png",
      "MarburgConsulting.png",
      "mfpd.png",
    ]
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4  p-2" key={index}>
          <Image
             title={src}
            quality={40}
            width={800}
            height={550}
            src={`/image/partnersLogo/${src}`}
            className="max-w-none   h-24 w-auto   "
            alt={src}
          />
        </div>
      ))}
    </>
  );
}
