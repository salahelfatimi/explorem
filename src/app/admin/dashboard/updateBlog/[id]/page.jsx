import { fetchSingleBlog } from "@/app/api/data/blog/actions";
import UpdateBlogForm from "../../components/form/UpdateBlogForm";


const UpdateBlogPage = async ({ params }) => {
  const id = params?.id;

  
  const blog = await fetchSingleBlog(id);

  return (
    <div>
      <UpdateBlogForm blog={blog} />
    </div>
  );
};

export default UpdateBlogPage;
