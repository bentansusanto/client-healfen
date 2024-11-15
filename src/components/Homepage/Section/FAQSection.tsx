import { fontHeading } from "@/components/common/FontFamily";
import { faqData } from "@/libs/HomeData";
import Image from "next/image";
import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (
    <div className="my-40 px-5 md:px-8 lg:px-20 xl:px-40">
      <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:space-x-20 space-x-0 lg:space-y-0 space-y-10">
        {/* bg faq */}
        <div data-aos="zoom-in">
          <Image src={require(`@/assets/images/${faqData.bg_section}`)} alt="bg-faq" />
        </div>
        {/* content */}
        <div>
        <div className="space-y-2">
          <button
            disabled
            data-aos="fade-up"
            className="flex items-center space-x-2 rounded-full border border-gray-300 px-6 py-2.5 text-gray-500"
          >
            <div className="text-xl">
              <FaQuestionCircle />
            </div>
            <p className="text-sm">{faqData.subheading}</p>
          </button>
          <div
            className="max-w-2xl space-y-3"
            data-aos="fade-up"
          >
            <h1
              className={`${fontHeading.className} text-2xl font-bold lg:text-3xl`}
              style={{ lineHeight: "150%" }}
            >
              {faqData.heading}
            </h1>
          </div>
        </div>
        {/* list faq */}
        <div className="mt-10 max-w-3xl">
              {faqData.faq?.map((faq: any, index: any) => (
                <div
                  data-aos="fade-up"
                  key={index}
                  className="bg-gray-50 p-4 rounded-md mb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between space-x-20 md:space-x-0 items-center py-4 text-left text-lg lg:font-semibold text-gray-800 hover:text-gray-900 transition"
                  >
                    <p>
                      {faq.question}
                    </p>
                    {openIndex === index ? (
                      <div>
                        <FiChevronUp className="text-2xl" />
                      </div>
                    ) : (
                      <div>
                        <FiChevronDown className="text-2xl" />
                      </div>
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openIndex === index ? "max-h-40" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 p-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
