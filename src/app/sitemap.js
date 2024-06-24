import { defaultLocale } from "@/config";
import { blogs } from "./data/blog";


export default async function sitemap() {
 
  const blogEntries=blogs.map((blog)=>({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/blogs/${blog.title.trim().replace(/[/%\s]+/g, '-')}`,
      lastModified: new Date(blog.createAt),
      
  }))
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/blog`,
      lastModified: new Date(),
     

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/employers`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/candidates`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/contact`,
      lastModified: new Date(),
      
    },
    ...blogEntries
  ];
}
