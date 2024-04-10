"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EmblaCarousel({ children }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className=" overflow-hidden" ref={emblaRef}>
      <div className="flex flex-row gap-6 pl-6">
      {children}
      </div>
    </div>
  );
}
