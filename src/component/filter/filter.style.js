import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

export const AccordionButton = styled(Accordion.Toggle)`
	border: none;
	width: 100%;
	height: 100%;
	padding: 1rem;
	font-size: 1.6rem;
	font-weight: 700;
	font-family: "Source Sans Pro";
`;

export const AccordionWrapper = styled(Accordion)`
	& .card {
		border-radius: 0.6rem;
		box-shadow: 2px 2px 10px #ccc;
	}
`;
