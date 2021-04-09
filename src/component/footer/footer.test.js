import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./footer.component";

describe("it should render the footer", () => {
	it("should render the footer", () => {
		const { container } = render(<Footer />);
		expect(container.firstChild.className).toMatch("footer");
	});
});

describe("SNAPSHOT", () => {
	it("should match the snapshot for App component", () => {
		const testedUnit = render(<Footer />);
		expect(testedUnit).toMatchSnapshot();
	});
});
