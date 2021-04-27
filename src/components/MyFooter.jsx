import { Container, Row, Col, ListGroup } from "react-bootstrap";
// import React from 'react';

const MyFooter = () => (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <Container fixed='bottom'>
            <Row>
                <Col>
                    <h5>Features</h5>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>Cool stuff</ListGroup.Item>
                        <ListGroup.Item>Random feature</ListGroup.Item>
                        <ListGroup.Item>Team feature</ListGroup.Item>
                        <ListGroup.Item>Stuff for developers</ListGroup.Item>
                        <ListGroup.Item>Another one</ListGroup.Item>
                        <ListGroup.Item>Last time</ListGroup.Item>
                    </ListGroup>
                    {/* <Button variant="link">Link</Button> */}
                    {/* 
                        <ul class="list-unstyled text-small">
                            <li><a href="#"></a></li>
                            <li><a href="#">Random feature</a></li>
                            <li><a href="#">Team feature</a></li>
                            <li><a href="#">Stuff for developers</a></li>
                            <li><a href="#">Another one</a></li>
                            <li><a href="#">Last time</a></li>
                        </ul>
                         */}
                </Col>
                <Col>
                    <h5>Resources</h5>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>Resource</ListGroup.Item>
                        <ListGroup.Item>Resource name</ListGroup.Item>
                        <ListGroup.Item>Another resource</ListGroup.Item>
                        <ListGroup.Item>Final resource</ListGroup.Item>
                    </ListGroup>
                    {/* 
                        <ul class="list-unstyled text-small">
                            <li><a href="#">Resource</a></li>
                            <li><a href="#">Resource name</a></li>
                            <li><a href="#">Another resource</a></li>
                            <li><a href="#">Final resource</a></li>
                        </ul>
                         */}
                </Col>
                <Col>
                    <h5>About</h5>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>Team</ListGroup.Item>
                    <ListGroup.Item>Locations</ListGroup.Item>
                    <ListGroup.Item>Privacy</ListGroup.Item>
                    <ListGroup.Item>Terms</ListGroup.Item>
                    </ListGroup>

                    {/* 
                        <ul class="list-unstyled text-small">
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Locations</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </ul>
                         */}
                </Col>
            </Row>
        </Container>
    </footer>
)
export default MyFooter;