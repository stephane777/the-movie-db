import React from "react";
import * as SRC from "./ratecircle.style";
import PropTypes from "prop-types";

const degreesToRadians = (deg) => {
	return (deg / 180) * Math.PI;
};

const percentToRadians = (percentage) => {
	// convert the percentage into degrees
	const degrees = (percentage * 360) / 100;
	// and so that arc begins at top of circle (not 90 degrees) we add 270 degrees
	return degreesToRadians(degrees + 270);
};

const drawPercentageCircle = (percentage, radius, canvas) => {
	const context = canvas.getContext("2d");
	canvas.style.backgroundColor = "transparent";
	const x = canvas.width / 2;
	const y = canvas.height / 2;
	const startAngle = percentToRadians(0);
	const endAngle = percentToRadians(percentage);
	// set to true so that we draw the missing percentage
	let counterClockwise = true;
	context.beginPath();
	context.arc(x, y, 25, 0, 360, false);

	context.fillStyle = "black";
	context.fill();

	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	context.lineWidth = 3;

	// line color
	context.strokeStyle = "gray";
	context.stroke();

	// set to false so that we draw the actual percentage
	counterClockwise = false;

	context.beginPath();
	context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
	context.lineWidth = 3;

	// line color
	const dynamicColor =
		percentage >= 66
			? "green"
			: percentage < 66 && percentage >= 33
			? "orange"
			: "red";
	context.strokeStyle = dynamicColor;
	context.stroke();

	// now draw the inner text
	context.font = radius / 1.5 + "px Helvetica";
	context.fillStyle = "white";
	context.textAlign = "center";
	// baseline correction for text
	context.fillText(percentage + "%", x, y * 1.05);
};
// implantation happens here
const RateCircle = ({ id, rate, children }) => {
	React.useEffect(() => {
		const canvas = document.getElementById(id);
		// const ctx = canvas.getContext("2d");
		const percentage = rate * 10;
		let radius;
		if (canvas.height < canvas.width) {
			radius = canvas.height / 3;
		} else {
			radius = canvas.width / 3;
		}
		drawPercentageCircle(percentage, radius, canvas);
	}, []);
	return (
		<SRC.Wrapper>
			<canvas id={id} width="60" height="60">
				{children}
			</canvas>
		</SRC.Wrapper>
	);
};

RateCircle.propTypes = {
	id: PropTypes.number.isRequired,
	rate: PropTypes.number.isRequired,
};

export { RateCircle };
