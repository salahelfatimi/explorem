"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState(false);
  const router = useRouter();
  const ref = useRef();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidation(true);
    if (userInfo.email && userInfo.password) {
      setIsLoading(true);
      setValidation(false);
      try {
        const res = await signIn("credentials", {
          email: userInfo.email,
          password: userInfo.password,
          redirect: false,
          callbackUrl: process.env.NEXTAUTH_URL,
        });

        if (!res.ok) {
          toast.error("Problem signing in!");
          setIsLoading(false);
        }

        if (res.error) {
          toast.error("Invalid credentials");
          setIsLoading(false);

          return;
        }

        router.replace("/admin/dashboard");
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong");
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
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
          <label className="block space-y-2 w-full">
            <input
              type="text"
              className={`${
                !userInfo.email && validation && "border-red-500 "
              } bg-[#ffffff]  w-full font-bold text-center  placeholder:text-center border p-4 rounded-md text-xs`}
              placeholder="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
            <p className=" text-red-500 text-xs font-medium">
              {!userInfo.email && validation && "Please enter your Email"}
            </p>
          </label>
          <label className="block space-y-2 w-full">
            <input
              type="password"
              value={userInfo.password}
              name="password"
              onChange={handleChange}
              className={`${
                !userInfo.password && validation && "border-red-500 "
              } bg-[#ffffff]  w-full font-bold text-center  placeholder:text-center border p-4 rounded-md text-xs`}
              placeholder="********"
            />
            <p className=" text-red-500 text-xs font-medium">
              {!userInfo.password &&
                validation &&
                "Please enter your Password"}
            </p>
          </label>
          <button
            type="submit"
            className="bg-[#0149a6] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? "logging..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}
