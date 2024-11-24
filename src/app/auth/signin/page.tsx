import Login from "@/components/Authentication/Login/Login";
import AuthLayout from "@/components/Layouts/AuthLayout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn: React.FC = () => {
  return (
    <AuthLayout>
      {/* <Breadcrumb pageName="Sign In" /> */}
      <Login />
    </AuthLayout>
  );
};

export default SignIn;
