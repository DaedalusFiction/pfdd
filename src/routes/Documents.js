import { Box, Container, Grid, Typography } from "@mui/material";
import carshow from "../assets/images/carshow.jpg";
import cured from "../assets/images/carshow.jpg";
import nashville from "../assets/images/carshow.jpg";
import intent01 from "../assets/images/intent01.jpg";
import intent02 from "../assets/images/intent02.jpg";
import intent03 from "../assets/images/intent03.jpg";
import draftAgenda from "../assets/images/draftAgenda.jpg";
import ModalImage from "react-modal-image";

const Events = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ margin: "2em 0 0 0" }}>
                    Important Documentation
                </Typography>
                <Typography sx={{ margin: "1em 0 2em 0" }}>
                    Click on the photos below for a larger view!
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography
                                variant="h4"
                                sx={{ marginBottom: "2.3em" }}
                            >
                                Letter of Intent, page 1
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={intent01}
                                    medium={intent01}
                                    alt="letter of intent page 1"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">
                                Letter of Intent, page 2
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={intent02}
                                    medium={intent02}
                                    alt="letter of intent page 2"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">
                                Letter of Intent, page 3
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={intent03}
                                    medium={intent03}
                                    alt="letter of intent page 3"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">Agenda (Draft)</Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={draftAgenda}
                                    medium={draftAgenda}
                                    alt="agenda"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Events;
