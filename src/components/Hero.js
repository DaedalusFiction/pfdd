import { Box, Container, Typography } from "@mui/material";
import React from "react";
// import heroImage from "../assets/images/KDMen.jpg";
import heroImage from "../assets/images/kdabanner.png";

const Hero = () => {
    return (
        <Container>
            <Box sx={{ marginTop: "1rem" }}>
                <img
                    src={heroImage}
                    alt="event banner"
                    style={{ width: "100%", height: "auto" }}
                />
            </Box>
        </Container>
    );
};

export default Hero;

// old banner
//         <Box
//             sx={{
//                 backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
//   url(${heroImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "50% 65%",
//             }}
//         >
//             <Container>
//                 <Box
//                     sx={{
//                         padding: "14vw 0 2rem 0",
//                     }}
//                 >
//                     <Typography
//                         variant="h1"
//                         sx={{
//                             color: "var(--fc-gray-200)",
//                             textShadow: "5px 5px 5px black",
//                         }}
//                     >
//                         2022 PFDD
//                     </Typography>
//                     <Typography
//                         variant="h5"
//                         sx={{
//                             color: "var(--fc-gray-400)",
//                             textShadow: "5px 5px 5px black",
//                         }}
//                     >
//                         Learning through Listening
//                     </Typography>
//                 </Box>
//             </Container>
//         </Box>
