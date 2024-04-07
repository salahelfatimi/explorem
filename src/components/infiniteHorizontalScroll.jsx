"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default  function EmblaCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row gap-6">
        {images?.map((ele, index) => (
          <div className=" space-x-4" key={index}>
            <Image
              blurDataURL={ele.src}
              placeholder="blur"
              loading="lazy"
              quality={100}
              width={800}
              height={550}
              src={ele.src}
              className="max-w-none rounded-sm h-52 w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
