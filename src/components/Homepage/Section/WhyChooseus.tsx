import { Mobile } from "@/components/common/MediaQuery";
import { whyChooseUs } from "@/libs/HomeData";
import image from "@/libs/ImageData";
import Image from "next/image";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { MdOutlineAnalytics, MdOutlineSyncProblem } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const WhyChooseus = () => {
  const { isMobile, isTablet } = Mobile();
  return (
    <div className={`${isMobile || isTablet ? "px-5 md:px-8 py-10" : "lg:pl-20 lg:py-20 xl:pl-40"} mt-40 w-full bg-[#000F22]`}>
      <div className="flex lg:flex-row flex-col-reverse lg:items-center lg:justify-between lg:space-y-0">
        <div className="space-y-8 lg:mt-0 mt-10">
          <div data-aos="fade-up" className="space-y-3">
            <button
              disabled
              data-aos="fade-up"
              className="flex items-center space-x-2 rounded-full border border-gray-500 px-6 py-2.5 text-gray-200"
            >
              <div className="text-xl">
                <GrServices />
              </div>
              <p className="text-sm">{whyChooseUs.subheading}</p>
            </button>
            <h1 className="font-bold text-white lg:text-3xl text-2xl">
              {whyChooseUs.heading}
            </h1>
            <p className="text-gray-400">{whyChooseUs.body}</p>
          </div>
          {/* list benefit */}
          <div className="max-w-xl space-y-8">
            {whyChooseUs.benefit?.map((list, idx) => (
              <div
                data-aos="fade-up"
                key={idx}
                className="flex items-center space-x-4"
              >
                <div className="rounded-md bg-[#001749] p-3 text-4xl text-[#407BFF]">
                  {list.icon === "keuangan" ? (
                    <RiMoneyDollarCircleLine />
                  ) : list.icon === "stocks" ? (
                    <AiOutlineProduct />
                  ) : list.icon === "pelanggan" ? (
                    <FaUsers />
                  ) : (
                    <MdOutlineAnalytics />
                  )}
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-white">{list.title}</p>
                  <p className="text-gray-400">{list.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="xl:w-[55%] lg:w-[70%] w-[100%]" data-aos="zoom-in">
          {
            isMobile || isTablet ? (<Image src={image.BgWhyChooseUs} alt="bg-why-choose-us" className="mx-auto"/>) : (<Image
              src={require(`@/assets/images/${whyChooseUs.bg_section}`)}
              alt="bg-why-choose-us"
            />)
          }
          
        </div>
      </div>
    </div>
  );
};

export default WhyChooseus;
