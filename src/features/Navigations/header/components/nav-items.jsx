import NavItem from "./nav-item";
const headerItems = [
  { title: "صفحه‌اصلی", to: "/" },
  { title: "دوره‌ها", to: "/courses" },
  { title: "اخبار و مقالات", to: "/articles" },
  { title: "درباره‌ما", to: "/aboutus" },
];

function NavItems() {
  return (
    <ul className="hidden sm:flex">
      {headerItems.map((item, index) => (
        <NavItem key={index} title={item.title} address={item.to} />
      ))}
    </ul>
  );
}

export default NavItems;
