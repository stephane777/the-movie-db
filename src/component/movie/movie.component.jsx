import React from "react";
import { Card, Col } from "react-bootstrap";
import { RateCircle } from "../resusable/RateCircle/ratecircle.component";
import * as SM from "./movie.style";
import { formatDate } from "../resusable/utils";
import PropTypes from "prop-types";
const Movie = ({
	data: {
		poster_path: file_path,
		release_date,
		vote_average,
		original_title,
		id,
	},
}) => {
	const base_url = `https://image.tmdb.org/t/p`;
	const size = `w500`;

	const formattedDate = formatDate(release_date);

	return (
		<SM.CardWrapper
			as={Col}
			xs="8"
			sm="4"
			md="4"
			lg="3"
			xl="2"
			className="m-3 p-0"
		>
			<Card.Img
				variant="top"
				src={`${base_url}/${size}${file_path}`}
				alt={original_title}
			/>
			<RateCircle id={id} rate={vote_average}>
				{`${vote_average * 10}%`}
			</RateCircle>
			<Card.Body style={{ transform: "translateY(-25px)" }} className="py-0">
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
				<Card.Text style={{ color: "var(--gray)" }}>{formattedDate}</Card.Text>
			</Card.Body>
		</SM.CardWrapper>
	);
};

Movie.propTypes = {
	data: PropTypes.shape({
		poster_path: PropTypes.string,
		release_date: PropTypes.string.isRequired,
		vote_average: PropTypes.number.isRequired,
		original_title: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}),
};
export { Movie };
