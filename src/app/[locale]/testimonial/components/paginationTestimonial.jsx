"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default  function PaginationTestimonial({ take }) {
  const router = useRouter();
  const t =  useTranslations("Testimonial");

  const handleNextPage = () => {
    router.push(`?take=${take + 2}`, { scroll: false });
  };
  return (
    <>
      <button
      title="see more testimonial Explorem"
        className=" bg-[#0149a6] w-fit py-2 rounded-3xl px-6  font-bold text-white"
        onClick={handleNextPage}
      >
        {" "}
        {t('seeMore')}
      </button>
    </>
  );
}
