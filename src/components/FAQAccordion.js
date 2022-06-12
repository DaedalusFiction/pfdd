import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function FAQAccordion({ FAQs }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {FAQs.map((FAQ, index) => {
                return (
                    <Accordion
                        key={index}
                        expanded={expanded === "panel" + index}
                        onChange={handleChange("panel" + index)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: "90%", flexShrink: 0 }}>
                                {FAQ.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box>{FAQ.answer}</Box>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
