import { images } from "@/app/data/slideImage";
import Image from "next/image";
export default function FetchImageScroll() {
  
  return (
    <>
      {images.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <Image
            title="Explorem SARL"
            blurDataURL={`${src.base64}`}
            placeholder="blur"
            quality={100}
            width={src.width}
            height={src.height}
            src={`/image/slide/${src.imageUrl}`}
            className="max-w-none min-w-80   rounded-sm h-52 w-auto"
            alt="Explorem SARL"
          />
        </div>
      ))}
    </>
  );
}
