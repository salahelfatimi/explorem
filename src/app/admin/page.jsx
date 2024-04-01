"use client"
import { useRouter } from 'next/navigation'
import "./globals.css"

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/admin/dashboard');
  };

  return (
    <>
      <div className="flex min-h-screen container items-center gap-10 justify-center flex-col">
        <h1 className="text-3xl font-bold ">
          Login Admin <span className="text-[#0149a6]">Explorem</span>
        </h1>
        <div className="flex flex-col w-full gap-6">
          <input
            type="text"
            className="p-2 border placeholder:text-center rounded"
            placeholder="Username"
          />
          <input
            type="password"
            className="p-2 border placeholder:text-center rounded"
            placeholder="Password"
          />
          <button
            onClick={handleLogin}
            className="bg-[#0149a6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
