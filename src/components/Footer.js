import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const links = [
        {
            text: "FDA's PFDD Information",
            href: "https://www.fda.gov/drugs/development-approval-process-drugs/cder-patient-focused-drug-development",
        },
        {
            text: "Kennedy's Disease Association",
            href: "https://kennedysdisease.org",
        },
    ];
    return (
        <Box
            sx={{
                backgroundColor: "var(--bg-accent)",
                padding: "2rem 0",
            }}
        >
            <Container>
                <Typography
                    variant="h6"
                    sx={{ color: "white", marginBottom: "1em" }}
                >
                    Kennedy's Disease Association 2022 PFDD
                </Typography>

                {links.map((item, index) => {
                    return (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography
                                sx={{ color: "var(--fc-gray-200)" }}
                                gutterBottom
                            >
                                {item.text}
                            </Typography>
                        </a>
                    );
                })}
            </Container>
        </Box>
    );
};

export default Footer;
