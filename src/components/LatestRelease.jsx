// import { Carousel, Container, Col, Row } from 'react-bootstrap'
import React from 'react'
import { Container, Card, CardColumns } from 'react-bootstrap'
import fantasyBooks from '../data/fantasy.json'


class LatestRelease extends React.Component {
    render() {
        return (
            <Container>
                <CardColumns>
                    {fantasyBooks.map((fantasyBook)=>(
                    <Card>
                        <Card.Img variant="top" src={fantasyBook.img} />
                        <Card.Body>
                            <Card.Title>{fantasyBook.title}</Card.Title>
                        </Card.Body>
                    </Card>
                    ))}
                </CardColumns>
            </Container>

        )
    }
}

export default LatestRelease