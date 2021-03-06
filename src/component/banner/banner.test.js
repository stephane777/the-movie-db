import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Banner } from "./banner.component";

describe("it should render the Banner", () => {
	it("should render the Banner", () => {
		const { container } = render(<Banner />);
		expect(container.firstChild.className).toMatch("banner");
	});
});

describe("SNAPSHOT", () => {
	it("should match the snapshot for App component", () => {
		const testedUnit = render(<Banner />);
		expect(testedUnit).toMatchSnapshot();
	});
});
