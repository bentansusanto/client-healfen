import { fontHeading } from "@/components/common/FontFamily";
import { homeHero } from "@/libs/HomeData";
import Image from "next/image";

const Herosection = () => {
 
  return (
    <div className="mt-20 px-5 md:px-8 lg:px-20 xl:px-40">
      <div 
        className="flex flex-col-reverse items-center 
        justify-between space-x-0 lg:flex-row lg:space-x-20 lg:space-y-0"
      >
        <div data-aos="fade-up" className="mt-5 space-y-3 lg:mt-0">
          <h1
            className={`${fontHeading.className} lg:text-5xl text-4xl font-bold`} style={{lineHeight: "150%"}}
          >
            {homeHero.heading}
          </h1>
          <p className="pb-3 text-gray-500 max-w-xl">{homeHero.body}</p>
          <div className="flex items-center space-x-2">
            <button className="rounded-md bg-blue px-6 py-2.5 text-white transition-all duration-300 hover:-translate-y-1">
              Get Started
            </button>
          </div>
        </div>
        <div data-aos="zoom-in">
          <Image
            src={require(`@/assets/images/${homeHero.bg_section}`)}
            alt="bg-herosection"
            className="xl:max-w-2xl lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
