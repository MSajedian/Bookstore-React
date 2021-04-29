// import { Carousel, Container, Col, Row } from 'react-bootstrap'
import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import fantasyBooks from '../data/fantasy.json'
import CommentArea from './CommentArea';

class LatestRelease extends React.Component {
    state = {
        isSelected: false,
        KeySelected: ""
    }
    render() {
        return (
            <Container>
                {!this.state.isSelected && 
                    <Row>
                        {fantasyBooks.map((fantasyBook) => (
                            <Col key={`asin${fantasyBook.asin}`} id={`${fantasyBook.asin}`} md={4} className="my-1" onClick={(e) => {
                                this.setState({ isSelected: true, KeySelected: e.currentTarget.id });
                                console.log(e.currentTarget);
                            }}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={fantasyBook.img} style={{ maxHeight: "300px" }} />
                                    <Card.Body>
                                        <Card.Title>{fantasyBook.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
                {this.state.isSelected &&
                <CommentArea Bookid={this.state.KeySelected}/>
                }
            </Container>

        )
    }
}

export default LatestRelease