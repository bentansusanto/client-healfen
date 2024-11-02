import Homepage from "@/components/Homepage/Homepage";
import DefaultsLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:"Healfen App | Homepage",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <DefaultsLayout>
      <Homepage/>
    </DefaultsLayout>
  );
}
