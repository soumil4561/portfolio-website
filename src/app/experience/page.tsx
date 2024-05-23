"use client";

import Timeline from "../components/timeline/timeline";
import TimelineItem from "../components/timeline/timeline-item";

import "react-vertical-timeline-component/style.min.css";

import { experience } from "../data/info.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="timeline-container">
        <div className="timeline-heading">
          <h1>Experience</h1>
        </div>

        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem key={index} date={item.date}>
              <p>{item.role}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
