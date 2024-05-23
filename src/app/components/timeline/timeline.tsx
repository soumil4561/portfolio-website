import "./timeline.css";

type TimelineProps = {
  children: React.ReactNode;
};

export default function Timeline({ children }: TimelineProps) {
  return <div className="timeline">{children}</div>;
}
