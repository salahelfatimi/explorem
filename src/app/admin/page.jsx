"use client";
import {   useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default  function Login() {
  const router = useRouter();
  const ref = useRef();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

 
 
 
 
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !userInfo.email || !userInfo.password) {
      toast.error("Must provide all the Credentials ! ");
    } else {
      try {
        const res = await signIn("credentials", {
          email: userInfo.email,
          password: userInfo.password,
          redirect: false,
          callbackUrl: process.env.NEXTAUTH_URL,
        });

        if (!res.ok) {
          toast.error("Problem signing in!");
        }

        if (res.error) {
          toast.error("Invalid credentials");
          
          return;
        }

       
        router.replace("/admin/dashboard");
      } catch (error) {
        toast.error("Something went wrong");
      }
    }
  };
 
  
  return (
    <>
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <div className="flex min-h-screen container items-center gap-10 justify-center flex-col">
        <h1 className="text-3xl font-bold ">
          Login Admin <span className="text-[#0149a6]">Explorem</span>
        </h1>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-6"
        >
          <input
            type="text"
            className="p-2 border placeholder:text-center rounded"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            
          />
          <input
            type="password"
            value={userInfo.password}
            
            name="password"
            onChange={handleChange}
            className="p-2 border placeholder:text-center rounded"
            placeholder="********"
          />
          <button
            type="submit"
            className="bg-[#0149a6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
