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
            <h2>Hi, I'm Soumil Singh</h2>
            <p>
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
