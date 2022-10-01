import { useState } from "react";
import {
    Button,
    TextField,
    Container,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import emailjs from "@emailjs/browser";
import Selecter from "../components/Selecter";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

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
    const [telephoneError, setTelephoneError] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [affiliation, setAffiliation] = useState("");
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (event) => {
        setAffiliation(event.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailError(!ValidateEmail(e.target.value));
    };

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        console.log("invalid email");
        return false;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = document.getElementById("input-name").value;
        const telephone = document.getElementById("input-telephone").value;
        const email = document.getElementById("input-email").value;
        const comment = document.getElementById("input-comment").value;

        setNameError(false);
        setTelephoneError(false);
        setSubmitError(false);
        if (name === "") {
            setNameError(true);
        }
        if (email === "") {
            setEmailError(true);
        }
        if (telephone === "") {
            setTelephoneError(true);
        }

        var templateParams = {
            website: "PFDD",
            name: name,
            email: email,
            affiliation: affiliation,
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
                    setIsSubmitted(true);
                },
                function (error) {
                    console.log("FAILED...", error);
                    setSubmitError(true);
                }
            );

        await setDoc(doc(db, "volunteers", name), templateParams);
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

                {!isSubmitted && (
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
                                onChange={handleEmailChange}
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
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Affiliation</InputLabel>
                                    <Select
                                        value={affiliation}
                                        label="Affiliation"
                                        onChange={handleChange}
                                    >
                                        {selectOptions.map((option) => {
                                            return (
                                                <MenuItem
                                                    key={option}
                                                    value={option}
                                                >
                                                    {option}
                                                </MenuItem>
                                            );
                                        })}
                                    </Select>
                                </FormControl>
                            </Box>
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
                    </form>
                )}

                {isSubmitted && (
                    <Typography
                        sx={{ marginBottom: "3em", fontWeight: "bold" }}
                    >
                        Thank you for signing up to attend the 2022 PFDD!
                    </Typography>
                )}
                {submitError && (
                    <Typography>
                        Something went wrong! Please reload and try again.
                        Contact hello@fictionalweb.com if you continue to have
                        problems.
                    </Typography>
                )}
            </div>
        </Container>
    );
};

export default Volunteer;
