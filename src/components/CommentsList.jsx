import { Component } from 'react'
// import fantasyBooks from '../data/fantasy.json'
import { Container, Button, Spinner } from 'react-bootstrap'



class CommentsList extends Component {
    state = {
        bookComment: [],
        isLoading: false,
        isError: false,
        commentDeleted: false
    }

    updateParent = (e) => {
        this.props.updateCommentArea(e);
    }

    componentDidMount = async () => {
        this.fetchComments()
        this.props.setFetchComments(this.fetchComments)
    }

    componentDidUpdate = (previousProps, previousState) => {
        if (previousState.commentDeleted !== this.state.commentDeleted) {
            console.log('this.state.commentDeleted:', this.state.commentDeleted)
            //this.updateParent(true)
            this.setState({ commentDeleted: false })
        } else if (previousProps.Bookid !== this.props.Bookid) {
            this.fetchComments()
        }
    }

    fetchComments = async () =>  {
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

    deleteComment = async (id) => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
                }

            })
            if (response.ok) {
                this.setState({ commentDeleted: true })
                // this.componentDidUpdate()
                alert("Deleted")
            } else {
                alert("Not Deleted")
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
                                    <Button variant="danger" onClick={() => this.deleteComment(Comments._id)}> Delete Comment </Button>
                                    <hr />
                                </div>))}
                    </Container>
                }
            </>
        );
    }
}

export default CommentsList;