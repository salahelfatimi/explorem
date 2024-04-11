"use client";

import { useRouter } from "next/navigation";

export default async function PaginationTestimonial({ searchParams }) {
  const router = useRouter();
  const take = parseInt(searchParams.take) || 6; // Set default value to 6 if take is undefined or null

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
