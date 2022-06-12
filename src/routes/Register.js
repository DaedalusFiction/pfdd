import { useState } from "react";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import emailjs from "@emailjs/browser";
import Selecter from "../components/Selecter";

const Volunteer = () => {
    const selectOptions = [
        "Government",
        "Academia",
        "Pharmaceutical Company",
        "Medical Researcher",
        "Other",
        "None",
    ];
    const [nameError, setNameError] = useState(false);

    const [emailError, setEmailError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [telephoneError, setTelephoneError] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = document.getElementById("input-name").value;
        const address = document.getElementById("input-address").value;
        const telephone = document.getElementById("input-telephone").value;
        const email = document.getElementById("input-email").value;
        const comment = document.getElementById("input-comment").value;

        setNameError(false);
        setEmailError(false);
        setAddressError(false);
        setTelephoneError(false);
        if (name === "") {
            setNameError(true);
        }
        if (email === "") {
            setEmailError(true);
        }
        if (address === "") {
            setAddressError(true);
        }
        if (telephone === "") {
            setTelephoneError(true);
        }

        const volunteer = {
            name: name,
            email: email,
            address: address,
            telephone: telephone,
            comment: comment,
        };

        setIsSubmitted(true);

        var templateParams = {
            name: name,
            email: email,
            address: address,
            telephone: telephone,
            comment: comment,
        };

        emailjs
            .send(
                "service_tmo76bn",
                "template_ggro2co",
                templateParams,
                "aMDOy4kUud9rd0Yg9"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
    };
    return (
        <Container maxWidth="md">
            <div className="volunteer">
                <Typography variant="h2" sx={{ margin: ".7em 0" }}>
                    Register
                </Typography>
                <Typography
                    sx={{
                        maxWidth: "75ch",
                        color: "var(--fc-gray-800)",
                        margin: "1em 0",
                    }}
                >
                    Complete the form below to register for the PFDD meeting on{" "}
                    <strong>November 9, 2022.</strong> An email with the Zoom
                    link for the meeting will be sent to you approximately one
                    week before the meeting.
                </Typography>
                <Typography
                    sx={{
                        maxWidth: "75ch",
                        color: "var(--fc-gray-800)",
                        margin: "1em 0 2em 0",
                    }}
                >
                    Please note that you <strong>DO NOT</strong> need to
                    complete this form if you have already registered (or will
                    register) for the KDA conference from{" "}
                    <strong>November 9-11, 2022.</strong> The link for the PFDD
                    meeting will be sent to you along with a separate link for
                    the remainder of the conference.
                </Typography>

                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            gap: "1em",
                            marginBottom: "3rem",
                        }}
                    >
                        <TextField
                            // onChange={(e) => {
                            //     setName(e.target.value);
                            // }}
                            id="input-name"
                            label="Name"
                            variant="outlined"
                            required
                            size="small"
                            error={nameError}
                        />
                        <TextField
                            // onChange={(e) => {
                            //     setEmail(e.target.value);
                            // }}
                            id="input-email"
                            label="Email"
                            variant="outlined"
                            required
                            size="small"
                            error={emailError}
                        />

                        <TextField
                            // onChange={(e) => {
                            //     setTelephone(e.target.value);
                            // }}
                            id="input-telephone"
                            label="Telephone"
                            variant="outlined"
                            required
                            size="small"
                            error={telephoneError}
                        />
                        <Selecter selectOptions={selectOptions} />
                        <TextField
                            // onChange={(e) => {
                            //     setName(e.target.value);
                            // }}
                            id="input-comment"
                            label="Comment (optional)"
                            variant="outlined"
                            multiline
                            rows={4}
                            size="medium"
                            sx={{ minWidth: "40ch" }}
                        />
                        {!isSubmitted && (
                            <Button
                                id="button-submit"
                                type="submit"
                                variant="contained"
                                endIcon={<KeyboardArrowRightIcon />}
                            >
                                Submit
                            </Button>
                        )}
                    </Box>

                    {isSubmitted && (
                        <p>
                            Thank you for volunteering to help with the 2022
                            PFDD!
                        </p>
                    )}
                </form>
            </div>
        </Container>
    );
};

export default Volunteer;
