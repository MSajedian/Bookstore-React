// import { Carousel, Container, Col, Row } from 'react-bootstrap'
import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import fantasyBooks from '../data/fantasy.json'
// import CommentArea from './CommentArea';

class LatestRelease extends React.Component {
    sendDataToParent = (e) => {
        this.props.parentCallback( e.currentTarget.id );
    }

    // state = {
    //     isSelected: false,
    //     selectedBookId: ""
    // }
    
    // this.setState({ selectedBookId: e.currentTarget.id })
    // console.log('e.currentTarget.id:', e.currentTarget.id)
    // this.setProps({ selectedBookId: e.currentTarget.id });
    // this.props.selectedBookId= e.currentTarget.id 


    render() {
        return (
            <Container>
                {
                    <Row>
                        {fantasyBooks.map((fantasyBook) => (
                            <Col key={`asin${fantasyBook.asin}`} id={`${fantasyBook.asin}`} className="my-1" onClick={(e) => this.sendDataToParent(e)}
                            // (e) => {
                            // this.setState({ isSelected: true, selectedBookId: e.currentTarget.id });
                            // this.props.selectedBookId=e.currentTarget.id}
                            >
                                <Card className="h-100">
                                    <Card.Img variant="top" src={fantasyBook.img} />
                                    <Card.Body>
                                        <Card.Title>{fantasyBook.title}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                }
            </Container>

        )
    }
}

export default LatestRelease