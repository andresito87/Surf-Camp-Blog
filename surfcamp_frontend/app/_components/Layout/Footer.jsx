import Link from "next/link";

const footer = () => {
  const navItems = [
    { name: "the camp", href: "/" },
    { name: "the experience", href: "/experience" },
    { name: "the blog", href: "/blog" },
    { name: "events", href: "/events" },
  ];

  const policies = [
    { name: "privacy policy", href: "/privacy" },
    { name: "terms and conditions", href: "/terms" },
    { name: "cookies policy", href: "/cookies" },
  ];
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img
          className="footer__logo"
          src="/assets/logo.svg"
          alt="Logo Surf Camp"
        />
        <ul className="footer__links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <h5>{item.name}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((policy) => (
            <li key={policy.name}>
              <Link href={policy.href}>
                <h5>{policy.name}</h5>
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">© 2024 Andrés's Surf Camp - all rights reserved</p>
      </div>
    </footer>
  );
};

export default footer;
