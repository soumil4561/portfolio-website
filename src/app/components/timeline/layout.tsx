export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="timeline-container">
      <div className="timeline">{children}</div>
    </div>
  );
}
