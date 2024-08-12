"use client";
export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let elem;
    switch (e.currentTarget.innerText) {
      case "HOME":
        elem = document.getElementById("home");
        break;
      case "ABOUT":
        elem = document.getElementById("about");
        break;
      case "PROJECTS":
        elem = document.getElementById("projects");
        break;
      case "LET'S TALK":
        elem = document.getElementById("contact");
        break;
      default:
        elem = null;
    }
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-container">
      <nav className="navbar sticky">
        <button className="default-nav-button" onClick={handleNavClick}>
          Home
        </button>
        <button className="default-nav-button" onClick={handleNavClick}>
          About
        </button>
        <button className="default-nav-button" onClick={handleNavClick}>
          Projects
        </button>
        <button className="primary-nav-button" onClick={handleNavClick}>
          Let's Talk
        </button>
      </nav>
    </div>
  );
}