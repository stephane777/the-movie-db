import React from "react";
import "@testing-library/jest-dom";
import { App } from "../app";
import axios from "axios";
import {
	render,
	screen,
	act,
	fireEvent,
	cleanup,
	waitForElementToBeRemoved,
} from "@testing-library/react";

import { resultMockAPI } from "../app/__test__/mockAPI";

jest.mock("axios");

afterEach(cleanup);

describe("it should render the component filter", () => {
	it("should show the filter box collapsed", async () => {
		const promise = Promise.resolve({
			data: {
				results: resultMockAPI,
			},
		});
		axios.get.mockImplementation(() => promise);
		render(<App />);
		expect(screen.getByText(/loading .../i)).toBeInTheDocument();
		await waitForElementToBeRemoved(() => screen.getByText(/loading .../i));
		expect(await screen.findByText(/Godzilla vs. Kong/)).toBeInTheDocument();
		expect(screen.getByTestId("filter_list")).not.toHaveAttribute(
			"class",
			"collapse show"
		);
	});
	it("should expand the filter dropdown menu", async () => {
		const promise = Promise.resolve({
			data: {
				results: resultMockAPI,
			},
		});
		axios.get.mockImplementation(() => promise);
		render(<App />);
		await waitForElementToBeRemoved(() => screen.getByText(/loading .../i));
		expect(screen.getByTestId("filter_list")).not.toHaveAttribute(
			"class",
			"collapse show"
		);
		const listButton = screen.getAllByRole("button");
		expect(listButton).toHaveLength(2);
		act(() => {
			fireEvent.click(listButton[0]);
		});
		expect(screen.getByTestId("filter_list")).toHaveAttribute(
			"class",
			"collapsing"
		);
		expect(await screen.findByTestId("filter_list")).toHaveAttribute(
			"class",
			"collapse show"
		);
	});
});
