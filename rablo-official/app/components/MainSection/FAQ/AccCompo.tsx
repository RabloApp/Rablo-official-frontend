import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import accordianData from "@/app/StaticData/Accordian";

// Custom styled components
const StyledAccordion = styled(Accordion)({
  boxShadow: "none",
  borderBottom: "1px solid #E0E0E0",
  backgroundColor: "transparent",
  
});

const StyledSummary = styled(AccordionSummary)({
  "& .MuiTypography-root": {
    fontWeight: 400,
    fontSize: "16px",
    color: "#000000",
    
  },
  "&.Mui-expanded .MuiTypography-root": {
    color: "#000000",
  },
});

const StyledDetails = styled(AccordionDetails)({
  color: "#000000",
  fontSize: "14px",
  lineHeight: "1.6",
  
});

export default function AccCompo() {
  return (
    <div >
      {accordianData.map((item,index)=>{
        return (
          <StyledAccordion key={index}>
        <StyledSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{item.title}</Typography>
        </StyledSummary>
        <StyledDetails>
          {item.description}
        </StyledDetails>
      </StyledAccordion>
        )
      })}
      
    </div>
  );
}
