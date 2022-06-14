import React from "react";
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import banner from "../assets/images/kdabanner.png";
import ModalImage from "react-modal-image";

const Sidebar = () => {
    return (
        <Box
            sx={{
                position: "sticky",
                top: "0",
                padding: "5rem 0 2rem 0",
            }}
        >
            <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "var(--fc-gray-800)" }}
            >
                Useful Links
            </Typography>
            <a
                href="https://kennedysdisease.org"
                target="_blank"
                rel="noreferrer"
            >
                <Typography gutterBottom sx={{ textDecoration: "underline" }}>
                    Kennedy's Disease Association
                </Typography>
            </a>
            <a
                href="https://www.fda.gov/drugs/development-approval-process-drugs/cder-patient-focused-drug-development"
                target="_blank"
                rel="noreferrer"
            >
                <Typography gutterBottom sx={{ textDecoration: "underline" }}>
                    FDA's PFDD Information
                </Typography>
            </a>
            <Divider sx={{ margin: "1rem 0" }} />
            <Typography
                variant="h5"
                sx={{ marginBottom: ".5em", color: "var(--fc-gray-800)" }}
            >
                Support our Cause
            </Typography>
            <Button
                variant="contained"
                href="https://www.kennedysdisease.org/get-involved/donate-now"
                target="_BLANK"
                rel="noreferrer"
            >
                Donate
            </Button>
        </Box>
    );
};

export default Sidebar;
