import React from "react";
import { Card, Col, Row } from "react-bootstrap";

// const URL = `https://www.themoviedb.org/t/p/w440_and_h660_face`
const Movie = ({
	data: { poster_path: file_path, release_date, vote_average, original_title },
}) => {
	const base_url = `https://image.tmdb.org/t/p`;
	const size = `w500`;
	const options = { weekday: "short", year: "numeric", day: "numeric" };
	const newDateStr = new Date(release_date).toLocaleString("en-GB", options);
	const index = newDateStr.length - 4;

	const formattedDate = `${newDateStr.slice(0, index)}, ${newDateStr.slice(
		index
	)}`;
	return (
		<Card as={Col} xs="8" sm="4" md="4" lg="3" xl="2" className="m-3 p-0">
			<Card.Img variant="top" src={`${base_url}/${size}${file_path}`} />
			<Card.Body>
				<Card.Title className="mb-0">
					<strong
						style={{
							fontFamily: "'Source Sans Pro', Arial, sansSerif",
							fontSize: "1.6rem",
							fontWeight: 700,
						}}
					>
						{original_title}
					</strong>
				</Card.Title>
				<Card.Text style={{ color: "var(--gray)" }}>
					<p>{formattedDate}</p>
					<p>{vote_average}</p>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export { Movie };
