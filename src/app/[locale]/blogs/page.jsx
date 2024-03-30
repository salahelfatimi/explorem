

import { fetchBlogs } from "@/app/api/data/actions"
import BlogItem from "@/components/BlogItem"


const Blog= async ()=>{
    const blogs=await fetchBlogs()
    return(
        <>
            
            <h1> Blog </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 mb-5 px-4 py-5">
                {blogs?.length > 0 && blogs.map((blog) => (

                    <BlogItem key={blog?.id} blog={blog} />

                ))}
            </div>
           

        </>
    )
}
export default Blog