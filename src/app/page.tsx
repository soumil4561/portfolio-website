import Navbar from "./components/navbar/navbar";
import Home from "./home/home";
import About from "./about/about";
import Experience from "./experience/experience";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import "./styles.css";
import Footer from "./components/footer/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home /> 
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
