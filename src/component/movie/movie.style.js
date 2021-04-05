import Card from "react-bootstrap/Card";
import styled from "styled-components";

export const CardWrapper = styled(Card)`
	border: 1px solid lightgray;
	border-radius: 8px;
	box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
	& .card-img-top {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
`;
