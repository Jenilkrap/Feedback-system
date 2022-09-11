import React from 'react'
import './Studentforms.css'
import { Button, Form, Table, TableProps, Row, Col} from 'react-bootstrap';
const Studentforms = () => {
    return (
        <div className="container">
            <div className="heading">
                <h1>
                    CHANDUBHAI S PATEL INSTITUTE OF TECHNOLOGY
                </h1>
                <h3>
                    Department of Information Technology
                </h3>
                <h1>
                    FEEDBACK on Curriculum FROM ACADEMIC PEERS
                </h1>

            </div>
            <Form>

                <Form.Group className="mb-3 text" controlId="formGridName"><br />
                    <Form.Label>NAME</Form.Label>
                    <Form.Control placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3 text" controlId="formGridCollege">
                    <Form.Label>COLLEGE/UNIVERSITY NAME</Form.Label>
                    <Form.Control placeholder="Enter your College Name" />
                </Form.Group>

                <Row className="mb-3 text">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>STUDENT ID</Form.Label>
                    <Form.Control type="Text" placeholder="Enter ID" />
                    </Form.Group>
                </Row>
                <Table responsive="lg"  striped bordered hover variant="info">
                    <thead>
                    <tr>
                        <th>SRNO</th>
                        <th>Question</th>
                        <th>Excellent(5)</th>
                        <th>Very Good (4)</th>
                        <th>Good(3)</th>
                        <th>Average(2)</th>
                        <th>Poor(1)</th>
                        <th>If Average or poor then suggest changes</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>How do you rate the sequence of the Courses</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    name="r1"
                                    id="formHorizontalRadios11"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="r1"

                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios12"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="r1"

                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios13"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="r1"

                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios14"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="r1"

                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios15"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest16">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>How do you rate the syllabus of the course.</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios21"
                                    name="r2"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios22"
                                    name="r2"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios23"
                                    name="r2"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios24"
                                    name="r2"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios25"
                                    name="r2"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>How do you rate the relevance of the units in syllabus relevant to the course?</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios31"
                                    name="r3"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios32"
                                    name="r3"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios33"
                                    name="r3"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios34"
                                    name="r3"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios35"
                                    name="32"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>How do you rate the sequence of the units in the course?</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios41"
                                    name="r4"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios42"
                                    name="r4"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios43"
                                    name="r4"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios44"
                                    name="r4"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios45"
                                    name="r4"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>How do you rate the sequence of the units in the course?</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios51"
                                    name="r5"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios52"
                                    name="r5"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios53"
                                    name="r5"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios54"
                                    name="r5"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios55"
                                    name="r5"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>6</td>
                            <td>How do you rat e the distribution of the
contact hours among the course
components (L- T-P )?
</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios61"
                                    name="r6"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios62"
                                    name="r6"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios63"
                                    name="r6"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios64"
                                    name="r6"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios65"
                                    name="r6"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>8</td>
                            <td>How do you rat e the offering of the electives in terms o f their relevance to the specialization streams?</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios71"
                                    name="r7"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios72"
                                    name="r7"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios73"
                                    name="r7"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios74"
                                    name="r7"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios75"
                                    name="r7"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>8</td>
                            <td>How do you rat e the electives offered in
Relation to the Technological advancements?
</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios81"
                                    name="r8"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios82"
                                    name="r8"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios83"
                                    name="r8"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios84"
                                    name="r8"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios85"
                                    name="r8"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>9</td>
                            <td>How do you rate the relevance of the Text Books and reference books by their
International recognition to the Courses?
</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios91"
                                    name="r9"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios92"
                                    name="r9"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios93"
                                    name="r9"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios94"
                                    name="r9"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios95"
                                    name="r9"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>How do you rate the courses aligned with industry requirements/needs</td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios101"
                                    name="r10"
                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios102"
                                    name="r10"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios103"
                                    name="r10"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios104"
                                    name="r10"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2}>
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios105"
                                    name="r10"

                                    />
                                </Col>
                            </Form.Group>
                            </td>
                            <td>
                                <Form.Group className="mb-3" controlId="formGridSuggest26">
                                    <Form.Control placeholder="Suggestions" />
                                </Form.Group>

                            </td>

                        </tr>
                    </tbody>
                </Table>
                <Button type="submit">Submit</Button>


            </Form>
        </div>
    )
}

export default Studentforms
