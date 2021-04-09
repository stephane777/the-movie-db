import React from "react";

import { Spinner } from "react-bootstrap";
import * as SL from "./loading.style";

export const Loading = () => {
	return (
		<SL.Wrapper>
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading ...</span>
			</Spinner>
		</SL.Wrapper>
	);
};
