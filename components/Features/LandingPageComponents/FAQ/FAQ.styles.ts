import { media } from "@/helpers/mediaQueryHelper";
import styled from "styled-components";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { colors } from "@/constants/theme";

export const MainDiv = styled.div`
	padding: 2rem 2rem 5rem 2rem;
	max-width: 800px;
	margin: 0 auto;
	${media.below925`
    	text-align: center;
		padding: 2rem;
  `}
`;

export const StyledAccordion = styled(Accordion)`
	background: white;
	border-radius: 10px !important;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
	transition: 0.3s ease-in-out;
	&:before {
		display: none;
	}
`;

export const StyledSummary = styled(AccordionSummary)`
	padding: 15px 20px;
	border-radius: 10px;
	&:hover {
		background-color: ${colors.lightGray};
	}
`;

export const StyledExpandIcon = styled(ExpandMoreIcon)`
	color: ${colors.green};
	font-size: 28px;
`;
