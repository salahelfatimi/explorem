import "../../globals.css"
import SideBar from "./components/sideBar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section >
      <aside className=" fixed top-0 left-0 z-40 w-64 h-screen ">
        <SideBar />
      </aside>
      <div className=" p-4 py-8 sm:ml-64">{children}</div>
    </section>
  );
}
