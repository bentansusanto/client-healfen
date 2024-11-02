import image from "@/libs/ImageData";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      {/* <Image src={image.LogoHealfen} alt="logo-healfen" className="animate-spin w-[3%]"/> */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Loader;
