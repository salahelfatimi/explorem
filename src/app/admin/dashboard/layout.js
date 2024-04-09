import { getServerSession } from "next-auth";
import "../globals.css";
import SideBar from "./components/sideBar";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}) {
  const session =  await getServerSession(authOptions)
  if (session?.user?.role !== "ADMIN") {
    await redirect("/admin");
  }

  return (
    <section>
      <SideBar />
      <div className=" pt-28 lg:pt-10  mb-auto  p-4 py-8 lg:ml-64">
        {children}
      </div>
    </section>
  );
}
