import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import accordianData from "@/StaticData/Accordian";
import Image from "next/image";

interface ownerStateProps{
  ownerState: {
    expanded: boolean;
  };
}

// Styled Components
const StyledAccordion = styled(Accordion)(({  ownerState }:ownerStateProps ) => ({
  boxShadow: "none",
  borderBottom: ownerState.expanded ? "none" : "1px solid #E0E0E0",
  backgroundColor: "transparent",
}));

const StyledSummary = styled(AccordionSummary)({
  "& .MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1.2vw",
    color: "#000",
  },
});

const StyledDetails = styled(AccordionDetails)({
  fontFamily: "Poppins",
  color: "#5271FF",
  fontSize: "1.2vw",
  lineHeight: 1.6,
});

export default function AccCompo() {
  const [expanded, setExpanded] = useState<number | false>(false);

  return (
    <div>
      {accordianData.map((item, index) => {
        const isExpanded = expanded === index;
        return (
          <StyledAccordion
            key={index}
            expanded={isExpanded}
            onChange={() => setExpanded(isExpanded ? false : index)}
            ownerState={{ expanded: isExpanded }}
          >
            <StyledSummary expandIcon={<Image src='/accordianArrow.svg' alt="arrow" width={42} height={28} />}>
              <Typography>{item.title}</Typography>
            </StyledSummary>
            <StyledDetails>{item.description}</StyledDetails>
          </StyledAccordion>
        );
      })}
    </div>
  );
}
