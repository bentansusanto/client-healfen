import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DashboardLayout";
import Login from "@/components/Authentication/Login/Login";
import AuthLayout from "@/components/Layouts/AuthLayout";

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
