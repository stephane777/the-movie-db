import React from "react";
import { Card, Accordion, Form } from "react-bootstrap";
import * as SF from "./filter.style";
import PropTypes from "prop-types";

const Filter = ({
	newFilterSelected,
	handleNewFilterSelected,
	chevron,
	setChevron,
}) => {
	const string_chevron = chevron.toString();
	return (
		<SF.AccordionWrapper className="mt-3">
			<Card>
				<Card.Header className="p-0">
					<SF.AccordionButton eventKey="0" onClick={setChevron}>
						Sort
						<SF.StyledChevron chevron={string_chevron} />
					</SF.AccordionButton>
				</Card.Header>
				<Accordion.Collapse eventKey="0" data-testid="filter_list">
					<Card.Body>
						<Form>
							<Form.Group controlId="filter.sort">
								<Form.Label>Sort Results By</Form.Label>
								<SF.FormControl
									as="select"
									custom
									value={newFilterSelected}
									onChange={handleNewFilterSelected}
								>
									<option>Ascending</option>
									<option>Descending</option>
								</SF.FormControl>
							</Form.Group>
						</Form>
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</SF.AccordionWrapper>
	);
};

Filter.propTypes = {
	newFilterSelected: PropTypes.string.isRequired,
	handleNewFilterSelected: PropTypes.func.isRequired,
	chevron: PropTypes.bool.isRequired,
	setChevron: PropTypes.func.isRequired,
};
export { Filter };
