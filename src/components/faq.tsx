import { useState } from "react";
import { faqItems } from "../lib/faq";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto text-white rounded-lg shadow-lg px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h6 className="text-3xl font-medium text-primary">
            Frequently Asked Questions
          </h6>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                openIndex === index
                  ? "bg-blue-900"
                  : "hover:scale-105 bg-[#1a2147]"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-blue-300 hover:text-primary"
              >
                <span>{item.question}</span>
                <span className="text-2xl font-bold">
                  {openIndex === index ? (
                    <AiFillMinusCircle />
                  ) : (
                    <AiFillPlusCircle />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-screen px-5 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
