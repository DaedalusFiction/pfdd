import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <Box>
            <Hero />
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={9}>
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "center",
                                margin: "2em 0 .75em 0",
                            }}
                        >
                            What is Kennedy's Disease?
                        </Typography>
                        <div className="video-container">
                            <iframe
                                width="853"
                                height="480"
                                src="https://firebasestorage.googleapis.com/v0/b/roadtrip-96db2.appspot.com/o/videos%2Fkennedy's_disease_short_promo_v3%20(540p).mp4?alt=media&token=8059c0cb-0d4b-4627-9350-874414526c8a"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                        <Typography
                            variant="h2"
                            sx={{
                                textAlign: "center",
                                margin: "2em 0 .75em 0",
                            }}
                        >
                            What is a PFDD?
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: "75ch",
                                color: "var(--fc-gray-800)",
                                margin: "0 auto",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minus, libero delectus perferendis facilis
                            consequuntur voluptatibus culpa rem itaque
                            dignissimos eos suscipit ea tempore molestiae
                            consectetur ducimus voluptates enim est! Libero
                            dicta blanditiis, suscipit aliquam consequuntur in,
                            cum aliquid ex rem delectus quam, nesciunt nam.
                            Laudantium sequi deleniti voluptate molestiae quod!
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: "75ch",

                                color: "var(--fc-gray-800)",
                                margin: "1em auto",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Minus, libero delectus perferendis facilis
                            consequuntur voluptatibus culpa rem itaque
                            dignissimos eos suscipit ea tempore molestiae
                            consectetur ducimus voluptates enim est!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
