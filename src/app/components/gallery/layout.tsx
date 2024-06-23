export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="gallery-container">
      <div className="gallery">{children}</div>
    </div>
  );
}
