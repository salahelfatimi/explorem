"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { utapi } from "@/app/server/uploadthing";

const prisma = new PrismaClient();

export const fetchComments = async (blogId) => {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        blogId: blogId,
      },
      orderBy: {
        createdAt: "desc",
      },
      
    });
    revalidatePath(`/admin/dashboard/comments/${blogId}`);
    revalidatePath(`/blogs/${blogId}`);
    return comments;
  } catch (error) {
    throw new Error(`Error retrieving latest blog: ${error.message}`);
  }
};

export const addCommentToBlog = async (blogId, formData) => {
  const text = formData.get("text");
  await prisma.comment.create({
    data: {
      blogId: blogId,
      text: text,
    },
  });
  revalidatePath(`/blogs/${blogId}`);
  
  // redirect(`/blogs/${blogId}`);
};

export const deleteSingleComment = async (id, blogId) => {
  await prisma.comment.delete({
    where: {
      id: id,
      blogId: blogId,
    },
  });
  revalidatePath(`/admin/dashboard/comments/${blogId}`);
};
export const deleteComments = async (blogId) => {
  await prisma.comment.deleteMany({
    where: {
      blogId: blogId,
    },
  });
  revalidatePath(`/admin/dashboard`);
};
