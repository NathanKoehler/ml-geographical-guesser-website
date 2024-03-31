"use client";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import { Box } from "@mui/material";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100dvw",
                height: "100dvh",
                overflowX: "hidden",
              }}
            >
              <Header />
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
