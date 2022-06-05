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
            <Typography variant="h5" gutterBottom>
                Useful Links
            </Typography>
            <Typography>Useful Link</Typography>
            <Typography>Useful Link</Typography>
            <Typography>Useful Link</Typography>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography variant="h5" gutterBottom>
                Support our Cause
            </Typography>
            <Button variant="contained">Donate</Button>
        </Box>
    );
};

export default Sidebar;
