import React from "react";
import { Card, Accordion, Form, Button } from "react-bootstrap";
import * as SF from "./filter.style";
import { ReactComponent as Chevron } from "../../assets/img/chevronRight.svg";

const Filter = ({
	newFilterSelected,
	handleNewFilterSelected,
	chevron,
	setChevron,
}) => {
	return (
		<React.Fragment>
			<SF.AccordionWrapper className="mt-3">
				<Card>
					<Card.Header className="p-0">
						<SF.AccordionButton eventKey="0" onClick={setChevron}>
							Sort
							<SF.StyledChevron chevron={chevron.toString()} />
						</SF.AccordionButton>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Form>
								<Form.Group controlId="filter.sort">
									<Form.Label>Rating</Form.Label>
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
		</React.Fragment>
	);
};

export { Filter };
