import { Container, Row, Col, Nav } from "react-bootstrap";
// import React from 'react';

const MyFooter = () => (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <Container fixed='bottom'>
            <Row>
                <Col>
                    <h5>Features</h5>
                    {/* variant='flush' */}
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="">Cool stuff</Nav.Link>
                        <Nav.Link href="">Random feature</Nav.Link>
                        <Nav.Link href="">Team feature</Nav.Link>
                        <Nav.Link href=""> Stuff for developers</Nav.Link>
                        <Nav.Link href=""> Another one</Nav.Link>
                        <Nav.Link href=""> Last time</Nav.Link>
                    </Nav>
                    
                </Col>
                <Col>
                    <h5>Resources</h5>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="">Resource</Nav.Link>
                        <Nav.Link href="">Resource name</Nav.Link>
                        <Nav.Link href="">Another resource</Nav.Link>
                        <Nav.Link href=""> Final resource</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <h5>About</h5>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="">Team</Nav.Link>
                        <Nav.Link href="">Locations</Nav.Link>
                        <Nav.Link href="">Privacy</Nav.Link>
                        <Nav.Link href=""> Terms</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </footer>
)
export default MyFooter;