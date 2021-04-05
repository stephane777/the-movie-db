import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const Heading = styled.h2`
	font-size: 2.6rem;
	width: 100%;
	text-align: left;
	padding-left: 4rem;
	font-weight: bold;
	font-family: "Source Sans Pro", Arial, sans-serif;
	@media only screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const SearchButton = styled(Button)`
	background-color: ${({ disabled }) =>
		disabled
			? "var(--lightGrey) !important"
			: "var(--tmdbLightBlue) !important"};
	// min-width: 28rem;
	border-color: ${({ disabled }) =>
		disabled
			? "var(--lightGrey) !important"
			: "var(--tmdbLightBlue) !important"};
	color: ${({ disabled }) =>
		disabled ? "#000 !important" : "#fff !important"};
	max-width: 46rem;
	width: 100%;
	font-size: 1.6rem;
	padding: 0.8rem 0;
	border-radius: 20px;
	font-size: 1.8rem;
	font-weight: bold;
	&:hover {
		background-color: var(--tmdbLightBlue);
	}
`;

export const RespRow = styled(Row)`
	@media only screen and (max-width: 768px) {
		justify-content: center !important;
	}
`;
