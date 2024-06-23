"use client";

import Timeline from "../components/timeline/timeline";
import TimelineItem from "../components/timeline/timeline-item";

import "react-vertical-timeline-component/style.min.css";

import { experience } from "../data/info.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="experience-heading">
        <h1>Experience</h1>
      </div>
      <div className="timeline-container">
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem key={index} date={item.date}>
              <div className="timeline-date">
                <span className="timeline-date-font">{item.date}</span>
              </div>
              <div className="timeline-heading">{item.role}</div>
              <div className="timeline-heading-sub">{item.company}</div>
              <div className="timeline-content">
                <p>{item.description}</p>
              </div>
              <div className="timeline-footer"></div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
