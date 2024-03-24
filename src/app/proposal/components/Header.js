'use client'

import React, { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [tab, setTab] = useState("proposal");
  const router = useRouter();

  const handleTabChange = (event, newValue) => {
    if (newValue !== "none") {
      setTab(newValue);
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
      {/* Logo and title section */}
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: 3 }}>
        <ShareLocationIcon sx={{ marginRight: 1, color: "lightgreen" }} />
        <Typography variant="h6" component="h1">
          ML Geographical Guesser Website
        </Typography>
      </Box>

      {/* Navigation links */}
      <Box sx={{ marginRight: 3 }}>
        <Tabs aria-label="Navbar tabs" value={tab} onChange={handleTabChange}>
          <Tab label="Proposal" sx={{ padding: "0 16px" }} value="proposal" />
          {/* Using Next.js Link for client-side navigation */}
          <Tab
            onClick={() => router.push("/docs/Machine_Learning_Proposal.pdf")}
            label="PDF Link"
            sx={{ padding: "0 16px" }}
            value="none"
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;
