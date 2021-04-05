import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { ReactComponent as Chevron } from "../../assets/img/chevronRight.svg";

export const AccordionButton = styled(Accordion.Toggle)`
	border: none;
	width: 100%;
	height: 100%;
	padding: 1rem;
	font-size: 2rem;
	font-weight: 700;
	font-family: "Source Sans Pro";
	position: relative;
`;

export const AccordionWrapper = styled(Accordion)`
	// min-width: 28rem;
	max-width: 46rem;
	width: 100%;
	margin: 6rem auto;

	& .card {
		border-radius: 0.6rem;
		box-shadow: 2px 2px 10px #ccc;
	}
`;

export const FormControl = styled(Form.Control)`
	display: block;
	width: 100%;
	border: 1px solid #ccc;
`;

export const StyledChevron = styled(Chevron)`
	width: 1.8rem;
	position: absolute;
	top: 1.4rem;
	right: 1rem;
	bottom: 0;
	transition: 0.4s;
	transform: ${({ chevron }) =>
		chevron === "true" ? "rotate(0)" : "rotate(90deg)"};
`;
