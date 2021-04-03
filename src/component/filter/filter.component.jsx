import React from "react";
import { Card, Accordion, Form } from "react-bootstrap";
import * as SF from "./filter.style";

const Filter = () => {
	return (
		<div className="filter">
			<SF.AccordionWrapper defaultActiveKey="0" className="mt-3">
				<Card>
					<Card.Header className="p-0">
						<SF.AccordionButton eventKey="0">
							Sort Results by
						</SF.AccordionButton>
					</Card.Header>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							<Form>
								<Form.Group controlId="filter.sort">
									<Form.Label>Rating</Form.Label>
									<Form.Control as="select" custom>
										<option>Ascending</option>
										<option>Descending</option>
									</Form.Control>
								</Form.Group>
							</Form>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</SF.AccordionWrapper>
		</div>
	);
};

export { Filter };
