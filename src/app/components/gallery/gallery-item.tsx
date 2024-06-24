import "./gallery.css";
import React from "react";
import Image from "next/image";

type GalleryItemProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

export default function GalleryItem({
  image,
  title,
  description,
  link,
}: GalleryItemProps) {
  return (
    <div className="gallery-item">
      {/* <img src={image} alt={title} /> */}
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover" // Adjust as needed
      />
      <div className="gallery-item-title">
        {title}
      </div>
      <div className="gallery-item-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} target="_blank">
          View
        </a>
      </div>
    </div>
  );
}
