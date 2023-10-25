import { Outlet } from "react-router-dom";
import { MiniHeader } from "@features/Navigations/header";
import { MiniFooter } from "@features/Navigations/footer";

function AuthLayout() {
  return (
    <>
      <MiniHeader />
      <Outlet />
      <MiniFooter />
    </>
  );
}

export default AuthLayout;
