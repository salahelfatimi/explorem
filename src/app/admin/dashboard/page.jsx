import { PrismaClient } from "@prisma/client";
import BlogItem from "./components/BlogItem";

const prisma = new PrismaClient();
const Dashboard = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className=" font-bold text-2xl bg-[#0149a6] text-white p-4 rounded">
          Blogs
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        {blogs?.length > 0 &&
          blogs.map((blog) => <BlogItem key={blog?.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default Dashboard;
