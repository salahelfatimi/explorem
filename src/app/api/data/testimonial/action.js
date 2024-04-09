"use server";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();
export const addTestimonial = async (formData) => {
  const image = formData.get("image");
  const fullName = formData.get("fullName");
  const comment = formData.get("comment");
  await prisma.testimonial.create({
    data: {
      image: image,
      author: fullName,
      text: comment,
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
export const deletedTestimonial = async (idTestimonial) => {
  try {
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
