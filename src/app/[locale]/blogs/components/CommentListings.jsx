import { fetchComments } from "@/app/api/data/Comment/actions";
import Image from "next/image";
import { Star } from "react-feather";

export const CommentListings = async ({ blogId }) => {
  const comments = await fetchComments(blogId);

  return (
    <div className="">
      <h2 className="font-manrope font-bold text-2xl text-[#134ba1] border-y-[#134ba1] border-x-white border-4 py-2 rounded text-center mb-11">
        All Comments
      </h2>
      <div className=" flex flex-col gap-8">
        <div className="flex justify-center gap-4" >
          {comments.length > 0 ? (
            <div className=" columns-1 lg:columns-2 space-y-4 gap-4">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className={` break-inside-avoid-column  flex flex-col lg:flex-row  items-center odd:bg-white odd:text-[#134ba1] even:bg-[#134ba1] even:text-white p-4 rounded gap-8`}
                >
                  <Image
                    className="rounded-full "
                    src={`/image/avatar/${comment.image}.png`}
                    height={70}
                    width={70}
                    alt="avatar"
                  />
                  <div className="flex text-center lg:text-left flex-col gap-1">
                    <p className="  font-bold  ">{comment.author}</p>
                    <p className="   ">{comment.text}</p>

                    <span className="  font-semibold  ">
                      {comment.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}{" "}
            </div>
          ) : (
            <span className=" text-center font-bold text-xl   py-8">
              There is no comments left...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
