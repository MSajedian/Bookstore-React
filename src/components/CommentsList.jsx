import { Component } from 'react'
// import fantasyBooks from '../data/fantasy.json'
import { Spinner } from 'react-bootstrap'
import { Container } from 'react-bootstrap'


class CommentsList extends Component {
    state = {
        bookComment: [],
        isLoading: false,
        isError: false,
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
                this.setState({ bookComment: data, isError: false, isLoading: false })
            } else {
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isError: true, isLoading: false })
        }
    }

    render() {
        return (
            <>
                {
                    this.state.isLoading &&
                    <Spinner animation="border" variant="primary" />
                }
                {
                    !this.state.isLoading &&

                    <Container>
                        <h2>Comments</h2>
                        {
                            this.state.bookComment.map((Comments) => (
                                <div key={`id${Comments._id}`} id={`${Comments._id}`}>
                                    <div className="commment">{`${Comments.comment}`}</div>
                                    <div className="rate"><b>rate:</b> {`${Comments.rate}`}</div>
                                    <hr />
                                </div>))}
                    </Container>
                }
            </>
        );
    }
}

export default CommentsList;