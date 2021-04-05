import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Movie } from "../movie";
import { Filter } from "../filter";
import { Banner } from "../banner";
import { reducer } from "../../reducer";
import * as SA from "./app.style";

const initialState = {
	data: [],
	error: "",
	loading: false,
	sortRating: "Descending",
	newFilterSelected: "Descending",
	chevron: false,
};
const App = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const {
		data,
		loading,
		error,
		sortRating,
		newFilterSelected,
		chevron,
	} = state;

	// const [loading, setLoading] = React.useState(false);

	// const [sortRating, setSortRating] = React.useState("Descending");
	// const [newFilterSelected, setNewFilterSelected] = React.useState(
	// 	"Descending"
	// );
	// chevron state : true means Sort is expanded, flase collapsed
	// const [chevron, setChevron] = React.useState(false);

	React.useEffect(() => {
		const getMovies = async () => {
			try {
				dispatch({ type: "LOADING", status: true });
				const api_key = process.env.REACT_APP_API_KEY;
				const data = await axios.get(
					`https://api.themoviedb.org/3/movie/now_playing`,
					{
						params: {
							api_key,
							language: "en_US",
							page: 1,
						},
					}
				);
				const {
					data: { results },
				} = await data;
				const resultSorted = results
					.sort((a, b) => a.vote_average - b.vote_average)
					.reverse();

				dispatch({ type: "SET_DATA", data: resultSorted });
				dispatch({ type: "LOADING", status: false });
			} catch (e) {
				dispatch({ type: "LOADING", status: false });
				dispatch({ type: "ERROR", message: e.toString() });
			}
		};
		getMovies();
	}, []);

	const handleNewFilterSelected = (e) => {
		console.log(`e.target.value: ${e.target.value}`);
		dispatch({ type: "NEW_FILTER_SELECTED", direction: e.target.value });
		// setNewFilterSelected((state) =>
		// 	state === "Ascending" ? "Descending" : "Ascending"
		// );
	};
	const handleSortRating = (e) => {
		dispatch({ type: "SORT_RATING", direction: newFilterSelected });
		dispatch({ type: "SORT_DATA", direction: sortRating });
	};

	const wrapper = (
		<React.Fragment>
			<Banner />
			<Container style={{ maxWidth: "1600px" }} className="px-0">
				<Row className="my-5 mx-0">
					<SA.Heading>Now Playing Movies</SA.Heading>
				</Row>
				<Row className="d-flex justify-content-center mx-0">
					<Col md="4" className="d-flex flex-column align-items-center">
						<Filter
							chevron={chevron}
							setChevron={() => dispatch({ type: "SET_CHEVRON" })}
							handleNewFilterSelected={handleNewFilterSelected}
							newFilterSelected={newFilterSelected}
						/>
						<SA.SearchButton
							onClick={handleSortRating}
							disabled={sortRating === newFilterSelected}
						>
							Search
						</SA.SearchButton>
					</Col>
					<Col md="8">
						<SA.RespRow className="justify-content-start">
							{data.map((mov, i) => (
								<Movie key={uuidv4()} data={mov} />
							))}
						</SA.RespRow>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
	return (
		<div className="App">
			<div>
				{loading && <p>'loading ...'</p>}
				{error && <p>{error}</p>}
				{!error && !loading && wrapper}
			</div>
		</div>
	);
};

export { App };
