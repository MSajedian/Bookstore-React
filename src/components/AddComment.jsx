import { Component } from 'react'
// import fantasyBooks from '../data/fantasy.json'
import { Form, Button } from 'react-bootstrap'


class AddComment extends Component {
    state = {
        isLoading: false,
        isError: false,
        leavedComment: {
            elementId: this.props.Bookid,
            comment: '',
            rate: 1
        }
    }

    postComment = async (e) => {
        e.preventDefault()
        try {
            this.setState({
                isLoading: true
            })

            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
                method: "POST",
                body: JSON.stringify(this.state.leavedComment),
                headers: {
                    "Content-Type": "application/json",
                    Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMGNjMGIxZjBmYjAwMTVkOTE3MDYiLCJpYXQiOjE2MTkwMDQ2MDksImV4cCI6MTYyMDIxNDIwOX0.DGDlgKpWowe1bbzGnpP8h09QTfnZMSrDp93COWwfleU",
                }

            })
            if (response.ok) {
                alert("Posted")
                this.setState({
                    leavedComment: {
                        comment: '',
                        rate: 1
                    }
                })
            } else {
                alert("Not Posted")
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
                <h2>Leave a Comment</h2>
                <Form onSubmit={this.postComment}>
                    <Form.Group >
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                         id="Comment"
                         value={this.state.leavedComment.comment}
                         onChange={(e) => this.setState({
                            leavedComment: {
                                ...this.state.leavedComment,
                                comment: e.target.value
                            }
                        })}
                        type="text" placeholder="Comment" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Rate</Form.Label>
                        <Form.Control 
                         id="rate"
                         value={this.state.leavedComment.rate}
                         onChange={(e) => this.setState({
                            leavedComment: {
                                ...this.state.leavedComment,
                                rate: e.target.value
                            }
                        })}
                        as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button
                        variant="info"
                        type="submit">
                        Send Comment
                    </Button>
                </Form>
            </>
        );
    }
}

export default AddComment;