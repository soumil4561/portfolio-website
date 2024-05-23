import Image from "next/image";

import about from "../data/info.js";

export default function Home() {
  const info = about;
  return (
    <section id="home">
      <div className="home-container">
        <div className="profile-image">
          <Image
            className="profile-image"
            src="/images/jb&w.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="profile-info">
          <h1>
            Hi , I&apos;m {(info as { about: { fname: string } }).about.fname}
          </h1>
          <p>
            {(info as { about: { description: string } }).about.description}
          </p>
        </div>
      </div>
    </section>
  );
}
