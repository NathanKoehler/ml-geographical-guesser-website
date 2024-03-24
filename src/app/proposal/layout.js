"use client";

import { Box, Container, CssVarsProvider } from "@mui/joy";
import Header from "./components/Header";

export default function ProposalLayout({ children }) {
  return (
    <CssVarsProvider defaultMode="dark">
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100dvw", height: "100dvh" }}>
          <Header />
          { children }
        </Box>
    </CssVarsProvider>
  );
}
