"use client";
import { fontBody } from "@/components/common/FontFamily";
import Loader from "@/components/common/Loader";
import 'aos/dist/aos.css';
import "@/css/satoshi.css";
import "@/css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import React, { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className={`${fontBody.className} dark:bg-boxdark-2 dark:text-bodydark`}>
      
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
