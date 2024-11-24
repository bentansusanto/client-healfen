import { Mobile } from "@/components/common/MediaQuery";
import React from "react";

const FormRegister = () => {
    const {isMobile, isTablet} = Mobile();
  return (
    <form action="#" className={`${isMobile ? "w-[80vw]" : isTablet? "w-[50vw]" :  "w-auto"}`}>
      <div className="mb-3 w-full space-y-2">
        <input
          type="text"
          required
          placeholder="Enter your name"
          className="w-full rounded-md border border-gray-200 bg-transparent p-3 outline-none transition-all duration-300 focus:border-blue"
        />
      </div>
      <div className="mb-3 w-full space-y-2">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-200 bg-transparent p-3 outline-none transition-all duration-300 focus:border-blue"
        />
      </div>
      <div className="mb-3 w-full space-y-2">
        <input
          type="password"
          required
          placeholder="Enter your password"
          className="w-full rounded-md border border-gray-200 bg-transparent p-3 outline-none transition-all duration-300 focus:border-blue"
        />
      </div>
      <div className="mb-3 w-full space-y-2">
        <p className="text-sm text-gray-400">
          By login in you agree to our{" "}
          <span className="text-blue">Term to use</span>and{" "}
          <span className="text-blue">Privacy policy </span>
        </p>
      </div>
      <div>
        <button type="submit" className="w-full text-white font-semibold rounded-md bg-blue p-3">
          Register Now
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
