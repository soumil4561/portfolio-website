import Navbar from "./components/navbar/navbar";
import Home from "./home/home";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import "./styles.css";
//each of these components will return a different section of the page

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
