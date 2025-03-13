import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import logo from "./../../assets/images/logo/logo4.png";
import "animate.css";
import HeadlineTicker from "../../components/HeadlineTicker";

const HireDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!car) return <p>No car selected!</p>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const recipient = "contact.hammadtravel@gmail.com";
      const subject = encodeURIComponent("🚗 Car Booking Request");

      const body = encodeURIComponent(
        `📌 Car Booking Details:
        
        🚘 Car Name: ${formData.carName}
        ⚙️ Gear Type: ${formData.gear}
        ------------------------------
        👤 Customer Details:
        
        🏷️ Name: ${formData.name}
        📧 Email: ${formData.email}
        📞 Phone: ${formData.phone}
        ------------------------------
        📝 Message:
        
        ${formData.message || "No additional message provided."}
        ------------------------------`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 2000);
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
      <div style={{ marginTop: "10px", marginBottom: "10px" }}></div>
      {/* Booking Section */}
   {/* Booking Section */}
<section className="bg-gray-100 py-12 flex justify-center min-h-screen">
  <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-6">
    {/* Left: Booking Form */}
    <div className="relative w-full max-w-lg lg:w-3/5 p-6 rounded-lg shadow-lg flex flex-col justify-center bg-white/70 backdrop-blur-md">
      {/* Background Logo */}
      <img
        src={logo}
        alt="Hammad Travels Logo"
        className="absolute inset-0 w-full h-full object-contain opacity-20 blur-md mx-auto"
      />

      {/* Form Container */}
      <div className="relative z-10">
        <HeadlineTicker text="📢 We are not relying on third-party email services! You will be automatically redirected to your preferred email app with the entered data. Just fill the form, verify and click send! 📧" />
        <h2 className="text-lg lg:text-xl font-bold text-center mb-4 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          bg-clip-text text-transparent animate-bounce-delay">
          Book This Car
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Car Name
              </label>
              <input
                type="text"
                name="carName"
                value={formData.carName}
                readOnly
                className="w-full px-3 py-1.5 border-2 border-transparent bg-gray-200/80 text-sm rounded-md 
                focus:border-gradient focus:ring-2 focus:ring-[#ff7eb3] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Gear Type
              </label>
              <input
                type="text"
                name="gearType"
                value={formData.gear}
                readOnly
                className="w-full px-3 py-1.5 border-2 border-transparent bg-gray-200/80 text-sm rounded-md 
                focus:border-gradient focus:ring-2 focus:ring-[#ff7eb3] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border-2 border-gray-300 rounded-md text-sm bg-transparent 
                focus:ring-2 focus:ring-[#ff7eb3] focus:border-[#ff7eb3] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border-2 border-gray-300 rounded-md text-sm bg-transparent 
                focus:ring-2 focus:ring-[#ff7eb3] focus:border-[#ff7eb3] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border-2 border-gray-300 rounded-md text-sm bg-transparent 
                focus:ring-2 focus:ring-[#ff7eb3] focus:border-[#ff7eb3] focus:outline-none"
                required
              />
            </div>
            <div className="lg:col-span-2">
              <label className="block text-gray-700 text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-1.5 border-2 border-gray-300 rounded-md text-sm bg-transparent 
                focus:ring-2 focus:ring-[#ff7eb3] focus:border-[#ff7eb3] focus:outline-none"
                placeholder="Any special request?"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white text-sm font-semibold shadow-md 
            bg-gradient-to-r from-[#ff7eb3] to-[#5394d2] hover:from-[#e56a9e] hover:to-[#437fbe] 
            transition-all duration-300 hover:scale-[1.02] focus:ring-4 focus:ring-[#ff7eb3]/50"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Opening mail to send message..."
              : "Submit Booking"}
          </button>
        </form>
      </div>
    </div>

    {/* Right: Contact Info (Centered & Middle) */}
    <div className="w-full lg:w-2/5 flex flex-col justify-center items-center text-center flex-grow">
      <img
        src={logo}
        alt="Hammad Travels Logo"
        className="w-32 lg:w-40 mb-4"
      />
      <h2 className="text-lg lg:text-xl font-semibold mb-2">
        Rent The Car With Us!
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed max-w-md">
        At <strong>Hammad Travels</strong>, we offer premium car rental
        services tailored to your needs.
        <br /><br />
        Prefer a quicker response? Feel free to <strong>call us</strong> or 
        <strong> reach out on WhatsApp</strong> for instant booking assistance.
        <br /><br />
        Alternatively, fill out the form beside this section, and we'll get 
        back to you as soon as possible.
      </p>
    </div>
  </div>
</section>

    </div>
  );
};

export default HireDetails;
