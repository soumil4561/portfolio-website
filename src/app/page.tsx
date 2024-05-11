import Navbar from "./navbar/page";
import About from "./about/page";
import Experience from "./experience/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import "./styles.css";
//each of these components will return a different section of the page

export default function Page() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {/* */}
    </>
  )
}