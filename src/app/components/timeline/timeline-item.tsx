import "./timeline.css";

import { Reveal } from "../../animations/Reveal";

type TimelineProps = {
  date: string;
  children: React.ReactNode;
};

export default function TimelineItem({ children }: TimelineProps) {
  return (
    <Reveal className="timeline-item">
      {/* <div className="timeline-item"> */}
      <div className="timeline-item-content">{children}</div>
      {/* </div> */}
    </Reveal>
  );
}
