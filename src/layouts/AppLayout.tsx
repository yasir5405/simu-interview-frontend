import NavBar from "@/components/Navigation/NavBar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-dvh w-full">
      <NavBar />
      <main className="px-28 py-4 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
