import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const links = [
        {
            text: "Link One",
            href: "https://streamerize.com",
        },
        {
            text: "Link Two",
            href: "https://sicktooth.com",
        },
        {
            text: "Link Three",
            href: "https://sicktooth.com",
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
                    sx={{ color: "var(--fc-gray-200)", marginBottom: "1em" }}
                >
                    Kennedy's Disease Association 2022 PFDD
                </Typography>

                {links.map((item) => {
                    return (
                        <Button
                            href={item.href}
                            rel="noreferrer"
                            target="_blank"
                            sx={{
                                display: "block",
                                color: "var(--fc-gray-400)",
                                "&:hover": {
                                    color: "var(--fc-gray-200)",
                                },
                                width: "fit-content",
                            }}
                        >
                            {item.text}
                        </Button>
                    );
                })}
            </Container>
        </Box>
    );
};

export default Footer;
