'use client'
import { fontHeading } from "@/components/common/FontFamily";
import { Mobile } from "@/components/common/MediaQuery";
import image from "@/libs/ImageData";
import Image from "next/image";
import Link from "next/link";
import FormLogin from "./FormLogin";


const Login = () => {
  const {isMobile, isTablet} = Mobile()
  return (
    <div className="relative">
      <div>
        <Image src={image.BgAuthentication} alt="bg-authentication" className="w-screen h-screen"/>
      </div>
      <div className="absolute flex items-center inset-0 justify-center">
        <div className="flex items-center lg:space-x-20 space-x-0">
          {/* bg login */}
          <div>
            {
              !(isMobile || isTablet) && (<Image src={image.BgLoginRegister} alt="bg-register"/>)
            }
            
          </div>
          <div className="space-y-5 lg:space-y-0">
            <Image src={image.LogoHealfen} alt="logo-healfen" className={`${!(isMobile || isTablet) ? "hidden" : "space-y-5"} w-12`}/>
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className={`${fontHeading.className} text-3xl font-bold`}>Login</h1>
                <p className="text-gray-400">I dont have account, <Link className="font-semibold text-blue" prefetch={true} href={'/auth/signup'}>Register Now</Link>
                </p>
              </div>
              <FormLogin/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
