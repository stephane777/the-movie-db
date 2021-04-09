import React from "react";

import * as SB from "./banner.style";
const Banner = () => {
	return (
		<div className="banner">
			<SB.BannerWrapper>
				<SB.Logo />
			</SB.BannerWrapper>
		</div>
	);
};
export { Banner };
