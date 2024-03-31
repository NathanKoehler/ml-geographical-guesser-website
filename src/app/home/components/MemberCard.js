import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Link,
  Avatar,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const MemberCard = ({ avatar, name, description, url }) => {
  return (
    <Card sx={{ maxWidth: 200, minHeight: 300, mx: 2 }}>
      <CardContent
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Avatar
          src={avatar}
          alt={name}
          sx={{ width: 100, height: 100, margin: "24px auto" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "inherit",
          }}
        >
          <Typography variant="h5" component="div" sx={{ textAlign: "center" }}>
            {name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mx: 1, my: 2 }}
            >
              {description}
            </Typography>
          </Box>
          
          <Link href={url} target="_blank" rel="noopener">
            <Box sx={{ background: "rgba(255, 255, 255, 0.1)", display: "flex", borderRadius: "4px" }}>
            <LinkedInIcon fontSize="large" sx={{ color: "#0077B5" }} />
            
          </Box>
          </Link>
          </Box>
        
      </CardContent>
    </Card>
  );
};
