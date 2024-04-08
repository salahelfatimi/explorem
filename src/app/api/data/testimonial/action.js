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
        image:image,
        author:fullName,
        text:comment
      },
    });
    revalidatePath(`/testimonial`);
    
    
  };

  export const fetchTestimonial = async () => {
    try {
      const testimonial = await prisma.testimonial.findMany({
        
        orderBy: {
          createdAt: "desc",
        },
        
      });
      revalidatePath(`/testimonial`);
      return testimonial;
    } catch (error) {
      throw new Error(`Error retrieving latest blog: ${error.message}`);
    }
  };