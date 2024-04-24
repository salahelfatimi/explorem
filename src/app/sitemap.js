import { fetchBlogs } from "./api/data/blog/actions";

export default async function sitemap() {
  const blogs = await fetchBlogs(50);
  const blogEntries=blogs.map((id)=>({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blogs/${id.id}`,
      lastModified: new Date(id.updateAt),
      changeFrequency: 'daily',
      priority: 1,
  }))
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily', // Corrected spelling
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/employers`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/candidates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogEntries
  ];
}
