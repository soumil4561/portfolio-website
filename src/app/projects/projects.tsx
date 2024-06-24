import Gallery from "../components/gallery/gallery";
import GalleryItem from "../components/gallery/gallery-item";

import { projects } from "../data/info";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-heading">
        <h1>Projects</h1>
        <h5>Some of my work</h5>
      </div>
      <div className="projects-container">
        <Gallery>
          {projects.map((project, index) => (
            <GalleryItem
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </Gallery>
      </div>
    </section>
  );
}
