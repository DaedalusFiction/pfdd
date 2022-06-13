import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/Hero";
import Sidebar from "../components/Sidebar";
import FAQs from "../assets/data/FAQs";

const Home = () => {
    return (
        <Box>
            <Hero />
            <Container>
                <Grid container spacing={8} sx={{ marginBottom: "8rem" }}>
                    <Grid item xs={12} md={9}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: "2.5rem",
                                margin: "1em 0 .75em 0",
                            }}
                        >
                            What is Kennedy's Disease?
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: "75ch",
                                color: "var(--fc-gray-800)",
                                margin: "0 auto 1em auto",
                            }}
                        >
                            Kennedy's Disease (KD), also known as Spinal and
                            Bulbar Muscular Atrophy or SBMA, is a rare,
                            hereditary, adult-onset, neuromuscular disease
                            caused by a repeat expansion of the trinucleotide
                            cytosine-adenine-guanine (CAG) in the androgen
                            receptor (AR) gene. The resulting mutation affects
                            motor neurons and muscles, leading to a slow decline
                            of muscle function. KD is an X-linked disease that
                            affects primarily men; women are carriers and may
                            experience symptoms such as cramping. There is no
                            cure and no effective treatment.
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: "75ch",
                                color: "var(--fc-gray-800)",
                                margin: "0 auto 1em auto",
                            }}
                        >
                            Symptoms generally appear in the mid-40s, although
                            earlier and later onsets have been recorded.
                            Cramping, fasciculations, and a continuing decline
                            in mobility are common. Bulbar manifestations
                            include difficulties with speech and swallowing that
                            may increase over time. Laryngospasms cause a
                            frightening sense of choking, and tongue muscles
                            tend to atrophy over the course of the disease.
                            Endocrine-related abnormalities such as
                            gynecomastia, fatty liver, diabetes, and reduced
                            fertility usually accompany the neuromuscular
                            symptoms.
                        </Typography>
                        <Typography
                            sx={{
                                maxWidth: "75ch",
                                color: "var(--fc-gray-800)",
                                margin: "0 auto 1em auto",
                            }}
                        >
                            Global prevalence estimates for KD range from
                            1:50,000 to 1:30,000 individuals, with higher
                            incidences in some areas of Italy, Japan, and
                            Finland due to multiple founder effects. The actual
                            prevalence may be higher due to cases that are
                            either undiagnosed or misdiagnosed. The most
                            frequent misdiagnosis is the fatal Lou Gehrig's
                            Disease (ALS). Kennedy's disease patients can
                            typically expect a normal lifespan unless KD leads
                            to a catastrophic accident due to a bad fall or to
                            aspiration pneumonia.
                        </Typography>
                        {/* <Box className="embed-youtube">
                            <iframe
                                src="https://firebasestorage.googleapis.com/v0/b/roadtrip-96db2.appspot.com/o/videos%2Fkennedy's_disease_short_promo_v3%20(540p).mp4?alt=media&token=8059c0cb-0d4b-4627-9350-874414526c8a"
                                frameBorder="0"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </Box> */}
                        <Typography
                            variant="h2"
                            sx={{
                                margin: "1em 0 .75em 0",
                                fontSize: "2.5rem",
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
                            The goal of this Patient-Focused Drug Development
                            (PFDD) meeting is to provide the U.S. Food and Drug
                            Administration (FDA), medical product developers,
                            clinicians, and academic researchers an opportunity
                            to hear perspectives from individuals with Kennedy's
                            Disease on the health effects and daily impacts of
                            their Kennedy's Disease, treatment goals, and
                            decision factors considered when seeking out or
                            selecting a treatment. This meeting is being
                            conducted as a parallel effort to FDA's PFDD Program
                            to more systematically gather patients' perspectives
                            on their conditions and available therapies to treat
                            their conditions.
                        </Typography>

                        {/* <Typography
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
                        </Typography> */}
                        <Typography
                            variant="h2"
                            sx={{
                                margin: "1em 0 .75em 0",
                                fontSize: "2.5rem",
                            }}
                        >
                            Frequently Asked Questions
                        </Typography>
                        <FAQAccordion FAQs={FAQs} />
                        {/* {FAQs.map((FAQ) => {
                            return (
                                <Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            maxWidth: "75ch",
                                            color: "var(--fc-gray-800)",
                                            margin: "1em auto",
                                        }}
                                    >
                                        {FAQ.question}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            maxWidth: "75ch",
                                            color: "var(--fc-gray-800)",
                                            margin: "1em auto",
                                        }}
                                    >
                                        {FAQ.answer}
                                    </Typography>
                                </Box>
                            );
                        })} */}
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
