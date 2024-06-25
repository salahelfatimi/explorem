import { images } from "@/app/data/slideImage";
import Image from "next/image";
export default function FetchImageScroll() {
  
  return (
    <>
      {images.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <Image
            title="Success Stories: explorem School Students working and Study in Germany"
            blurDataURL={`${src.base64}`}
            placeholder="blur"
            width={src.width}
            height={src.height}
            src={`/image/slide/${src.imageUrl}`}
            className="max-w-none min-w-80   rounded-sm h-52 w-auto"
            alt="Success Stories: explorem School Students working and Study in Germany"
          />
        </div>
      ))}
    </>
  );
}
