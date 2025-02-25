import React from "react";
import Heading from "../../components/Heading/Heading";
import civic from "./../../assets/images/cars/civic.jpg";
import revo from "./../../assets/images/cars/revo.jpg";
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
    },
  ];

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
                  <h1 className="text-lg font-bold text-gray-900 mb-2">
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
                  <span className="text-2xl font-bold text-indigo-600">
                    {car.price}
                  </span>
                  <button className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
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
