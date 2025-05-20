'use client';

import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import accordianData from "@/StaticData/Accordian";

interface ownerStateProps {
  ownerState: {
    expanded: boolean;
  };
}

// Styled Accordion with conditional border and no default divider
const StyledAccordion = styled(Accordion)(({ ownerState }: ownerStateProps) => ({
  boxShadow: "none",
  borderBottom: ownerState.expanded ? "none" : "1px solid #E0E0E0",
  backgroundColor: "transparent",
  "&:before": {
    display: "none", // Hide default MUI bottom divider line
  },
}));

// Styled Summary
const StyledSummary = styled(AccordionSummary)({
  "& .MuiTypography-root": {
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "1.2vw",
    color: "#000",
  },
});

// Styled Details
const StyledDetails = styled(AccordionDetails)({
  fontFamily: "Poppins",
  color: "#5271FF",
  fontSize: "1.2vw",
  lineHeight: 1.6,
});

export default function AccCompo() {
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    Array(accordianData.length).fill(false)
  );

  const handleToggle = (index: number) => {
    const updatedStates = [...expandedStates];
    updatedStates[index] = !updatedStates[index]; // Toggle only the clicked index
    setExpandedStates(updatedStates);
  };

  return (
    <div>
      {accordianData.map((item, index) => {
        const isExpanded = expandedStates[index];
        return (
          <StyledAccordion
            key={index}
            expanded={isExpanded}
            onChange={() => handleToggle(index)}
            ownerState={{ expanded: isExpanded }}
          >
            <StyledSummary
              expandIcon={
                <Image src="/accordianArrow.svg" alt="arrow" width={42} height={28} />
              }
            >
              <Typography>{item.title}</Typography>
            </StyledSummary>
            <StyledDetails>{item.description}</StyledDetails>
          </StyledAccordion>
        );
      })}
    </div>
  );
}
