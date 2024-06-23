import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "HOME", link: "#home" },
    { name: "EXPERIENCE", link: "#experience" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  // const handleNavItemClick = (e:any, link:string) => {
  //   e.preventDefault(); // Prevent the default link behavior

  //   let targetRef;
  //   switch (link) {
  //     case "#home":
  //       targetRef = homeRef;
  //       break;
  //     case "#experience":
  //       targetRef = experienceRef;
  //       break;
  //     case "#projects":
  //       targetRef = projectsRef;
  //       break;
  //     case "#contact":
  //       targetRef = contactRef;
  //       break;
  //   }

  //   if (targetRef && targetRef.current) {
  //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

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
