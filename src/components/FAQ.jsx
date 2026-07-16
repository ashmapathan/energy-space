import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function FAQ({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Energy Space?",
      answer:
        "Energy Space is a fitness platform that helps you track workouts, monitor nutrition, and achieve your fitness goals with personalized plans.",
    },
    {
      question: "Is Energy Space free to use?",
      answer:
        "Yes. Energy Space offers free features for getting started, along with premium features for users who want advanced fitness tools.",
    },
    {
      question: "Can I track my calories and BMI?",
      answer:
        "Absolutely! Energy Space includes calorie and BMI calculators to help you monitor your health and fitness progress.",
    },
    {
      question: "Does Energy Space provide workout plans?",
      answer:
        "Yes. You can receive personalized workout plans based on your fitness goals, experience level, and preferences.",
    },
    {
      question: "Can I access Energy Space on mobile?",
      answer:
        "Yes. Energy Space is designed to be fully responsive, providing a seamless experience across desktops, tablets, and mobile devices.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`py-10 px-6 lg:px-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-gray-50 text-black"
  }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className={`text-center mt-4 mb-12 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
          Find answers to the most common questions about Energy Space.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-md overflow-hidden transition-colors duration-300 ${
    darkMode
      ? "bg-gray-800"
      : "bg-white"
  }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-6 text-left transition ${
              darkMode 
              ? "text-white hover:bg-gray-700"
              : "text-black hover:bg-gray-200"
              }`}
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <span className="text-2xl text-green-600">
                  {openIndex === index ? <HiMinus /> : <HiPlus />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className={`leading-7 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;