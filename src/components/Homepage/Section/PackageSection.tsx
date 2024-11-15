import { rupiah } from "@/components/common/Currency";
import { fontHeading } from "@/components/common/FontFamily";
import { packageData } from "@/libs/HomeData";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { MdStars } from "react-icons/md";

const PackageSection = () => {
  return (
    <div className="mt-20 px-5 md:px-8 lg:px-20 xl:px-40">
      <div className="space-y-2">
        <button
          disabled
          data-aos="fade-up"
          className="mx-auto flex items-center space-x-2 rounded-full border border-gray-300 px-6 py-2.5 text-gray-500"
        >
          <div className="text-xl">
            <AiOutlineProduct />
          </div>
          <p className="text-sm">{packageData.subheading}</p>
        </button>
        <div
          className="mx-auto max-w-2xl space-y-3 text-center"
          data-aos="fade-up"
        >
          <h1
            className={`${fontHeading.className} text-2xl font-bold lg:text-3xl`}
            style={{ lineHeight: "150%" }}
          >
            {packageData.heading}
          </h1>
        </div>
      </div>
      {/* list package */}
      <div data-aos="fade-up" className="mx-auto mt-10 flex lg:flex-row flex-col justify-center gap-5">
        {packageData.package?.map((item: any, index: any) => (
          <div
            key={index}
            className={`${item.recomended === true ? "bg-blue text-white shadow-2xl shadow-gray-200" : "border-gray-200"} relative rounded-xl border p-5`}
          >
            <div className="space-y-2">
              <h1 className={`${fontHeading.className} text-2xl font-bold`}>
                {item.title}
              </h1>
              <p
                className={`${item.recomended !== true && "text-blue"} text-lg font-bold`}
              >
                {rupiah(item.price)} /{" "}
                <span className="text-[15px] font-normal">
                  {item.subs_detail}
                </span>
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {item.benefit.map((list: any, idx: any) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="rounded-full bg-green-500 p-1 text-sm text-white">
                    <IoCheckmarkDoneOutline />
                  </div>
                  <p
                    className={`${item.recomended !== true && "text-gray-400"}`}
                  >
                    {list}
                  </p>
                </div>
              ))}
            </div>
            {item.recomended === true && (
              <div className="absolute right-3 top-3 rounded-full bg-white text-4xl text-orange-500">
                <MdStars />
              </div>
            )}
            <button
              className={`${item.recomended === true ? "bg-white text-blue" : "bg-blue text-white"} mt-10 w-full rounded-lg py-3 text-lg font-semibold`}
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageSection;
