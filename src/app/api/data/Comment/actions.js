"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { utapi } from "@/app/server/uploadthing";

import {createSharedPathnamesNavigation} from 'next-intl/navigation';


const prisma = new PrismaClient();


// fetching all comments
export const fetchComments = async (blogId) => {
    //const skip = (page - 1) * pageSize
  
    const comments = await prisma.comment.findMany({
      where: {
        blogId: blogId,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5, // pagination
    });
  
    return comments;
  };
  
  // add Comment to a blog
  export const addCommentToBlog = async (blogId, formData) => {
    // collect info from form using formData
    const text = formData.get("text");
    const locales = ['en', 'de','ar'] ;
    const {redirect} = createSharedPathnamesNavigation({locales});
    // session
  
    // push the data into the DB
    const added_comment = await prisma.comment.create({
      data: {
        blogId: blogId,
        text: text,
      },
    });
    revalidatePath(`/blogs/${blogId}`);
    redirect(`/blogs/${blogId}`);
  };
  
  export const deleteComment = async (id,blogId) => {
    try {
      await prisma.comment.delete({
        where: {
          id:id,
          blogId: blogId,
        },
      });
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
    redirect(`/admin/dashboard/comments/${blogId}`);
  };