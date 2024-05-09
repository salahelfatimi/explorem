
import PaginationTestimonial from "./components/paginationTestimonial";
import TestimonialComments from "@/components/testimonialComments";
import { useTranslations } from "next-intl";
export const metadata = {
  title: "Testimonial",
  
};

export default  function Testimonial({ params: { locale } }) {
  const t =  useTranslations("Testimonial");

 

  const testimonial = [
    {
      
        "image": "explorem",
        "author": "Explorem",
        "fileUrl":"Explorem.mp4"
        
    },
    
    {
     
      "image": "man",
      "author": "Glucksburg",
      "fileUrl":"Glucksburg.png"
     
    }
    ,
    {
     
        "image": "man",
        "author": "Marburg",
        "fileUrl":"Marburg.pdf"
        
    }
    ,
    {
     
      "image": "women",
      "author": "ProSo",
      "fileUrl":"ProSo.png"
     
    },
    {
      
      "image": "man",
      "author": "Schirmergut",
      "fileUrl":"Schirmergut.pdf"
      
    },
    {
    
      "image": "women",
      "author": "Hajar Toumzine",
      "fileUrl":"HajarToumzine.pdf"
     
    },
    {
      
      "image": "women",
      "author": "Nada Fajri",
      "fileUrl":"NadaFajri.pdf"
     
    },
    {
     
      "image": "man",
      "author": "Ayoub Benchrifa",
      "fileUrl":"AyoubBenchrifa.mp4"
     
    },
    {
      
      "image": "man",
      "author": "Jamal Bamou",
      "fileUrl":"JamalBamou.mp4"
      
    }
    
  
  ];

  return (
    <div className="flex flex-col  container gap-6 py-12  ">
      <div className="flex  flex-col gap-4 items-center">
        <span className=" py-1 px-4 rounded-full text-white font-bold shadow-xl bg-[#0149a6]">
          {t('clientStories')}
        </span>
        <h1 className=" font-serif font-bold text-4xl "> {t('title')}</h1>
        <p className=" text-[#9da4b2]  text-center  text-lg ">
        {t('description')}
        </p>
      </div>
      <div className=" flex flex-col  gap-4 justify-center">
        {testimonial?.length > 0 ? (
          <div className=" gap-10 columns-1 container  md:columns-2 lg:columns-3    space-y-6 items-center ">
            {testimonial?.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className={`even:bg-white  break-inside-avoid-column odd:bg-[#0149a6] odd:text-white border-[#ffff]   rounded  shadow-lg  `}
                >
                  <TestimonialComments testimonial={testimonial} locale={locale} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-6 h-full">
            <p className="font-medium text-lgtext-center text-[#9DA4B2]">
              No testimonial provided
            </p>
          </div>
        )}

        
      </div>
    </div>
  );
}
