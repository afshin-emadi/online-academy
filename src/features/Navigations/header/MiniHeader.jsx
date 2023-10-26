import logo from "@assets/images/logo/academy.svg";
import NavItems from "./components/nav-items";

function MiniHeader() {
  return (
    <nav className="flex items-center px-2 py-4 text-base sm:justify-between sm:py-1">
      <NavItems />
      <div className="flex items-center sm:flex-row-reverse">
        <img className="text-sm" src={logo} alt="Oniline Academy" />
        <span>آکادمی‌آنلاین</span>
      </div>
    </nav>
  );
}

export default MiniHeader;
