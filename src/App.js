import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestRelease from './components/LatestRelease';
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from './components/CommentArea';

class App extends Component {
  state = {
    selectedBookId: ""
  }

  HandleBookId = (childData) => {
    this.setState({ selectedBookId: childData })
  }

  render() {
    return (
      < div className="App" >
        <MyNav />
        <Welcome />
        <Container>
          <Row>
            <Col>
              <LatestRelease parentCallback={this.HandleBookId} />
            </Col>
            <Col className="sticky-top" >
              {!this.state.selectedBookId && <CommentArea />}
              {this.state.selectedBookId && <CommentArea Bookid={this.state.selectedBookId}/>}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </div >
    );
  }
}

export default App;
