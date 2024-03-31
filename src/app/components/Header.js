"use client";

import React, { useMemo } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const tab = useMemo(() => {
    return pathname.slice(1);
  }, [pathname]);

  const handleTabChange = (event, newValue) => {
    if (newValue !== "none") {
      router.push(`/${newValue}`);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64,
        borderBottom: "2px solid rgba(255, 255, 255, 0.12)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: 3 }}>
        <ShareLocationIcon sx={{ marginRight: 1, color: "lightgreen" }} />
        <Typography variant="h6" component="h1">
          ML Geographical Guesser Project
        </Typography>
      </Box>

      <Box sx={{ marginRight: 3 }}>
        <Tabs aria-label="Navbar tabs" value={tab} onChange={handleTabChange}>
          <Tab label="Home" sx={{ padding: "24px 16px" }} value="home" />
          <Tab
            label="Proposal"
            sx={{ padding: "24px 16px" }}
            value="proposal"
          />
          <Tab label="Midterm" sx={{ padding: "24px 16px" }} value="midterm" />
          <Tab
            onClick={() => router.push("/docs/Machine_Learning_Proposal.pdf")}
            label="Proposal PDF"
            sx={{ padding: "24px 16px" }}
            value="none"
          />
          <Tab
            onClick={() => router.push("/docs/Midterm_Checkpoint.pdf")}
            label="Midterm PDF"
            sx={{ padding: "24px 16px" }}
            value="none"
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;
