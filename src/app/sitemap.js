import { defaultLocale } from "@/config";
import { blogs } from "./data/blog";


export default async function sitemap() {
 
  const blogEntries=blogs.map((blog)=>({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${defaultLocale}/blogs/${blog.title.trim().replace(/[/%\s]+/g, '-')}`,
      lastModified: new Date(blog.createAt),
      
  }))
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog`,
      lastModified: new Date(),
     

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/employers`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/candidates`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contact`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/blog`,
      lastModified: new Date(),
     

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/employers`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/candidates`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/ar/contact`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de/blog`,
      lastModified: new Date(),
     

    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de/employers`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de/candidates`,
      lastModified: new Date(),
      
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/de/contact`,
      lastModified: new Date(),
      
    },
    ...blogEntries
  ];
}
