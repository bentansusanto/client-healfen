import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import AuthLayout from "@/components/Layouts/AuthLayout";
import Register from "@/components/Authentication/Register/Register";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
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
