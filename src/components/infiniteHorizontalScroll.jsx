"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default  function EmblaCarousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row gap-6 pl-6">
        {images?.map((src, index) => (
          <div className=" space-x-4 bg-white p-2" key={index}>
            <Image
              
              quality={40}
              width={800}
              height={550}
              src={src}
              className="max-w-none   rounded-sm h-52 w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
