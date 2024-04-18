"use server";
import { utapi } from "@/app/server/uploadthing";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const addTestimonialcomment = async (formDataToSend) => {
  const image = formDataToSend.get("image");
  const fullName = formDataToSend.get("fullName");
  const comment = formDataToSend.get("comment");
  await prisma.testimonial.create({
    data: {
      image: image,
      author: fullName,
      text: comment,
    },
  });
  revalidatePath(`/testimonial`);
};


export const addTestimonialfile = async (formDataToSend) => {
  const image = await formDataToSend.get("image");
  const fullName = await formDataToSend.get("fullName");
  const file = await formDataToSend.get("file");
  const response = await utapi.uploadFiles(file);
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
      where:{
        published:true
    },
      orderBy: {
        createdAt: "desc",
      },

      take: take,
    });
    revalidatePath(`/testimonial`);
    revalidatePath(`/admin/dashboard/testimonial`);
    return testimonial;
  } catch (error) {
    throw new Error(`Error retrieving Testimonial: ${error.message}`);
  }
};

export const fetchTestimonialFalseAdmin = async (take) => {
 

  try {
    const testimonial = await prisma.testimonial.findMany({
      where:{
          published:false
      },
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

export const publishedTestimonial = async (idTestimonial) => {
 
  try {
    await prisma.testimonial.update({
      where: {
        id: idTestimonial,
      },
      data: {
        published: true,
      },
    });
    revalidatePath(`/admin/dashboard/testimonial/testimonialNotValidate`);
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
