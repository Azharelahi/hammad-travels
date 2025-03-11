import { useEffect } from "react";

export default function TermsOfServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative h-60 bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVybXMlMjBvZiUyMHNlcnZpY2VzfGVufDB8fDB8fHww')",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold animate-fade-in">
          Terms of Services
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto my-12 p-6 space-y-8 text-gray-800">
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to Hammad Travels. By using our services, you agree to
            comply with and be bound by the following terms and conditions.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            2. Booking & Payments
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All bookings require advance payment. We use secure payment gateways
            to protect your transactions.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            3. Cancellations & Refunds
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cancellation requests must be made at least 24 hours in advance for
            a full refund. Emergency cancellations may be considered on a
            case-by-case basis.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            4. Car Rental Policies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Drivers must hold a valid license. Any damage to the vehicle must be
            reported immediately.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            5. Privacy & Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We respect your privacy. Your personal details are stored securely
            and are not shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}
