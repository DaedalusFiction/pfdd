import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FAQs = [
    {
        question: "Is the FDA sponsoring this meeting?",
        answer: (
            <>
                <Typography>
                    FDA has authorized KDA to conduct an “Externally Led Patient
                    Focused Drug Development” (EL-PFDD) meeting. This means
                    that, while FDA will participate in the meeting as observers
                    and may ask questions during the discussion, KDA will
                    actually lead the meeting. For more information about the
                    FDA process, please visit their website,{" "}
                    <a
                        href="https://www.fda.gov/drugs/development-approval-process-drugs/cder-patient-focused-drug-development"
                        target="_BLANK"
                        rel="noreferrer"
                        style={{ textDecoration: "underline" }}
                    >
                        CDER Patient-Focused Drug Development | FDA.
                    </a>
                </Typography>
            </>
        ),
    },
    {
        question: "Why does the FDA conduct PFDD meetings?",
        answer: (
            <Typography>
                The FDA's view is that “People living with a condition are
                uniquely positioned to inform the understanding of the
                therapeutic context for drug development and evaluation.” The
                lived experiences of patients with a disease provide a unique
                and valuable window into the most troublesome symptoms of a
                disease and the effectiveness of current treatments. Direct
                input from patients helps the FDA evaluate treatments proposed
                by pharmaceutical companies. PFDD meetings have been conducted
                since 2012. For more information about previous PFDDs, visit the
                website,{" "}
                <a
                    href="https://www.fda.gov/industry/prescription-drug-user-fee-amendments/fda-led-patient-focused-drug-development-pfdd-public-meetings"
                    target="_BLANK"
                    rel="noreferrer"
                    style={{ textDecoration: "underline" }}
                >
                    FDA-led Patient-Focused Drug Development (PFDD) Public
                    Meetings | FDA.
                </a>
            </Typography>
        ),
    },
    {
        question: "Why is a PFDD important for Kennedy's Disease (KD)?",
        answer: "The discussions at the PFDD will be documented in a “Voice of the Patient” report that will be used by the FDA in their evaluation of potential new treatments for KD. This information will be very helpful, for example, in evaluating clinical trial results submitted by pharmaceutical companies.",
    },
    {
        question: "Will clinical trials for a KD treatment be starting soon?",
        answer: "While we heard at the 2021 KDA conference that several pharmaceutical companies will begin trials soon, at present we have no information on specific dates or trials. ",
    },
    {
        question:
            "Why are we doing the PFDD as part of KDA's annual conference? ",
        answer: "KDA's annual conference provides a timely and convenient venue for the PFDD.  The first day of our conferences are always focused on patient issues, and the PFDD format allows for detailed and in-depth discussions of topics important to patients and their families as well as for researchers and pharmaceutical companies. ",
    },
    {
        question:
            "Will the results of the PFDD be made available to the general public?",
        answer: "Yes, the “Voice of the Patient” report resulting from the PFDD meeting will be posted on KDA's website and will be made available to the general public by the FDA.",
    },
    {
        question:
            "Do you need to register for the KDA conference to participate in the PFDD? ",
        answer: (
            <Typography>
                No, anyone can participate in the PFDD session which will be
                live-streamed on Zoom. You can register for the PFDD{" "}
                <Link to="register" sx={{ textDecoration: "underline" }}>
                    here.
                </Link>{" "}
                Be sure to include your email to ensure you receive the link for
                the meeting.
            </Typography>
        ),
    },
    {
        question: "How will my information be used?",
        answer: "Any comments or questions from PFDD participants will be recorded and reported in the Voice of the Patient report that will be developed after the meeting.  Individual comments will be reported anonymously--that is, not attributed to a specific person. There will be exceptions, such as speakers and panel participants who are identified in the course of the meeting and who authorize their names to be included in the report. Even in those cases, however, most people will be identified only by first name and initial of their last name.",
    },
];

export default FAQs;
