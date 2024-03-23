"use client";

import { Box, Container, CssVarsProvider } from "@mui/joy";
import Header from "@/app/proposal/components/Header";
import styles from "@/app/page.module.css";

export default function ProposalLayout({ children }) {
  return (
    <CssVarsProvider defaultMode="dark">
      <main className={styles.main}>
        <Box sx={{ position: "absolute", top: 0, left: 0, width: "100dvw", height: "100dvh" }}>
          <Header />
          { children }
        </Box>
      </main>
    </CssVarsProvider>
  );
}
