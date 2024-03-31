
import { fetchSingleBlog } from "@/app/api/data/actions";
import UpdateBlogForm from "../../components/form/UpdateBlogForm";


const UpdateBlogPage = async ({ params }) => {
  const id = params?.id;

  // get the db info for each blog to fill forms

  const blog = await fetchSingleBlog(id);

  return (
    <div>
      
      <UpdateBlogForm blog={blog} />
    </div>
  );
};

export default UpdateBlogPage;
