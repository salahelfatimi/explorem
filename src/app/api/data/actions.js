"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

// import {createSharedPathnamesNavigation} from 'next-intl/navigation';

// const locales = ['en', 'de','ar'] ;
// const {Link, usePathname, redirect} = createSharedPathnamesNavigation({locales});
const prisma = new PrismaClient();
export const fetchBlogs = async () => {
  try {
    const blogs = await prisma.blog.findMany({});
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
    if (!image) {
      return NextResponse.json(
        { error: "No image received." },
        { status: 400 }
      );
    }

    const blob = await put(`${title}.png`, image, {
      access: "public",
    });

    // push the data into the DB
    const new_blog = await prisma.blog.create({
      data: {
        imageUrl: blob.url ? blob.url : null,
        title: title,

        description: description,
      },
    });
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
  // revalidatePath('/blogs/add-blog')
  redirect("/auth/dashboard");
};

export const deleteBlog = async (blogId) => {
  try {
    const blogs = await prisma.blog.findFirst({
      where: {
        id: blogId,
      },
    });
    await del(blogs.imageUrl);
    await prisma.blog.delete({
      where: {
        id: blogId,
      },
    });
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
  redirect("/auth/dashboard");
};

export const updateBlog = async (id, formData) => {
  // collect info from form using formData
  const image = formData.get("image");
  const urlImage = formData.get("urlImage");
  const title = formData.get("title");
  const description = formData.get("description");
  try {
    if (image.size > 0) {
      await del(urlImage);
      const blob = await put(`${title}.png`, image, {
        access: "public",
      });
      const updated_blog = await prisma.blog.update({
        where: {
          id: id,
        },
        data: {
          imageUrl: blob.url ? blob.url : null,
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
          title,
          description,
        },
      });
    }
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
  // push the data into the DB

  revalidatePath(`/auth/dashboard/updateBlog/${id}`);
  redirect("/auth/dashboard");
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
      orderBy: {
        createAt: "desc",
      },
    });

    return latestBlog;
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
};
