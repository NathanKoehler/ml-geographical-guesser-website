"use client";

import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { red } from "@mui/material/colors";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';

const Header = () => {
  const [tab, setTab] = useState("one");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 64,
      }}
    >
      {/* Logo and title section */}
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
        <ShareLocationIcon sx={{ marginRight: 1, color: "lightgreen" }} />
        <Typography level="h4" component="h1">
          ML Georgrapical Guesser Website
        </Typography>
      </Box>

      {/* Navigation links */}
        <Tabs aria-label="Navbar tabs" defaultValue={0}>
          <TabList sx={{ height: 64 }}>
            <Tab sx={{ padding: "0 16px" }} >Proposal</Tab>
            <Tab sx={{ padding: "0 16px" }} >PDF Link</Tab>
            <Tab sx={{ padding: "0 16px" }} >Members</Tab>
          </TabList>
        </Tabs>
      
    </Box>
  );
};

export default Header;
