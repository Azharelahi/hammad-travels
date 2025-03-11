import { useEffect } from "react";

export default function FAQ() {
      useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      {/* Header Section */}
      <div className="relative h-60 bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://media.istockphoto.com/id/1908249816/photo/hanging-questions.webp?a=1&b=1&s=612x612&w=0&k=20&c=i4CPowz69gYcW1Ji5_WigG1boq6pH5u2iYzXwdrPEG0=", backgroundRepeat:"no-repeat",objectFit:"cover",backgroundPosition:"center"}}>
        <h1 className="text-4xl sm:text-5xl font-bold">Frequently Asked Questions</h1>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto my-12 p-6">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <details key={index} className="bg-white shadow-md p-4 rounded-lg transition-all duration-300">
              <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center">
                {faq.question}
                <span className="text-gray-500">+</span>
              </summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Is my payment secure with Hammad Travels?",
    answer: "Yes, we use encrypted payment gateways to ensure your transactions are secure. Your financial information is never stored or shared.",
  },
  {
    question: "Do you offer refunds in case of emergencies?",
    answer: "Yes, we offer partial or full refunds depending on the nature of the emergency. Please contact our support team for assistance.",
  },
  {
    question: "Can I modify or cancel my car booking?",
    answer: "Yes, you can modify or cancel your booking. Cancellation policies may apply based on the notice period provided.",
  },
  {
    question: "What happens if my rental car breaks down?",
    answer: "In case of a breakdown, we provide 24/7 roadside assistance. A replacement vehicle will be arranged promptly.",
  },
  {
    question: "Are my personal details safe with Hammad Travels?",
    answer: "Absolutely. We comply with data protection laws and never share your personal details with third parties.",
  },
];
