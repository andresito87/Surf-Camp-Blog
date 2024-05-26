import Link from 'next/link';

const Header = () => {
  const navItems = [
    { name: 'the camp', href: '/' },
    { name: 'the experience', href: '/experience' },
    { name: 'the blog', href: '/blog' },
  ];
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/assets/logo.svg"
        alt=" Logo Surf Camp"
      />
      <ul className="header__nav">
        {navItems.map(item => (
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
