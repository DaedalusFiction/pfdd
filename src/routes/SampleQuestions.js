import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const panelOneQuestions = [
    {
        question:
            "Did you know of KD prior to being tested for it? What symptoms were instrumental in you seeing a physician and being tested for KD?",
    },
    {
        question:
            "Looking back, did you exhibit any minor symmptoms before deciding to be tested that you can now attribute to KD?",
    },
    {
        question:
            "How long ago did you discover that you had KD? How have the symptoms progressed since then?",
    },
    {
        question:
            "What aspects of KD have th emost significant impact on your life?",
    },
    {
        question:
            "Are there activities to you that you can no longer perform due to KD? How do you deal with these?",
    },
    {
        question:
            "What changes have you noticed over time that you can now attribute to your KD?",
    },
    {
        question: "What worries you the most about KD?",
    },
    {
        question:
            "Are there any non-muscle related changes that you feel can be attributed to KD? Is this based on discussions with physicians, other patients, personal research, or something else? How have these affected your quality of life?",
    },
];

const panelTwoQuestions = [
    { question: "Do you regularly see a physician regarding your KD?" },
    { question: "Do you do anything else to treat your KD?" },
    {
        question:
            "Do you exercise regularly, and what type of exercise? If so, do you believe this helps with your KD symptoms?",
    },
    {
        question:
            "Please describe your diet. Do you think nutrition is an important part of dealing with KD?",
    },
    {
        question:
            "How well does your current treatment address KD symptoms? How does it help in your daily life?",
    },
    {
        question:
            "Until a cure for KD is found, what is your view of an ideal treatment?",
    },
    {
        question:
            "What specific things would this ideal treatment allow you to do in your life?",
    },
    {
        question:
            "Assuming an ideal treatment is not available, what do you feel is the least effect that a treatment should have to make it worthwhile?",
    },
];

const SampleQuestions = () => {
    return (
        <Box sx={{ padding: "4rem 0" }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ marginBottom: ".5em" }}
                >
                    Example PFDD Questions for KDA Conference
                </Typography>
                <Typography variant="h5" component="h2">
                    Panel 1: Health Effects and Daily Impacts of KD, responding
                    to these questions:
                </Typography>
                <Container maxWidth="md">
                    <List sx={{ listStyleType: "decimal", pl: 3 }}>
                        {panelOneQuestions.map((question, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    sx={{ display: "list-item" }}
                                >
                                    <ListItemText>
                                        {question.question}
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </Container>
                <Typography variant="h5" component="h2">
                    Panel 2: Patient Perspectives on Potential Treatments for
                    KD, responding to these questions:
                </Typography>
                <Container maxWidth="md">
                    <List sx={{ listStyleType: "decimal", pl: 3 }}>
                        {panelTwoQuestions.map((question, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    sx={{ display: "list-item" }}
                                >
                                    <ListItemText>
                                        {question.question}
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </Container>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Click{" "}
                    <Link className="page-link" to="/register">
                        here
                    </Link>{" "}
                    to register for this event.
                </Typography>
            </Container>
        </Box>
    );
};

export default SampleQuestions;
