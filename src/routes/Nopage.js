import { Container, Typography } from "@mui/material";
import React from "react";

const Nopage = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingBottom: "7vw" }}>
            <Typography
                variant="h2"
                sx={{
                    margin: "1em 0 .75em 0",
                }}
            >
                Page Not Found
            </Typography>
            <Typography>
                Whoops! Use one of the links above to visit one of our pages.
            </Typography>
        </Container>
    );
};

export default Nopage;
