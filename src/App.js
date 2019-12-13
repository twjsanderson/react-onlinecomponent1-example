import React, { Component, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import image3 from './images/image3.jpg';
import intro from './images/intro.jpg';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* New Component */}
          <Row style={{ marginRight: "0px", backgroundColor: "#14272E", color: "#ffffff"}}>
            <Col sm={6}>
              <img
                src="https://wplms.io/demos/demo6/wp-content/uploads/2017/12/stripeimg.jpg"
                className="w-100"
                alt="pic"
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
          {/* New Component */}
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
          {/* New component */}
          <Container fluid className="home-section">
            <Row className="h-100 align-items-center">
              <Col md={4} style={{ backgroundColor: "lightGrey", zIndex: "2", opacity: "0.9" }} className="text-center p-5 m-5 rounded" height={300}>
                <h2 className="mb-4">
                  Professional Dancing Instruction
                </h2>
                <p className="mb-3">Learn modern and classic dancing from the best instructors in North America. With over 40 years of experience, our expert staff will turn you into incredible dancers - we guarantee it!
                </p>
                <div className="mx-auto">
                  <a className="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
                </div>
              </Col>
              <Col md={6} style={{ marginLeft: "-10%", opacity: "0.9" }}>
                <img 
                  className="image-fluid my-5 rounded" 
                  src={image3} 
                  alt="pic" 
                />
              </Col>
            </Row>
          </Container>
          {/* New Component */}
            <section class="page-section clearfix p-4">
              <div class="container">
                <div class="intro">
                  <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={intro} alt="" />
                  <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                    <h2 class="section-heading mb-4">
                      <span class="section-heading-upper">Fresh Coffee</span>
                      <span class="section-heading-lower">Worth Drinking</span>
                    </h2>
                    <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
                    </p>
                    <div class="intro-button mx-auto">
                      <a class="btn btn-primary p-4 button-primary btn-xl" href="#">Visit Us Today!</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* New Section */}
            <Container fluid className="bg-primary" style={{ height: 700 }}>
            </Container>
      </Fragment>
    );
  }
}

export default App;
