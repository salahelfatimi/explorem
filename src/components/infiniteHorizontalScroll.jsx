"use client";

import Image from "next/image";

const InfiniteHorizontalScroll = ({ images }) => {
  return (
    <div className="flex overflow-hidden space-x-4   ">
      <div className="flex space-x-4 animate-loop-scroll">
        {images?.map((ele, index) => (
          <div key={index}>
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
      <div className="flex space-x-4 animate-loop-scroll" aria-hidden="true">
        {images?.map((ele, index) => (
          <div key={index}>
            <Image
              blurDataURL={ele.src}
              placeholder="blur"
              loading="lazy"
              quality={100}
              width={800}
              height={550}
              src={ele.src}
              className="max-w-none rounded-sm h-52 object-cover w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
