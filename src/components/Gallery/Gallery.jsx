import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const images = [
  {
    original: GalleryImg1,
    thumbnail: GalleryImg1,
    description: "Person wearing shoes - Gift Habeshaw",
  },
  {
    original: GalleryImg3,
    thumbnail: GalleryImg3,
    description: "Blonde woman wearing sunglasses - Dmitriy Frantsev",
  },
  {
    original: GalleryImg6,
    thumbnail: GalleryImg6,
    description: "Harry Cunningham",
  },
  {
    original: GalleryImg4,
    thumbnail: GalleryImg4,
    description: "Jaipur, Rajasthan India - Liam Baldock",
  },
  {
    original: GalleryImg7,
    thumbnail: GalleryImg7,
    description: "Verne Ho",
  },
];

const Gallery = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <ImageGallery
        items={images}
        showFullscreenButton={true}
        showPlayButton={false}
        showThumbnails={true}
        slideDuration={500}
      />
    </div>
  );
};

export default Gallery;
