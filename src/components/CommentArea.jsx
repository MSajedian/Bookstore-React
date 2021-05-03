import { Component } from 'react'
import fantasyBooks from '../data/fantasy.json'
import { Card, Spinner } from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
    state = {
        book: [],
        isLoading: false,
        isError: false,
        commentUpdated: false,
        fetchComments: null
    }

    updateCommentArea = (data) => {
        this.setState({ commentUpdated: data })
    }
    
    componentDidUpdate = (previousProps, previousState) => {
        if (previousState.commentUpdated !== this.state.commentUpdated) {
            console.log('this.state.commentUpdated:', this.state.commentUpdated)
            this.setState({ commentUpdated: false })
        }
    }

    componentDidMount = async () => {
        try {
            this.setState({
                isLoading: true
            })

            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.Bookid}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
                }
            })
            if (response.ok) {
                let data = await response.json()
                console.log("data", data)
                this.setState({ book: data, isError: false, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (<>
            {/* <p>Book ID is: {this.props.Bookid}</p> */}
            {
                this.state.isLoading &&
                <Spinner animation="border" variant="primary" />
            }
            {fantasyBooks.filter(book => book.asin === this.props.Bookid).map((fantasyBook) => (
                <Card key={`asin${fantasyBook.asin}`} id={`${fantasyBook.asin}`} className="my-1 d-flex justify-content-center">
                    <Card.Img variant="top" src={fantasyBook.img} className="img-fluid d-flex justify-content-center" />
                    <Card.Body>
                        <Card.Title>{fantasyBook.title}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
            <CommentsList Bookid={this.props.Bookid} setFetchComments={(fetchComments) => this.setState({fetchComments})}/>
            <AddComment Bookid={this.props.Bookid} fetchComments={this.state.fetchComments}/>

        </>);
    }
}

export default CommentArea;