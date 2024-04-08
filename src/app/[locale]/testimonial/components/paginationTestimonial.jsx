"use client"

import { useRouter } from "next/navigation";



export default async function PaginationTestimonial({searchParams}){
    const router = useRouter();
    const take = await parseInt(searchParams.take)  
    const handeleNextPage=()=>{
     
        router.push(`?take=${take+6}`,{scroll:false} )
    }
    return(
        <>
            <button className=" bg-[#0149a6] w-fit py-2 rounded-3xl px-6  font-bold text-white" onClick={handeleNextPage}> See More</button>
            
        </>
    )
}