import { PrismaClient } from "@prisma/client";
import BlogItem from "./components/BlogItem";

import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
const prisma = new PrismaClient();
const Dashboard = async () => {

  const session =  await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    await redirect("/auth/login");
  }
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createAt: "desc",
    },
  });
  await revalidatePath(`/admin/dashboard`);
  return  (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className=" font-bold text-2xl text-[#0149a6] p-4 rounded">
          Welcome Admin Explorem
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        {blogs?.length > 0 ? (
          blogs.map((blog) => <BlogItem key={blog?.id} blog={blog} />)
        ) : (
          <div className=" flex items-center justify-center flex-col gap-6 ">
            <span className="text-center font-bold text-2xl">
              No blogs found. Add a new blog.
            </span>
            <Link
              href="/admin/dashboard/addBlog"
              className={` bg-[#0149A6] w-fit  text-lg text-center font-semibold  py-2 px-4 rounded text-white`}
            >
              Add Blog
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
