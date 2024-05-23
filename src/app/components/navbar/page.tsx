import Link from "next/link";
export default function Navbar() {
  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  return (
    <div className="navbar-container">
      <nav className="navbar sticky">
        {navItems.map((item, index) => (
          <Link key={index} href={item.link}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
