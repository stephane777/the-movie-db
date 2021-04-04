import React from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { Movie } from "../movie";
import { Filter } from "../filter";

const App = () => {
	const [data, setData] = React.useState([]);
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [sortRating, setSortRating] = React.useState("Descending");

	const URL = "https://www.themoviedb.org/movie/";

	React.useEffect(() => {
		const getMovies = async () => {
			try {
				setLoading(true);
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

				setData(
					results.sort((a, b) => a.vote_average - b.vote_average).reverse()
				);
				setLoading(false);
			} catch (e) {
				setError(e.toString());
			}
		};
		getMovies();
	}, []);

	const handleSortRating = (e) => {
		setSortRating(e.target.value);
		console.log(e.target.value);

		setData((data) => {
			const sorted = data.sort((a, b) => a.vote_average - b.vote_average);
			console.log(sorted);
			return sortRating === "Descending" ? sorted : sorted.reverse();
		});
	};

	const wrapper = (
		<Container style={{ maxWidth: "1600px" }}>
			<Row className="my-5 mx-0 fw-bold fs-5">
				<h2 style={{ fontSize: "3rem" }}>Now Playing Movies</h2>
			</Row>
			<Row className="d-flex justify-content-center mx-0">
				<Col md="3">
					<Filter sortRating={sortRating} handleSortRating={handleSortRating} />
				</Col>
				<Col md="9">
					<Row className="justify-content-center">
						{data.map((mov, i) => (
							<Movie key={uuidv4()} data={mov} />
						))}
					</Row>
				</Col>
			</Row>
		</Container>
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
