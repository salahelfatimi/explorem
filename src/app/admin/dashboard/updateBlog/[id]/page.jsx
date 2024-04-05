import { fetchSingleBlog } from "@/app/api/data/blog/actions";
import UpdateBlogForm from "../../components/form/UpdateBlogForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const UpdateBlogPage = async ({ params }) => {
  const id = params?.id;
  const session =  await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    await redirect("/auth/login");
  }
  
  const blog = await fetchSingleBlog(id);

  return (
    <div>
      <UpdateBlogForm blog={blog} />
    </div>
  );
};

export default UpdateBlogPage;
