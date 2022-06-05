import { Box, Container, Grid, Typography } from "@mui/material";
import carshow from "../assets/images/carshow.jpg";
import cured from "../assets/images/carshow.jpg";
import nashville from "../assets/images/carshow.jpg";
import dallas from "../assets/images/carshow.jpg";
import ModalImage from "react-modal-image";

const Events = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant="h2" sx={{ margin: "2em 0 0 0" }}>
                    Upcoming Events
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
                                30 April-May 1: Dallas
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={dallas}
                                    medium={dallas}
                                    alt="dallas itinerary"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">
                                5 May: Nashville, Lane Motor Museum
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={nashville}
                                    medium={nashville}
                                    alt="nashville itinerary"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">
                                13-14 May: Carlisle Import & Performance
                                Nationals
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={carshow}
                                    medium={carshow}
                                    alt="carshow itinerary"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="news-container">
                            <Typography variant="h4">
                                15 May: Fundraiser in Columbia, Maryland
                            </Typography>
                            <Box>
                                <ModalImage
                                    // className="gallery-photo"
                                    small={cured}
                                    medium={cured}
                                    alt="cured itinerary"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </Box>
                            <a
                                href="https://www.kennedysdisease.org/kda-campaigns"
                                style={{
                                    color: "blue",
                                    fontSize: "1.3rem",
                                }}
                            >
                                Click Here and select "Cured, 18th and 21st" to
                                reserve your spot!
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Events;
