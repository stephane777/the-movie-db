import React from "react";
import "@testing-library/jest-dom";
import axios from "axios";
import {
	render,
	screen,
	act,
	cleanup,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import { App } from "./app.component";
import { resultMockAPI } from "./__test__/mockAPI";

jest.mock("axios");

afterEach(cleanup);

describe("it should render App", () => {
	it("should render App", async () => {
		const promise = Promise.resolve({
			results: resultMockAPI,
		});
		act(() => {
			const { container } = render(<App />);
			expect(container.firstChild.className).toMatch("App");
			const banner = container.querySelector(".banner");
			expect(banner).toBeInTheDocument();
		});
		await act(() => promise);
	});
	it("should show Loading...", async () => {
		const promise = Promise.resolve({
			data: {
				results: resultMockAPI,
			},
		});
		axios.get.mockImplementation(() => promise);
		render(<App />);
		expect(screen.getByText(/loading .../i)).toBeInTheDocument();
		await waitForElementToBeRemoved(() => screen.getByText(/loading .../i));
	});
	it("should display the result from call to movie db api", async () => {
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
		expect(
			await screen.findByText(/Raya and the Last Dragon/)
		).toBeInTheDocument();
		expect(await screen.findByText(/Tom & Jerry/)).toBeInTheDocument();
	});
});

describe("SNAPSHOT", () => {
	it("Snapshot before fetching data from the movie db API", async () => {
		const promise = Promise.resolve({
			data: {
				results: resultMockAPI,
			},
		});
		axios.get.mockImplementation(() => promise);
		let testedUnit;
		act(() => {
			testedUnit = render(<App />);
		});
		expect(testedUnit).toMatchSnapshot();
		await act(() => promise);
	});
	it("Snapshot after fetching data from the movie db API", async () => {
		const promise = Promise.resolve({
			data: {
				results: resultMockAPI,
			},
		});

		axios.get.mockImplementation(() => promise);
		let testedUnit;
		act(() => {
			testedUnit = render(<App />);
		});

		await waitForElementToBeRemoved(() => screen.getByText(/loading .../i));
		expect(testedUnit).toMatchSnapshot();
		await act(() => promise);
	});
});
