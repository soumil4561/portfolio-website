import "./gallery.css";

type GalleryProps = {
  children: React.ReactNode;
};

export default function Gallery({ children }: GalleryProps) {
  return <div className="gallery">{children}</div>;
}
