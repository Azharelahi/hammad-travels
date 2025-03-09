import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import car1 from "./../../assets/images/cars gallery/car1.jpg";
import car2 from "./../../assets/images/cars gallery/civic.jpeg";
import car3 from "./../../assets/images/cars gallery/civic back.jpeg";
import car4 from "./../../assets/images/cars gallery/yaris 427.jpeg";
import car5 from "./../../assets/images/cars gallery/yaris 427 back.jpeg";
import car6 from "./../../assets/images/cars gallery/corolla bln.jpeg";
import car7 from "./../../assets/images/cars gallery/corrolla bln back.jpeg";
import car8 from "./../../assets/images/cars gallery/Corolla bqa.jpeg";
import car9 from "./../../assets/images/cars gallery/Corolla bqa2.jpeg";
import car10 from "./../../assets/images/cars gallery/yaris 455.jpeg";
import car11 from "./../../assets/images/cars gallery/yaris 455 back.jpeg";
import car17 from "./../../assets/images/cars gallery/Yaris 455 front.jpeg";
import car12 from "./../../assets/images/cars gallery/Brv white.jpeg";
import car13 from "./../../assets/images/cars gallery/Brv white front.jpeg";
import car14 from "./../../assets/images/cars gallery/yaris 249.jpeg";
import car24 from "./../../assets/images/cars gallery/yaris 249 back.jpeg";
import car15 from "./../../assets/images/cars gallery/Brv 408 front.jpeg";
import car16 from "./../../assets/images/cars gallery/Brv 408 back.jpeg";
import car18 from "./../../assets/images/cars gallery/coaster 3575.jpeg";
import car19 from "./../../assets/images/cars gallery/coaster yellow.jpeg";
import car20 from "./../../assets/images/cars gallery/coaster1.jpeg";
import car21 from "./../../assets/images/cars gallery/coaster2.jpeg";
import car22 from "./../../assets/images/cars gallery/coaster3.jpeg";
import car23 from "./../../assets/images/cars gallery/two coasters.jpeg";
import car25 from "./../../assets/images/cars gallery/gc grey.jpeg";
import car26 from "./../../assets/images/cars gallery/gc grey2.jpeg";
import car27 from "./../../assets/images/cars gallery/gc grey3.jpeg";
import car28 from "./../../assets/images/cars gallery/gc grey4.jpeg";
import car29 from "./../../assets/images/cars gallery/gc white.jpeg";
import car30 from "./../../assets/images/cars gallery/gc white2.jpeg";
import car31 from "./../../assets/images/cars gallery/gc white3.jpeg";
import car32 from "./../../assets/images/cars gallery/gc white4.jpeg";
import car33 from "./../../assets/images/cars gallery/gc white and brown.jpeg";
import car34 from "./../../assets/images/cars gallery/gcs.jpeg";
import car35 from "./../../assets/images/cars gallery/coaster new.jpeg";

const cars = [
  { src: car2, alt: "Car 2" },
  { src: car3, alt: "Car 3" },
  { src: car4, alt: "Car 4" },
  { src: car5, alt: "Car 5" },
  { src: car6, alt: "Car 6" },
  { src: car7, alt: "Car 7" },
  { src: car8, alt: "Car 8" },
  { src: car9, alt: "Car 9" },
  { src: car10, alt: "Car 10" },
  { src: car11, alt: "Car 11" },
  { src: car17, alt: "Car 17" },
  { src: car12, alt: "Car 12" },
  { src: car13, alt: "Car 13" },
  { src: car14, alt: "Car 14" },
  { src: car24, alt: "Car 24" },
  { src: car15, alt: "Car 15" },
  { src: car16, alt: "Car 16" },
  { src: car25, alt: "Car 25" },
  { src: car26, alt: "Car 26" },
  { src: car27, alt: "Car 27" },
  { src: car28, alt: "Car 28" },
  { src: car29, alt: "Car 29" },
  { src: car30, alt: "Car 30" },
  { src: car31, alt: "Car 31" },
  { src: car32, alt: "Car 32" },
  { src: car33, alt: "Car 33" },
  { src: car34, alt: "Car 34" },
  { src: car1, alt: "Car 1" },
  { src: car18, alt: "Car 18" },
  { src: car19, alt: "Car 19" },
  { src: car20, alt: "Car 20" },
  { src: car21, alt: "Car 21" },
  { src: car22, alt: "Car 22" },
  { src: car23, alt: "Car 23" },
  { src: car35, alt: "Car 35" },
];

const CarsGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const slides = cars.map((car) => ({ src: car.src }));

  return (
    <div>
      <Heading heading="Cars Gallery" />
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {cars.map((car, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              whileHover={{ scale: 1.08, rotateZ: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }} // Smaller y-offset for quicker feel
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Runs only once
              transition={{ duration: 0.5, ease: "easeOut" }} // Faster transition
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <motion.img
                src={car.src}
                alt={car.alt}
                className="w-full h-48 object-cover rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={slides}
          />
        )}
      </div>
    </div>
  );
};

export default CarsGallery;
