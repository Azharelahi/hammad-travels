import React, { useEffect } from "react";
import Heading from "../../components/Heading/Heading";
import civic from "./../../assets/images/cars/civic.jpg";
import revo from "./../../assets/images/cars/revo.jpg";
import "animate.css";
import { useNavigate } from "react-router-dom";
const CarHire = () => {
  const navigate = useNavigate();
  const carList = [
    {
      type: "SUV",
      name: "Toyota Landcruiser V8",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/V8-760x460.jpeg",
      passengers: 7,
      gear: "Auto 4x4",
      baggage: 3,
      doors: 5,
      price: "RS 25k/day",
      description:
        "Explore the rugged terrain with unmatched style and power by renting the Land Cruiser V8 with Hammad Travels. Our premium SUV rental service offers you the opportunity to experience luxury and performance on the road. Whether it’s traversing challenging landscapes or cruising through city streets, the Land Cruiser V8 ensures a smooth and commanding ride. Book now with Hammad Travels and embark on your next adventure in ultimate comfort and confidence.",
    },
    {
      type: "SUV",
      name: "Toyota Prado Upmodel",
      img: "https://gbtours.com.pk/wp-content/uploads/2022/05/prado-upmodel-760x460.jpeg",
      passengers: 7,
      gear: "Auto 4x4",
      baggage: 3,
      doors: 5,
      price: "RS 15k/day",
      description:
        "Embark on a journey of sophistication and power with the Toyota Prado Upmodel from Hammad Travels. This high-end SUV is built for adventure, offering superior comfort and smooth handling across all terrains. Whether you're navigating hilly landscapes or city roads, the Prado ensures a first-class travel experience. Rent today and enjoy the reliability and luxury of a top-tier SUV.",
    },
    {
      type: "SUV",
      name: "Toyota Prado TZ",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/prado-tz-760x460.jpeg",
      passengers: 7,
      gear: "Auto 4x4",
      baggage: 3,
      doors: 5,
      price: "RS 11k/day",
      description:
        "Adventure awaits with the Toyota Prado TZ, a perfect blend of power and elegance. Designed for both off-road expeditions and smooth city drives, this SUV is a favorite among travelers who demand comfort and performance. Book now with Hammad Travels for an unforgettable driving experience.",
    },
    {
      type: "Wagon",
      name: "Toyota Hiace Grandcabin",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/grandcabin-760x460.jpeg",
      passengers: 13,
      gear: "Manual",
      baggage: 9,
      doors: 4,
      price: "RS 8K/day",
      description:
        "Travel together with ease in the Toyota Hiace Grandcabin, the ideal vehicle for group tours. With spacious seating and ample storage, this wagon is designed for ultimate comfort on long journeys. Whether it's a family trip or a business tour, Hammad Travels ensures a smooth and reliable ride.",
    },
    {
      type: "Sedan",
      name: "Toyota Corolla GLI/XLI",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/corolla-xli-760x460.jpeg",
      passengers: 4,
      gear: "Auto",
      baggage: 4,
      doors: 4,
      price: "RS 5K/day",
      description:
        "Drive with confidence in the Toyota Corolla GLI/XLI, the ultimate combination of fuel efficiency and reliability. Ideal for city commutes and long drives alike, this sedan provides a smooth and comfortable experience. Rent with Hammad Travels today for a hassle-free journey.",
    },
    {
      type: "Sedan",
      name: "Honda Civic",
      img: civic,
      passengers: 4,
      gear: "Auto",
      baggage: 3,
      doors: 4,
      price: "RS 8K/day",
      description:
        "Experience premium comfort and sporty performance with the Honda Civic. This sleek sedan offers an elegant interior, smooth handling, and an efficient drive, making it perfect for both business and leisure trips. Book with Hammad Travels and enjoy a superior driving experience.",
    },
    {
      type: "Sedan",
      name: "Honda BRV",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/brv-760x460.jpeg",
      passengers: 7,
      gear: "Auto",
      baggage: 4,
      doors: 5,
      price: "RS 5.5k/day",
      description:
        "Discover the versatility of the Honda BRV, an SUV-inspired sedan with spacious seating for the whole family. Whether you’re heading on a long tour or exploring the city, this vehicle guarantees a smooth and enjoyable ride. Book now with Hammad Travels.",
    },
    {
      type: "Wagon",
      name: "Coaster Saloon 5c",
      img: "https://gbtours.com.pk/wp-content/uploads/2024/02/coaster5c-760x460.jpeg",
      passengers: 28,
      gear: "Auto",
      baggage: 20,
      doors: 2,
      price: "RS 15k/day",
      description:
        "The Coaster Saloon 5c is the perfect choice for large groups and corporate tours. Offering ample seating and a comfortable ride, this vehicle is ideal for long journeys and road trips. Travel with ease and book today with Hammad Travels.",
    },
    {
      type: "Wagon",
      name: "Coaster Saloon 4c",
      img: "https://royaltaxi.pk/wp-content/uploads/2024/06/Rent-a-Toyota-coaster-Booking.jpg",
      passengers: 28,
      gear: "Auto",
      baggage: 20,
      doors: 2,
      price: "RS 13k/day",
      description:
        "Planning a group trip? The Coaster Saloon 4c is your best option for spacious and comfortable travel. Whether for family vacations or business tours, this vehicle offers a safe and relaxing journey. Book now with Hammad Travels and travel in comfort.",
    },
    {
      type: "Pickup Truck",
      name: "Toyota Revo 4x4",
      img: revo,
      passengers: 4,
      gear: "Auto",
      baggage: 4,
      doors: 4,
      price: "RS 11k/day",
      description:
        "Dominate the roads and off-road trails with the Toyota Revo 4x4, a robust and powerful pickup truck. Whether you're transporting cargo or seeking adventure in rugged landscapes, this vehicle is designed to perform. Rent now with Hammad Travels and explore with confidence.",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading heading={"Hire The Best Cars"} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {carList.map((car, index) => (
              <div
                key={index}
                className="p-4 lg:w-1/3 md:w-1/2 w-full"
                onClick={() => navigate("/hire-details", { state: { car } })}
              >
                <div className="h-full bg-white shadow-2xl rounded-2xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-3xl">
                  <img
                    alt="car"
                    className="rounded-xl w-full h-56 object-contain mb-4"
                    src={car.img}
                  />
                  <h2 className="text-sm text-gray-500 uppercase tracking-widest mb-1">
                    {car.type}
                  </h2>
                  <h1 className="text-lg font-bold text-gray-900 mb-2 ">
                    {car.name}
                  </h1>
                  <div className="w-full mb-3 text-gray-700 text-sm grid grid-cols-2 gap-x-2 gap-y-1 text-left">
                    <p>
                      🚗 <span className="font-semibold">Passengers:</span>{" "}
                      {car.passengers}
                    </p>
                    <p>
                      ⚙️ <span className="font-semibold">Gear:</span> {car.gear}
                    </p>
                    <p>
                      🎒 <span className="font-semibold">Baggage:</span>{" "}
                      {car.baggage}
                    </p>
                    <p>
                      🚪 <span className="font-semibold">Doors:</span>{" "}
                      {car.doors}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-[#5394d2]">
                    {car.price}
                  </span>
                  <button className="animate-tadaWithDelay mt-4 px-6 py-2 bg-[#5394d2] text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarHire;
