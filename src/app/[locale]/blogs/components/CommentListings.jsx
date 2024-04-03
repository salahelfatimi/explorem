import { fetchComments } from "@/app/api/data/actions";
import Image from "next/image";
import { Star } from "react-feather";

export const CommentListings = async ({ blogId }) => {
  const comments = await fetchComments(blogId);

  return (
    <div className="">
      <h2 className="font-manrope font-bold text-2xl text-white bg-[#134ba1] py-2 rounded text-center mb-11">
        All Comments
      </h2>
      <div className=" flex flex-col gap-8">
        <div className=" flex flex-col gap-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className=" flex flex-col lg:flex-row items-center bg-white p-4 rounded gap-8">
                <Image
                  blurDataURL="/image/avatar/man.png"
                  placeholder="blur"
                  className="rounded-full "
                  src="/image/avatar/man.png"
                  height={70}
                  width={70}
                  alt="avatar"
                />
                <div className="flex text-center lg:text-left flex-col gap-1">
                  <p className=" text-gray-500  ">{comment.text}</p>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Star
                      size={25}
                      className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                    />
                    <Star
                      size={25}
                      className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                    />
                    <Star
                      size={25}
                      className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                    />
                    <Star
                      size={25}
                      className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                    />
                    <Star
                      size={25}
                      className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                    />
                  </div>
                  <span className="  font-semibold text-[#134ba1] ">
                    {comment.createdAt.toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <span className=" font-bold text-xl text-center  py-8">
              There is no comments left...
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
