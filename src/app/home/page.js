"use client";

import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { MemberCard } from "./components/MemberCard";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleLink = (route) => {
    router.push(`/${route}`);
  };

  return (
    <Container>
      <Box sx={{ mx: "auto", my: 12, width: "fit-content" }}>
        <Typography variant="h3" component="h1">
          Machine Learning Geo Guesser
        </Typography>
        <Typography variant="subtitle1">
          Georgia Tech CS 4641 - Machine Learning Group Project
        </Typography>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Project Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, textAlign: "center" }}>
          We are interested in seeing if we can train a model to accurately
          perform this task of identifying key objects that belong to only
          specific parts of the world, and correctly identifying which country
          the street view image is from.
          <br />
          <br />
          This brings us to our problem - there may be certain circumstances in
          which it would be helpful to determine a relative location given a set
          of images, such as crime investigations. Thus, our motivation towards
          a potential solution to this is to start by using the Geoguessr
          dataset found through Kaggle, and train the dataset to determine which
          country it is in...
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            fullWidth
            variant="contained"
            color="warning"
            size="large"
            sx={{ mx: 1 }}
            onClick={() => handleLink("proposal")}
          >
            Read Proposal Report
          </Button>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mx: 1 }}
            onClick={() => handleLink("midterm")}
          >
            Read Midterm Report
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Members
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <MemberCard
            avatar="/ml-geographical-guesser-website/images/ace.jpg"
            name="Aaditya Anugu"
            description="BS CS at Georgia Tech"
            url="https://www.linkedin.com/in/aaditya-anugu-39a97716a/"
          />
          <MemberCard
            avatar="/ml-geographical-guesser-website/images/justin.jpg"
            name="Justin Kang"
            description="BS CS at Georgia Tech"
            url="https://www.linkedin.com/in/justin-kang-aaa942219/"
          />
          <MemberCard
            avatar="/ml-geographical-guesser-website/images/nate.jpg"
            name="Nate Koehler"
            description="BS CS at Georgia Tech"
            url="https://www.linkedin.com/in/natekoehler/"
          />
          <MemberCard
            avatar="/ml-geographical-guesser-website/images/patrick.jpg"
            name="Patrick Soo"
            description="BS CS at Georgia Tech"
            url="https://www.linkedin.com/in/patrick-soo/"
          />
          <MemberCard
            avatar="/ml-geographical-guesser-website/images/mike.jpg"
            name="Zhixuan Wang"
            description="BS CS at Georgia Tech"
            url="https://www.linkedin.com/in/zhixuanwanggt/"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
