"use client";
import { fontHeading } from "@/components/common/FontFamily";
import { Mobile } from "@/components/common/MediaQuery";
import image from "@/libs/ImageData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtpCodePage = () => {
  const { isMobile, isTablet } = Mobile();
  return (
    <div className="relative">
      <div>
        <Image
          src={image.BgAuthentication}
          alt="bg-authentication"
          className="h-screen w-screen"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-0 lg:space-x-20">
          {/* bg login */}
          <div>
            {!(isMobile || isTablet) && (
              <Image src={image.BgVerifyOtp} alt="bg-register" />
            )}
          </div>
          <div className="space-y-5 lg:space-y-0">
            <Image
              src={image.LogoHealfen}
              alt="logo-healfen"
              className={`${!(isMobile || isTablet) ? "hidden" : "space-y-5"} w-12`}
            />
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className={`${fontHeading.className} text-3xl font-bold`}>
                  Verify Otp Code
                </h1>
                <p className="text-gray-400">
                  I haven't otp code,{" "}
                  <Link
                    className="font-semibold text-blue"
                    prefetch={true}
                    href={"/auth/signin"}
                  >
                    Create new otp
                  </Link>
                </p>
              </div>
              {/* form otp code */}
              <div>
                <form action="#" className={`${isMobile ? "w-[80vw]" : isTablet? "w-[50vw]" :  "w-auto"}`}>
                  <div className="mb-3 w-full space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Enter your otp code"
                      className="w-full rounded-md border border-gray-200 bg-transparent p-3 outline-none transition-all duration-300 focus:border-blue"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue p-3 font-semibold text-white"
                    >
                      Verify Otp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpCodePage;
