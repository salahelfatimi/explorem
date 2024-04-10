"use server";
import { utapi } from "@/app/server/uploadthing";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const addTestimonialcomment = async (formDataToSend) => {
  const image = formDataToSend.get("image");
  const fullName = formDataToSend.get("fullName");
  const testimonialType = formDataToSend.get("testimonialType");
  await prisma.testimonial.create({
    data: {
      image: image,
      author: fullName,
      text: testimonialType,
    },
  });
  revalidatePath(`/testimonial`);
};


export const addTestimonialfile = async (formDataToSend) => {
  const image = formDataToSend.get("image");
  const fullName = formDataToSend.get("fullName");
  const testimonialType = formDataToSend.get("testimonialType");
  const response = await utapi.uploadFiles(testimonialType);
  await prisma.testimonial.create({
    data: {
      image: image,
      author: fullName,
      fileKey: response.data.key,
      fileUrl:response.data.url
    },
  });
  revalidatePath(`/testimonial`);
};

export const fetchTestimonial = async (take) => {
  try {
    const testimonial = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: take,
    });
    revalidatePath(`/testimonial`);
    return testimonial;
  } catch (error) {
    throw new Error(`Error retrieving Testimonial: ${error.message}`);
  }
};

export const fetchTestimonialAdmin = async (take) => {
 

  try {
    const testimonial = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: "desc",
      },

      take: take,
    });
    revalidatePath(`/admin/dashboard/testimonial`);
    return testimonial;
  } catch (error) {
    throw new Error(`Error retrieving Testimonial: ${error.message}`);
  }
};
export const deletedTestimonial = async (idTestimonial,fileKey) => {
 
  try {
    if(fileKey){
      await utapi.deleteFiles(fileKey);
    }
    await prisma.testimonial.delete({
      where: {
        id: idTestimonial,
      },
    });
    revalidatePath(`/admin/dashboard/testimonial`);
  } catch (error) {
    throw new Error(`Error retrieving Testimonial: ${error.message}`);
  }
};
