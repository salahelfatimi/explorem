"use client";

import { useRouter } from "next/navigation";

export default async function PaginationBlog({ take }) {
  const router = useRouter(); 

  const handleNextPage = () => {
    router.push(`?take=${take + 6}`, { scroll: false });
  };
  return (
    <>
      <button
        className=" bg-[#0149a6] w-fit py-2 rounded-3xl px-6  font-bold text-white"
        onClick={handleNextPage}
      >
        {" "}
        See More
      </button>
    </>
  );
}
