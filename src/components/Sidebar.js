import React from "react";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";

const Sidebar = () => {
    return (
        <Box
            sx={{
                position: "sticky",
                top: "0",
                padding: "5rem 0 2rem 0",
            }}
        >
            <Typography variant="h5">Latest News</Typography>
            <Typography>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                aliquid nulla neque modi ipsa, temporibus, libero laboriosam qui
                eligendi quo id, culpa iste? Vero deserunt est odit. Asperiores
                temporibus est molestias ullam! Debitis beatae aperiam sequi
                sint. Veniam, qui deleniti...
            </Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="h5">Useful Links</Typography>
            <Typography>Useful Link</Typography>
            <Typography>Useful Link</Typography>
            <Typography>Useful Link</Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="h5">Support our Cause</Typography>
            <Button variant="contained">Donate</Button>
        </Box>
    );
};

export default Sidebar;
