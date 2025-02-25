import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import img from "./../../assets/images/logo/logo4.png";

const HireDetails = () => {
  const { state } = useLocation();
  const car = state?.car;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carName: car?.name || "",
    gear: car?.gear || "",
    message: "",
  });

  if (!car) return <p>No car selected!</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your request has been submitted successfully!");
  };

  return (
    <div>
      <Heading heading={car.name} />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="car"
              src={car.img}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {car.name}
            </h1>
            <p className="mb-8 leading-relaxed">{car.description}</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-gray-100 py-12 bg-cover bg-center">
        <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-start min-h-screen items-center">
          {/* Left: Booking Form */}
          <div className="md:w-1/2 w-full bg-gray-50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-center mb-6">
              Book This Car
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Car Name
                  </label>
                  <input
                    type="text"
                    name="carName"
                    value={formData.carName}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Gear Type
                  </label>
                  <input
                    type="text"
                    name="gearType"
                    value={formData.gear}
                    readOnly
                    className="w-full px-4 py-2 border rounded-lg bg-gray-200 focus:outline-none"
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Any special request?"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
              >
                Submit Booking
              </button>
            </form>
          </div>

          {/* Right: Company Info & Privacy Policy */}
          <div className="md:w-1/2 w-full mt-10 md:mt-0 md:pl-12">
            <h2 className="text-2xl font-bold mb-4">
              Company Information & Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our company ensures complete transparency and security for all car
              rentals. By booking a vehicle, you agree to our terms and
              conditions, including insurance policies and deposit requirements.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <strong style={{fontWeight: "bold"}}>Privacy Policy:</strong> Your personal details will only
              be used for booking confirmation and will not be shared with any
              third party.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireDetails;
