import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import GalleryImg1 from "../../assets/images/gallery/pc1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const images = [
  {
    original: GalleryImg1,
    thumbnail: GalleryImg1,
    description: "Faisal Mosque - Islamabad",
  },
  {
    original:
      "https://images.unsplash.com/photo-1624911657909-02c92101eebc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1624911657909-02c92101eebc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    description: "Swat - Khyber Pakhtunkhwa",
  },
  {
    original:
      "https://images.unsplash.com/photo-1561204812-4f7ed4793f84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1561204812-4f7ed4793f84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    description: "Khunjerab Pass - Gilgit-Baltistan",
  },
  {
    original:
      "https://images.unsplash.com/photo-1604820020031-4bc88a7f5e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1604820020031-4bc88a7f5e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    description: "Terbela Dam - haripur",
  },
  {
    original:
      "https://images.unsplash.com/photo-1569744405519-ba6615346f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    thumbnail:
      "https://images.unsplash.com/photo-1569744405519-ba6615346f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBha2lzdGFufGVufDB8MHwwfHx8MA%3D%3D",
    description: "Manshi Top",
  },
  {
    original:
      "https://media.istockphoto.com/id/1462192784/photo/nanga-parbat-mountain-reflection-in-the-lake-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=LBowlO1AnDHZqLujKBePF_66FoixwTh1cenwgDlYlOM=",
    thumbnail:
      "https://media.istockphoto.com/id/1462192784/photo/nanga-parbat-mountain-reflection-in-the-lake-pakistan.webp?a=1&b=1&s=612x612&w=0&k=20&c=LBowlO1AnDHZqLujKBePF_66FoixwTh1cenwgDlYlOM=",
    description: "Nanga Parbat",
  },
];

const Gallery = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      <ImageGallery
        items={images}
        showFullscreenButton={true}
        showPlayButton={true}
        showThumbnails={true}
        slideDuration={500}
      />
    </div>
  );
};

export default Gallery;
