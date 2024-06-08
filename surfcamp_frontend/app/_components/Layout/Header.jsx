"use client"; // to use hooks usePathname need to be in client mode
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "the camp", href: "/" },
    { name: "the experience", href: "/experience" },
    { name: "the blog", href: "/blog" },
  ];
  return (
    <header
      className={`header ${pathname === "/experience" ? "header--light" : ""}`}
      //className={`header ${pathname === "/experience" && "header--light"}`} // two ways to write the same thing
    >
      <img
        className="header__logo"
        src="/assets/logo.svg"
        alt=" Logo Surf Camp"
      />
      <ul className="header__nav">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <h5>{item.name}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
};

export default Header;
