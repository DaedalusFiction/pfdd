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
    const navigateToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <Box
            sx={{
                backgroundColor: "var(--bg-accent)",
                padding: "2rem 0",
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                    }}
                >
                    <Box>
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
                    </Box>
                    <Button onClick={navigateToTop} sx={{ color: "white" }}>
                        Back to Top
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
