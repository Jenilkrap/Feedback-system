import React from 'react'
import './Parentforms.css'
import { Button, Form, Table, TableProps, Row, Col} from 'react-bootstrap';

const Parentforms = () => {
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
                FEEDBACK on Curriculum FROM PARENTS

                </h1>

            </div>
            <Form>
                
                <Form.Group className="mb-3 text" controlId="formGridName"><br />
                    <Form.Label>NAME OF PARENT</Form.Label>
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
                <Form.Group className="mb-3 text" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control placeholder="Please enter your Suggestions here ......" as="textarea" rows={10} />
                </Form.Group>
                <Button type="submit">Submit</Button>


            </Form>
        </div>
    )
}

export default Parentforms
