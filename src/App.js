import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Row style={{ marginRight: "0px", backgroundColor: "#14272E", color: "#ffffff"}}>
            <Col sm={6}>
              <img
                src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/stripeimg.jpg"
                className="w-100"
              />
            </Col>
            <Col sm={6} className="text-center my-auto">
              <h3 style={{ fontSize: "1.8rem" }}>We build Awesomeness</h3>
              <p style={{ fontSize: "14px" }} className="mb-3">The most amazing theme of the year</p>
              <hr style={{ width: "80px", borderWidth: "2px", borderColor: "#F9AD0A" }} />
              <p style={{ fontSize: "14px" }} className="my-3">Global leaders around the world have joined hands with WPLMS. The most complete Education theme on Envato.</p>
              <Row className="text-center">
                <Col className="m-4" style={{ border: "solid 1px #ffffff"}}>
                  <p className="my-1" style={{ fontSize: "48px" }}>345</p>
                  <p className="pStyle" style={{ fontSize: "1.2rem"}}>Courses</p>
                </Col>
                <Col className="m-4" style={{ border: "solid 1px #ffffff"}}>
                  <p className="my-1" style={{ fontSize: "48px" }}>52</p>
                  <p className="pStyle" style={{ fontSize: "1.2rem"}}>Instructors</p>
                </Col>
                <Col className="m-4" style={{ border: "solid 1px #ffffff"}}>
                  <p className="my-1" style={{ fontSize: "48px" }}>90</p>
                  <p className="pStyle" style={{ fontSize: "1.2rem"}}>Events</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Container fluid className="meetPartners" style={{ marginRight: "0px", color: "#ffffff" }}>
            <Row>
              <Col style={{ marginTop: "80px" }} className="text-center">
                <h3 style={{ fontSize: "1.8rem" }}>Meet our Partners</h3>
                <p>Our partners are globally recognized worldwide</p>
                <hr style={{ width: "80px", borderWidth: "2px", borderColor: "#F9AD0A" }} />
              </Col>
            </Row>
            <Row className="h-100 justify-content-center align-items-center">
              <Col md={2}>
                <img className="d-block mx-auto" src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/logo2-1-460x460.png" alt="logo2" width="200" height="200" />
              </Col>
              <Col md={2}>  
                <img className="d-block mx-auto" src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/logo3-2-460x460.png" alt="logo3" width="200" height="200" />
              </Col>
              <Col md={2}>  
                <img className="d-block mx-auto" src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/logo1-1-460x460.png" alt="logo1" width="200" height="200" />
              </Col>
              <Col md={2}>  
                <img className="d-block mx-auto" src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/logo4-2-460x460.png" alt="logo4" width="200" height="200" />
              </Col>
              <Col md={2}>  
                <img className="d-block mx-auto" src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/logo2-1-460x460.png" alt="logo5" width="200" height="200" />
              </Col>
            </Row>
          </Container>
      </Fragment>
    );
  }
}

export default App;
