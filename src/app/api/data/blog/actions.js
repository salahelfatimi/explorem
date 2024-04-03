"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { utapi } from "@/app/server/uploadthing";

import {createSharedPathnamesNavigation} from 'next-intl/navigation';


const prisma = new PrismaClient();



export const Published = async (id, publish) => {
    try {
      const updated_blog = await prisma.blog.update({
        where: {
          id: id,
        },
        data: {
          published: publish,
        },
      });
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
    redirect("/admin/dashboard");
  };
  
  export const fetchBlogs = async () => {
    try {
      const blogs = await prisma.blog.findMany({
        where: {
          published: true,
        },
        orderBy: {
          createAt: "desc",
        },
      });
      return blogs;
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
  };
  export const addBlog = async (formData) => {
    // collect info from form using formData
    const image = formData.get("image");
    const title = formData.get("title");
    const description = formData.get("description");
    try {
      const response = await utapi.uploadFiles(image);
  
      // push the data into the DB
      const new_blog = await prisma.blog.create({
        data: {
          imageUrl: response.data.url ? response.data.url : null,
          title: title,
          imageKey:response.data.key,
          description: description,
        },
      });
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
    // revalidatePath('/blogs/add-blog')
    redirect("/admin/dashboard");
  };
  
  export const deleteBlog = async (blogId,imageKey) => {
    try {
      const blogs = await prisma.blog.findFirst({
        where: {
          id: blogId,
        },
      });
      await utapi.deleteFiles(imageKey);
      await prisma.blog.delete({
        where: {
          id: blogId,
        },
      });
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
    redirect("/admin/dashboard");
  };
  
  export const updateBlog = async (id, formData,imageKey) => {
    // collect info from form using formData
    const image = formData.get("image");
    const urlImage = formData.get("urlImage");
    const title = formData.get("title");
    const description = formData.get("description");
    try {
      if (image.size > 0) {
        await utapi.deleteFiles(imageKey);
        const response = await utapi.uploadFiles(image);
        const updated_blog = await prisma.blog.update({
          where: {
            id: id,
          },
          data: {
            imageUrl: response.data.url ? response.data.url : null,
            imageKey:response.data.key,
            title,
            description,
          },
        });
      } else {
        const updated_blog = await prisma.blog.update({
          where: {
            id: id,
          },
          data: {
            imageUrl: urlImage ? urlImage : null,
            imageKey:imageKey,
            title,
            description,
          },
        });
      }
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
    // push the data into the DB
  
    revalidatePath(`/admin/dashboard/updateBlog/${id}`);
    redirect("/admin/dashboard");
  };
  
  export const fetchSingleBlog = async (id) => {
    try {
      const blogs = await prisma.blog.findFirst({
        where: {
          id: id,
        },
      });
      return blogs;
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
  };
  
  export const getLatestBlog = async () => {
    try {
      const latestBlog = await prisma.blog.findFirst({
        where: {
          published: true,
        },
        orderBy: {
          createAt: "desc",
        },
      });
  
      return latestBlog;
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
  };