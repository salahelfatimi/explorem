import { fetchImageScroll } from "@/app/api/data/ImageScroll/actions";
import Image from "next/image";
export default async function FetchImageScroll() {
  const images = await fetchImageScroll();
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <Image
            blurDataURL={`/_next/image?url=${src.imageUrl}&w=16&q=1`}
            placeholder="blur"
            quality={100}
            width={800}
            height={550}
            src={src.imageUrl}
            className="max-w-none   rounded-sm h-52 w-auto"
            alt="explorem"
          />
        </div>
      ))}
    </>
  );
}
