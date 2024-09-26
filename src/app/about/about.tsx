"use client";
import ArrowBtn from "../components/arrow-btn/arrow-btn";
import { FilePdf } from "phosphor-react";
export default function About() {
  const openResume = () => {
    // resume in pdf format in public folder
    window.open("/Resume_Soumil Singh.pdf", "_blank");
  };

  return (
    <section id="about" data-target="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <h1>About Me</h1>
          <h5>A brief introduction</h5>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>Hi, I&apos;m Soumil</h2>
            <p>
            I am a passionate software developer currently in my final year of college, where I am honing my skills in computer science and software engineering. 
            With a solid foundation in data structures, algorithms, and object-oriented programming, I enjoy tackling complex problems and turning ideas into efficient, scalable solutions. 
            I am constantly exploring new technologies and methodologies to stay at the forefront of the industry. My academic journey, combined with hands-on project experience, 
            has equipped me with the tools and mindset to contribute effectively in dynamic development environments. 
            I&apos;m excited to bring my skills and enthusiasm to real-world challenges as I transition into a professional software development role.
              <br />
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, augue nec ultricies ultricies, libero libero facilisis
              purus, nec ultricies libero libero nec. Sed tincidunt, augue nec
              ultricies ultricies, libero libero facilisis purus, nec ultricies
              libero libero nec.
              <br />
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, augue nec ultricies ultricies, libero libero facilisis
              purus, nec ultricies libero libero nec. Sed tincidunt, augue nec
              ultricies ultricies, libero libero facilisis purus, nec ultricies
              libero libero nec.
              <br />
            </p>
            <div className="resume-btn">
              <ArrowBtn name="Resume" onClick={openResume} icon={<FilePdf />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
