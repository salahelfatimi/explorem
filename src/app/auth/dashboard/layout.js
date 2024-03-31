import "../globals.css";
import SideBar from "./components/sideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      <SideBar />

      <div className=" pt-28 lg:pt-10  mb-auto  p-4 py-8 lg:ml-64">{children}</div>
    </section>
  );
}
