import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ blog }) => {
  const { id, title, imageUrl, description, category } = blog || {};
  return (
    <div className="bg-gray-900 p-4 border-2 border-green-200 mx-2 my-2 rounded-lg shadow-md">
      <Image
        src={imageUrl}
        loading="lazy"
        width="600"
        height="400"
        quality={100}
        alt="explorem"
      />

      <Link href={`/blogs/${id}`}>
        <h2 className="text-xl text-white font-semibold mb-2">{title}</h2>
      </Link>

      <p className="mb-2 max-w-md text-green-500 inline-block border-2 p-2 border-green-300 rounded-full">
        {category}
      </p>
      <p className="text-gray-300">{description.slice(0, 100)}...</p>
    </div>
  );
};

export default BlogItem;
