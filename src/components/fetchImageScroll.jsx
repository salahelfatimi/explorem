import { fetchImageScroll } from "@/app/api/data/ImageScroll/actions";
import GetBase64Image from "@/app/base64/getBase64ImageSingle";

export default async function FetchImageScroll() {
  const images = await fetchImageScroll();
  return (
    <>
      {images?.map((src, index) => (
        <div className=" space-x-4 bg-white p-2" key={index}>
          <GetBase64Image
            imageUrl={src.imageUrl}
            alt={src.title}
            className={"max-w-none   rounded-sm h-52 w-auto"}
          />
        </div>
      ))}
    </>
  );
}
