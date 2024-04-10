import Image from "next/image";
import AddImageScrollHandler from "../components/form/addImageScroll";
import { X } from "react-feather";
import { fetchImageScroll } from "@/app/api/data/ImageScroll/actions";
import DeleteImageScroll from "../components/deleteImageScroll";
export default async function ImageScroll() {
  const images = await fetchImageScroll();

  return (
    <div className="flex flex-col gap-6">
    <h2 className=" text-3xl font-bold text-[#0149a6] ">Image Scroll</h2>
      <div className="   columns-1 md:columns-2 lg:columns-3 xl:columns-4 space-y-4">
       <div >
        <AddImageScrollHandler imagesLength={images.length} />
       </div>
       
        {images.map((url, index) => (
          <div key={index} className="break-inside-avoid-column ">
            <div className="relative">
              <Image
                quality={40}
                width={800}
                height={550}
                src={url.imageUrl}
                className=" rounded-lg "
                alt="explorem"
              />
              
              <DeleteImageScroll idImage={url.id} keyImage={url.imageKey}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
