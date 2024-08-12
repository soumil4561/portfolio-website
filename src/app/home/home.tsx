import Image from "next/image";
import about from "../data/info.js";

export default function Home() {
  const info = about;
  return (
    <section id="home" data-target="home" className="home">
      <div className="home-container">
        <div className="profile-image">
          <Image
            className="profile-image"
            src="/images/photo8.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="profile-info">
          <h1>
            Hi, I&apos;m {(info as { about: { fname: string } }).about.fname}
            {/* {info.about.designation} */}
          </h1>
          <p>
            {info.about.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
