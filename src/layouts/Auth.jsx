import { Outlet } from "react-router-dom";
import { MiniHeader } from "@features/Navigations/header";
import { MiniFooter } from "@features/Navigations/footer";
import authSVG from "@assets/images/backgrounds/auth.svg";

function AuthLayout() {
  return (
    <div className="flex h-screen max-h-[1080px] w-screen max-w-[1920px] justify-center overflow-hidden bg-myPurpule-40 text-white">
      <img src={authSVG} alt="" className="h-full" />
      <main className="absolute top-0 z-10 mx-auto flex h-full w-full flex-col bg-white/10 backdrop-blur-md">
        <MiniHeader />
        <div className="flex-1">
          <Outlet />
        </div>
        <MiniFooter />
      </main>
    </div>
  );
}

export default AuthLayout;
