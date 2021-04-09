import styled from "styled-components";

export const FooterWrapper = styled.div`
	height: 6rem;
	display: flex;
	padding-left: 4rem;
	background-color: var(--tmdbDarkBlue);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 12rem;
`;
export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CreatedBy = styled.p`
	color: lightgray;
	margin-left: 2rem;
	margin-bottom: 0;
	font-size: 1.2rem;
	font-weight: light;
`;

export const Svg = styled.svg`
	fill: lightgray;
	width: 2rem;
	height: 2rem;
`;
