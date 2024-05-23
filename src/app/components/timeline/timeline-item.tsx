import "./timeline.css";

type TimelineProps = {
  date: string;
  children: React.ReactNode;
};

export default function TimelineItem({ children }: TimelineProps) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">{children}</div>

      <div className="timeline-item-icon">
        <div className="timeline-item-icon-inner"></div>
      </div>
    </div>
  );
}
