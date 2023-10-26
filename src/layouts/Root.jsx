import { Outlet } from "react-router-dom";
import { MainHeader } from "@features/navigation/header";
import { MainFooter } from "@features/navigation/footer";

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
