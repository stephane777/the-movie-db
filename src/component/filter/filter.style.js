import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

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
	min-width: 22rem;
	margin-bottom: 6rem;
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
