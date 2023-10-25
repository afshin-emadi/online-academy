import { Outlet } from "react-router-dom";
import { MainHeader } from "@features/Navigations/header";
import { MainFooter } from "@features/Navigations/footer";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  );
}

export default RootLayout;
