"use client";

import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import Link from "next/link";
import { redirect } from "next/navigation";

const Header = () => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 1:
        
        break;
      default:
        setTab(newValue);
        redirect(`/${newValue}`);
        break;
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
        <Typography level="h4" component="h1">
          ML Georgrapical Guesser Website
        </Typography>
      </Box>

      {/* Navigation links */}
        <Box sx={{ marginRight: 3 }}>
          <Tabs aria-label="Navbar tabs" value={tab} onChange={handleTabChange}>
            <TabList sx={{ height: 64 }}>
              <Tab sx={{ padding: "0 16px" }} >Proposal</Tab>
              <Link href="/docs/Machine_Learning_Proposal.pdf" target="_blank" rel="noopener noreferrer">
                <Tab sx={{ padding: "0 16px", height: "100%" }} >PDF Link</Tab>
              </Link>
            </TabList>
          </Tabs>
        </Box>
      
    </Box>
  );
};

export default Header;
