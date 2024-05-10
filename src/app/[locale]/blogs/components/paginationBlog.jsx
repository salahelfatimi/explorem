"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default  function PaginationBlog({ take }) {
  const router = useRouter(); 
  const t =  useTranslations("Blog");
  const handleNextPage = () => {
    router.push(`?take=${take + 2}`, { scroll: false });
  };
  return (
    <>
      <button
        className=" bg-[#0149a6] w-fit py-2 rounded-3xl px-6  font-bold text-white"
        onClick={handleNextPage}
      >
        {" "}
        {t('seeMore')}
      </button>
    </>
  );
}
