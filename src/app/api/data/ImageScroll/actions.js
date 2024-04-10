"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { utapi } from "@/app/server/uploadthing";
const prisma = new PrismaClient();

export const addImageScroll = async (formData) => {
    const image = formData.get("image");
 
  
    const response = await utapi.uploadFiles(image);
    await prisma.imageScroll.create({
      data: {
        imageUrl: response.data.url ? response.data.url : null,
        imageKey: response.data.key,
      },
    });
    revalidatePath("/admin/dashboard/imageScroll");
    redirect("/admin/dashboard/imageScroll");
  };
  export const fetchImageScroll = async () => {
    const response= await prisma.imageScroll.findMany({
    });
    revalidatePath("/admin/dashboard/imageScroll");
    return response
  };