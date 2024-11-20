
import { testimonial } from "@/app/data/testimonial";
import PaginationTestimonial from "./components/paginationTestimonial";
import TestimonialComments from "@/components/testimonialComments";
import { useTranslations } from "next-intl";
export async function generateMetadata() {
  
  return {
  title: "Testimonials | Success Stories",
  description: "Read testimonials and success stories from clients and candidates who benefited from Explorem SARL's recruitment, training, and career development services.",
  keywords: ['Explorem SARL, testimonials, client reviews, success stories, recruitment services, training services, career development, candidate experiences, professional success, HR solutions'],

  alternates: {
    canonical: "/en/testimonial",
    languages: {
      de: "/de/testimonial",
      ar: "/ar/testimonial",
    },
    openGraph: {
      title: 'Explorem SARL',
      description: 'We Make A Difference, We Make It Happen. ',
      url: ['https://explorem.net/en/testimonial','https://explorem.net/ar/testimonial','https://explorem.net/de/testimonial'],
      siteName: " Home page explorem",
      images: [
        {
          url: `/image/index/opengraph-image.jpg`,
          secureUrl: `/image/index/blogExplorem/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: `We Make A Difference, We Make It Happen.  `,
        }
      ],
      type: "website",
     
    },
    
  },
  };
};
export default  function Testimonial({ params: { locale },searchParams  }) {
  const take = ( searchParams.take) ? parseInt(searchParams.take) : 4;
  const testimonialSlice = take ? testimonial.slice(0, take) : testimonial;
  const t =  useTranslations("Testimonial");
  return (
    <div className="flex flex-col  container gap-6 py-12 pt-32  ">
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
          <div className=" gap-10 columns-1 container  lg:columns-2     space-y-6 items-center ">
            {testimonialSlice?.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className={`even:bg-white  break-inside-avoid-column odd:bg-[#0149a6] odd:text-white border-[#ffff]   rounded  shadow-lg  `}
                >
                  <TestimonialComments testimonial={testimonial}  locale={locale} />
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
        <div className={`${take > testimonial?.length ? "hidden" : "block"} flex justify-center`}>
          <PaginationTestimonial take={take} />
        </div>
        
      </div>
    </div>
  );
}
