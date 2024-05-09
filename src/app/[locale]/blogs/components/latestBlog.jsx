
// import GetBase64Image from "@/app/base64/getBase64ImageSingle";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Clock } from "react-feather";
import { Link } from "@/navigation";

export default async function LatestBlog() {
  const t = await getTranslations("Blog");
  const latestBlog ={
    "base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nAH4AAf/AH5tZHxtaJaRjMjIypyXmBoOFF9cWruvn5yBcHaAqgCGfHd4amaNh4THx8eQjI0YAAs1MDeAaldRY5Y/aLAAwtLSoZyhfXd5paenkZKTYVE7n0IXk05GEXDbcovCAOj+/crQ3IJ+hbHEwYSLjHhWQZk5GmE1MXBpeMqYcgDq//+1vcuKh43B3duarrBPOjdONSw0IiJ/VTuyf1wAnqeppKWpioqLh4eIhYCIY0Q3ZTggTTQuX1RVl3ZjAG9zcIeLiqOko6Cgo7q0upeUmYZ8eHFXSHZvbYZ0bQBicG11f3ycnZq7ube5wMKbqrRxfouNl5qrtLiam5mAI3sS3MyBLAAAAABJRU5ErkJggg==",
    "width": "2448",
    "height": "3264",
    "Org": "blog9.png",
    "Url": "blog9.png",
    "title":"EXPLOREM Launched its Scholarship Program ",
    "description": "Explorem proudly launched its own scholarship program to qualified general nurse\r\ngraduates whose dream to live and work in Germany. The program includes FREE\r\nGerman course from A1 to B2 level, required external exams, and administrative\r\nservices related to relocation.\r\nThe scholarship program is one of the initiatives the managing directors, Mr.\r\nAbdessamad and Dr. Gracila, has been started to assist and support qualified\r\ncandidates who are financially challenged to acquire language qualifications and\r\npay relocation fees.\r\nThe recipients of this program are thoroughly screened. The team evaluated\r\nscholars’ school credentials, and school, clinical and work attitude and\r\nperformances to ensure their above average qualification.\r\nThe German courses for scholars are available onsite for those who are living in\r\nMarrakech and online for those living in other cities. With the competent German\r\nteachers Explorem has, they monitor candidates’ course performance, to maintain\r\nthe standard they set to all active candidates registered in their programs.\r\nExplorem team believes that this initiative will MAKE A DIFFERENCE in the lives of\r\ncandidates in achieving their Germany dreams, and Explorem will MAKE IT\r\nHAPPEN.\r\nFor more information about all the programs Explorem is offering, you may call\r\nyou may call +212 668676518/ +212 650656897/ +212 608789360 (WhatsApp\r\navailable) or +212 809891297 (Landline)\r\nExplorem office/ formation center is located at Imm 6 Nr 7 Rue Vieux Marrakchis\r\nGueliz, Marrakech; open from Monday to Friday from 10h00 to 18h00.",
    "author": "Explorem",
    "createAt":"2024-05-04"
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="container w-full gap-4 lg:items-center  flex flex-col lg:flex-row-reverse ">
          <div className="lg:w-1/2 object-cover h-auto  rounded  shadow-2xl  ">
            <Image
              title={latestBlog.title}
              blurDataURL={latestBlog.base64}
              placeholder="blur"
              quality={100}
              width={latestBlog.width}
              height={latestBlog.height}
              src= {`/image/blogExplorem/${latestBlog.Url}`}
              className="object-cover  h-96  rounded-t "
              alt={latestBlog.title}
            />
             {/* <GetBase64Image imageUrl={Url} className={'object-cover  h-auto  rounded-t '} alt={title}/> */}
             
          </div>

          <div className=" lg:w-1/2 flex gap-4  lg:gap-8 flex-col">
            <span className="text-[#fff] font-bold  bg-[#134ba1] w-fit py-1 px-3">
              {t("new")}
            </span>

            <h2 className=" font-bold text-xl lg:text-4xl text-black ">
              {latestBlog.title}
            </h2>
            <p className="line-clamp-4 whitespace-pre-line text-[#646c78] font-medium">
              {latestBlog.description}
            </p>

            <div className="flex justify-between w-full flex-row-reverse items-center">
              <span className="text-[#646c78]   font-semibold flex gap-2">
                <Clock className="min-w-4" /> {latestBlog.createAt}
              </span>
              <span className="font-bold">
                By <span className="text-[#134ba1]">{latestBlog.author}</span>
              </span>
            </div>
            <Link
          href={`/blogs/${encodeURIComponent(latestBlog.title.trim().replace(/[/%\s]+/g, '-'))}`}
              className="border-2 border-[#134ba1] py-2 px-3 rounded font-bold text-[#134ba1] w-full text-center lg:w-fit"
            >
              {t("readMore")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
