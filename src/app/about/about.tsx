'use client';
import ArrowBtn from "../components/arrow-btn/arrow-btn";
export default function About() {

  const openResume = () => {
    // resume in pdf format in public folder
    window.open('/Resume_Soumil Singh.pdf', '_blank');
  }

  return (
    <section id="about" data-target="about" className="about">
      <div className="about-container">
        <div className="about-heading">
          <h1>About Me</h1>
          <h5>Get to know me</h5>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h2>Hi, I'm John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod, nisl nec lacinia posuere, justo nunc bibendum tellus, vel
              fermentum nulla libero sit amet nulla. Sed at nunc fermentum,
              ultrices odio nec, sollicitudin odio. Nullam vestibulum, elit nec
              ultricies ultricies, urna orci vehicula eros, nec lacinia purus
              elit nec felis. Nulla facilisi.
            </p>
            <div className="about-buttons">
              {/* <button className="resume-btn" onClick={openResume}>Resume</button> */}
              <ArrowBtn name="Resume" onClick={openResume}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
