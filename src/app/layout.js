"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
const inter = Inter({ subsets: ["latin"] });
import { getInitColorSchemeScript } from '@mui/joy/styles';
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body>
        {getInitColorSchemeScript()}
        <ThemeRegistry>{mounted ? children : <></>}</ThemeRegistry>
      </body>
    </html>
  );
}
