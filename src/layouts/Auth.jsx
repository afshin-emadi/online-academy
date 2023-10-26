import { Outlet } from "react-router-dom";
import { MiniHeader } from "@features/Navigations/header";
import { MiniFooter } from "@features/Navigations/footer";

function AuthLayout() {
  return (
    <main className="mx-auto flex h-screen max-h-[1080px] w-screen max-w-[1920px] flex-col bg-myPurpule-40 text-white">
      <MiniHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <MiniFooter />
    </main>
  );
}

export default AuthLayout;
