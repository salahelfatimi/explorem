"use client";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const ref = useRef();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    username: "",
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

    if (!userInfo.username || !userInfo.email || !userInfo.password) {
      toast.error("Must provide all the Credentials ! ");
    } else {
      try {
        toast.promise(
          (async () => {
            const response = await fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message);
            }
            return response.json();
          })(),
          {
            loading: "Registering ...",
            success: (data) => {
              ref?.current?.reset(); // Reset the form
              router.push("/admin"); // Navigate to login page
              return data ? <b>{data.message}</b> : null;
            },
            error: (error) => (error ? <b>{error.message}</b> : null),
          }
        );
      } catch (error) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex min-h-screen container items-center gap-10 justify-center flex-col">
      <Toaster
        toastOptions={{
          className: "  bg-white text-black ",
        }}
      />
      <h1 className="text-3xl font-bold ">
        Register In <span className="text-[#0149a6]">Explorem</span>
      </h1>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-6"
      >
        <input
          className="p-2 border placeholder:text-center rounded"
          type="text"
          placeholder="Username"
          name="username"
          value={userInfo.username}
          onChange={handleChange}
        />

        <input
          className="p-2 border placeholder:text-center rounded"
          type="email"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />

        <input
          className="p-2 border placeholder:text-center rounded"
          type="password"
          placeholder="********"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />

        <button
          className="bg-[#0149a6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Registering
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
