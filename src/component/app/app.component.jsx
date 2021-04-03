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

	const URL = "https://www.themoviedb.org/movie/";

	React.useState(() => {
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

				console.log(results);
				setData(results);
				setLoading(false);
			} catch (e) {
				setError(e.toString());
			}
		};
		getMovies();
	}, []);

	const wrapper = (
		<Container style={{ maxWidth: "1600px" }}>
			<Row className="my-5 mx-0 fw-bold">
				<h2>Now Playing Movies</h2>
			</Row>
			<Row className="d-flex justify-content-center mx-0">
				<Col md="3">
					<Filter />
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
