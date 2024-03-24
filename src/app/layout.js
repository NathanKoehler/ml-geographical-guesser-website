"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
const inter = Inter({ subsets: ["latin"] });
import { getInitColorSchemeScript } from '@mui/joy/styles';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {getInitColorSchemeScript()}
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
