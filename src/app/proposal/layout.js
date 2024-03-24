"use client";

import { Box } from "@mui/material";
import Header from "./components/Header";


export default function ProposalLayout({ children }) {

  return (
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100dvw", height: "100dvh", overflowX: "hidden" }}>
        <Header />
        { children }
      </Box>
  );
}
