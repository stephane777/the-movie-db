import styled from "styled-components";
import { ReactComponent as svgLogo } from "../../assets/img/logo.svg";

export const BannerWrapper = styled.div`
	height: 6rem;
	display: flex;
	padding-left: 4rem;
	background-color: var(--tmdbDarkBlue);
`;
export const Logo = styled(svgLogo)`
	width: 16rem;
`;
