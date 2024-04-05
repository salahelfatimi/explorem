import AddBlogForm from "../components/form/addBlogForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const AddBlog = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "ADMIN") {
    await redirect("/auth/login");
  }
  return (
    <>
      <AddBlogForm />
    </>
  );
};

export default AddBlog;
