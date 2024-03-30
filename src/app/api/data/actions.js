"use server";
import { PrismaClient } from "@prisma/client";

import {createSharedPathnamesNavigation} from 'next-intl/navigation';

const locales = ['en', 'de','ar'] ;
const {Link, usePathname, redirect} = createSharedPathnamesNavigation({locales});
const prisma = new PrismaClient();
export const fetchBlogs=async()=>{
    const blogs=await prisma.blog.findMany({})
    return blogs
}
export const addBlog = async (formData) => {


    // collect info from form using formData
    const imageUrl = formData.get('imageUrl');
    const title = formData.get('title');
    const category = formData.get('category');
    const description = formData.get('description');


    // push the data into the DB
    const new_blog = await prisma.blog.create({
        data: {
            imageUrl: imageUrl ? imageUrl : null,
            title:title,
            category:category,
            description:description

        }
    })

    // revalidatePath('/blogs/add-blog')
    redirect('/blogs')


}