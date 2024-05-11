import { Facebook, Instagram, Send } from "react-feather";
import Image from "next/image";
import { redirect } from "@/navigation";
import { blogs } from "@/app/data/blog";
export  function generateMetadata({ params: { title } }) {
  const post = blogs.find((blog) => blog.title.trim().replace(/[/%\s]+/g, '-') === title);
  if (!post) {
    redirect('/')
  }
  
  return {
    title: post.title,
    description: post.description,
}
}
// export async  function generateMetadata({ params: { title } }, parent) {
//   const post = blogs.find((blog) => blog.title.trim().replace(/[/%\s]+/g, '-') === title);
//   const previousImages = (await parent).openGraph?.images || []
//   if (!post) {
//     redirect('/')
//   }
  
//   return {
//     title: post.title,
//     description: post.description,
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       images: [`/image/blogExplorem/${post.Org}`, ...previousImages],
//     },

// }}
export default  function BlogDetail({ params: { title } }) {
 
  const blog = blogs.find((blog) => blog.title.trim().replace(/[/%\s]+/g, '-') === title);
  if (!blog) {
    redirect('/')
    
  }
 
  const isImage = (url) => /\.(jpg|jpeg|png|gif)$/i.test(url);
  const isVideo = (url) => /\.(mp4|avi|mov|wmv)$/i.test(url);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const createMarkup = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(
      urlRegex,
      '<a class=" text-blue-500 underline underline-offset-2" href="$1" target="_blank">$1</a>'
    );
  };

  
  return (
    <>
      <div className="container px-4 items-center   flex flex-col gap-10 py-10 pt-32 ">
        <h1 className="font-bold    text-[#134ba1]  text-wrap text-center text-2xl lg:text-4xl   ">
          {blog?.title}
        </h1>
        <div className=" flex  flex-col lg:flex-row gap-4">
          {isImage(blog?.Url) && (
            <Image
              title={blog.title}
              blurDataURL={blog.base64}
              placeholder="blur"
              quality={100}
              width={blog.width}
              height={blog.height}
              src= {`/image/blogExplorem/${blog.Url}`}
              className="object-cover  rounded  shadow-2xl  w-full lg:h-[30rem] bg-no-repeat"
              alt={blog.title}
            />
          )}
          {isVideo(blog?.Url) && (
            <video
              className=" bg-[#0149a6] h-[26rem] min-h-96 w-auto  "
              height={100}
              width={100}
              title={blog.title}
              controls
            >
              <source src={`/image/blogExplorem/${blog.Url}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          <div className="flex justify-center lg:flex-col gap-4 items-center">
            <span className=" border-t-4 border-[#134ba1] items-center  h-fit p-2 flex-row lg:flex-col font-bold flex gap-2">
              <p className="text-[#134ba1] font-extrabold text-xl">
                {new Date(blog.createAt).getDate()}
              </p>

              <p className="">
                {monthNames[new Date(blog.createAt).getMonth() + 1]}
              </p>
              <p className=" bg-[#134ba1] text-white py-1 px-4">
                {new Date(blog.createAt).getFullYear()}
              </p>
            </span>
            <a
              href="https://web.facebook.com/ExploremSARL"
              className="  rounded-full duration-500 border-[#134ba1] bg-[#134ba1] hover:bg-white  border-2 w-fit h-fit p-2"
            >
              <Facebook className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
            <a
              href="https://www.instagram.com/explorem21/"
              className=" rounded-full duration-500 border-[#134ba1] bg-[#134ba1] hover:bg-white border-2 w-fit h-fit p-2"
            >
              <Instagram className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.explorem.net/en/blogs/${title}`}
              className=" rounded-full duration-500 border-[#134ba1] hover:bg-white bg-[#134ba1] border-2 w-fit h-fit p-2"
            >
              <Send className=" stroke-[#fff] hover:stroke-[#134ba1] stroke-2" />
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center text-xl justify-between gap-4">
          <span className="font-bold">
            By <span className="text-[#134ba1] uppercase">Explorem</span>
          </span>
        </div>
        <div >
          <p
            className="whitespace-pre-line text-center lg:text-left      break-words container   leading-loose   lg:text-xl"
            dangerouslySetInnerHTML={{ __html: createMarkup(blog.description) }}
          ></p>
        </div>

        {blog?.Url1 && (
          <div className=" flex  flex-col lg:flex-row gap-4">
            <Image
              title={blog?.title}
              blurDataURL={blog?.base641}
              placeholder="blur"
              quality={100}
              width={blog?.width1}
              height={blog?.height1}
              src={`/image/blogExplorem/${blog?.Url1}`}
              className="object-cover  rounded  shadow-2xl  w-full lg:h-[30rem] bg-no-repeat"
              alt={blog?.title}
            />
            
          </div>
        )}
      </div>
    </>
  );
}
