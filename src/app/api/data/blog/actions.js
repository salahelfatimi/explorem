"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { utapi } from "@/app/server/uploadthing";
const prisma = new PrismaClient();

export const Published = async (id, publish) => {
  try {
    await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        published: publish,
      },
    });
    revalidatePath(`/admin/dashboard`);
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
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
    revalidatePath(`/blog`);
    return blogs;
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
};

export const addBlog = async (formData) => {
  const image = formData.get("image");
  const title = formData.get("title");
  const description = formData.get("description");

  const response = await utapi.uploadFiles(image);
  await prisma.blog.create({
    data: {
      imageUrl: response.data.url,
      title: title,
      imageKey: response.data.key,
      description: description,
    },
  });
  revalidatePath("/admin/dashboard/addBlog");
  redirect("/admin/dashboard");
};

export const deleteBlog = async (blogId, imageKey) => {
  try {
    await utapi.deleteFiles(imageKey);
    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
    revalidatePath(`/admin/dashboard`);
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
};

export const updateBlog = async (id, formData, imageKey) => {
  // collect info from form using formData
  const image = formData.get("image");;
  const title = formData.get("title");
  const description = formData.get("description");

  if (image.size > 0) {
    await utapi.deleteFiles(imageKey);
    const response = await utapi.uploadFiles(image);
    await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        imageUrl: response.data.url ,
        imageKey: response.data.key,
        title,
        description,
      },
    });
  } else {
    await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        title,
        description,
      },
    });
  }
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
    revalidatePath(`/blogs`);
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
    revalidatePath(`/blogs`);
    return latestBlog;
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
};
