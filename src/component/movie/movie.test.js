import React from "react";
import "@testing-library/jest-dom";

import { render, screen, act, cleanup } from "@testing-library/react";
import { Movie } from "./movie.component";
import { resultMockAPI } from "../app/__test__/mockAPI";
import { formatDate } from "../resusable/utils";

const { original_title, file_path, release_date } = resultMockAPI[0];
const movie = resultMockAPI[0];

describe("it should render the component with data and img", () => {
	it("should render the Movie component", () => {
		const { container } = render(<Movie data={movie} />);
		expect(container.firstChild.className).toMatch(
			/sc-gsDJrp ldqsHQ m-3 p-0 col-xl-2 col-lg-3 col-md-4 col-sm-4 col-8/
		);
	});
	it("should display an image", () => {
		render(<Movie data={movie} />);
		const img = screen.getByRole("img");
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute("alt", original_title);
		expect(img).toHaveAttribute("src", file_path);
	});
	it("should display the title", () => {
		render(<Movie data={movie} />);
		expect(screen.getByText(original_title)).toBeInTheDocument();
	});
	it("should display the release date formatted", () => {
		render(<Movie data={movie} />);
		const formattedDate = formatDate(release_date);
		expect(screen.getByText(formattedDate)).toBeInTheDocument();
	});
});
describe("it should match snapshot", () => {
	it("should match the snapshot", () => {
		const testedUnit = render(<Movie data={movie} />);
		expect(testedUnit).toMatchSnapshot();
	});
});
