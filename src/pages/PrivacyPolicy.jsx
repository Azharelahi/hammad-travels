import { useEffect } from "react";
import logo from "./../assets/images/logo/logo4.png";
export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Header Section */}
      <div
        className="relative h-60 w-full bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.istockphoto.com/id/1964515407/photo/cyber-security-and-data-protection-businessman-using-laptop-and-tablet-internet-network.webp?a=1&b=1&s=612x612&w=0&k=20&c=daQbzhhkWUOJuvf29vYLXr9_XrixOhK4GXuEV49khSE=')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto my-12 p-6 space-y-8 text-gray-700 text-center">
        <h2 className="text-3xl font-bold text-gray-900">1. Introduction</h2>
        <p>
          Welcome to Hammad Travels. We are committed to protecting your privacy
          and ensuring that your personal information is handled securely.
        </p>

        <h2 className="text-3xl font-bold text-gray-900">
          2. Information We Collect
        </h2>
        <p>
          We collect information such as your name, contact details, and payment
          information when you use our services.
        </p>

        <h2 className="text-3xl font-bold text-gray-900">
          3. How We Use Your Information
        </h2>
        <p>
          Your information is used to process bookings, provide customer
          support, and enhance your travel experience.
        </p>

        <h2 className="text-3xl font-bold text-gray-900">4. Data Security</h2>
        <p>
          We implement advanced security measures to protect your personal
          details from unauthorized access.
        </p>

        <h2 className="text-3xl font-bold text-gray-900">5. Contact Us</h2>
        <p>
          If you have any concerns about our privacy practices, please contact
          us at:
        </p>
        <p className="font-semibold">📧 contact.hammadtravel@gmail.com</p>
        <p className="font-semibold">📞 +92 334 1111427</p>
      </div>
    </div>
  );
}
