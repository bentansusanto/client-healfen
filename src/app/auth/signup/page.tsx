import Register from "@/components/Authentication/Register/Register";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Healfen App | Create New Acccount",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

const SignUp: React.FC = () => {
  return (
    <AuthLayout>
      <Register/>
    </AuthLayout>
  );
};

export default SignUp;
