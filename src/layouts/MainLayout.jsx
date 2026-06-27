import { Outlet } from "react-router-dom";
import SidebarNavigation from "../components/dashboard/SidebarNavigation";

function MainLayout() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <SidebarNavigation />

        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default MainLayout;