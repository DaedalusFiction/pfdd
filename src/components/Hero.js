import { Box, Container, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/images/Jameson.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
  url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 65%",
                padding: "7vw 0",
            }}
        >
            <Container>
                <Typography variant="h1" sx={{ color: "var(--fc-gray-200)" }}>
                    2022 PFDD
                </Typography>
                <Typography variant="h5" sx={{ color: "var(--fc-gray-400)" }}>
                    Learning through Listening
                </Typography>
            </Container>
        </Box>
    );
};

export default Hero;
