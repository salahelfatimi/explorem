import Image from "next/image";
import { Star, Trash } from "react-feather";
import DeleteComment from "../../components/deleteComment";
import { fetchComments } from "@/app/api/data/Comment/actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function CommentsBlog({ params }) {
  const session =  await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    redirect("/auth/login");
  }
  const idBlog = params.id;
  const comments = await fetchComments(idBlog);

  return (
    <>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className=" font-bold text-2xl bg-[#0149a6] text-white p-4 rounded">
            Comments Blog
          </h1>
        </div>
        <div className=" flex flex-col gap-8">
          <div className=" flex flex-col gap-4">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className=" flex flex-col lg:flex-row items-center justify-between bg-white p-4 rounded gap-8"
                >
                  <div className="flex flex-col lg:flex-row items-center  gap-4">
                    <Image
                      className="rounded-full w-auto "
                      src="/image/avatar/man.png"
                      height={60}
                      width={60}
                      alt="avatar"
                    />
                    <div className="flex text-center lg:text-left flex-col gap-1">
                      <span className=" font-bold">{comment.author}</span>
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <Star
                          size={20}
                          className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                        />
                        <Star
                          size={20}
                          className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                        />
                        <Star
                          size={20}
                          className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                        />
                        <Star
                          size={20}
                          className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                        />
                        <Star
                          size={20}
                          className=" min-w-4 fill-yellow-400 stroke-yellow-400"
                        />
                      </div>
                      <p className=" text-gray-500  ">{comment.text}</p>

                      <span className="  font-semibold text-[#134ba1] ">
                        {comment.createdAt.toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <DeleteComment id={comment.id} idBlog={idBlog} />
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
    </>
  );
}
