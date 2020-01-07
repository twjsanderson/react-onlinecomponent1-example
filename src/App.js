import React, { Component, Fragment } from 'react';
import { Row, Col, Container, Nav, Navbar } from 'react-bootstrap';
import image3 from './images/image3.jpg';
import intro from './images/intro.jpg';
import bike from './images/bicycle.png';
import arrow from './images/arrow.png';

class App extends Component {
  alert = () => {
    console.log('clicked')
  }
  
  render() {
    return (
      <Fragment>
        {/* New Component 1 */}
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
          {/* New Component 2 */}
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
          {/* New component 3 */}
          <Container fluid className="home-section">
            <Row className="h-100 align-items-center">
              <Col md={4} style={{ backgroundColor: "lightGrey", zIndex: "2", opacity: "0.9" }} className="text-center p-5 m-5 rounded" height={300}>
                <h2 className="mb-4">
                  Professional Dancing Instruction
                </h2>
                <p className="mb-3">
                  Learn modern and classic dancing from the best instructors in North America. 
                  With over 40 years of experience, our expert staff will turn you into 
                  incredible dancers - we guarantee it!
                </p>
                <div className="mx-auto">
                  <a className="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
                </div>
              </Col>
              <Col md={6} style={{ marginLeft: "-10%", opacity: "0.9" }}>
                <img 
                  className="img-responsive my-5 rounded" 
                  src={image3} 
                  alt="pic" 
                />
              </Col>
            </Row>
          </Container>
          {/* New Component 4 */}
            <section className="page-section clearfix p-4">
              <Container>
                <div className="intro">
                  <img 
                    className="intro-img img-fluid mb-3 mb-lg-0 rounded" 
                    src={intro} 
                    alt="barrista" 
                  />
                  <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                    <h2 className="section-heading mb-4">
                      <span className="section-heading-upper">Fresh Coffee</span>
                      <span className="section-heading-lower">Worth Drinking</span>
                    </h2>
                    <p className="mb-3">
                      Every cup of our quality artisan coffee starts with locally sourced, hand picked 
                      ingredients. Once you try it, our coffee will be a blissful addition to your 
                      everyday morning routine - we guarantee it!
                    </p>
                    <div className="intro-button mx-auto">
                      <a className="btn btn-primary p-4 button-primary btn-xl" href="#">Visit Us Today!</a>
                    </div>
                  </div>
                </div>
              </Container>
            </section>
            {/* New Component 5 */}
            <Container fluid className="revol-bg" style={{ height: 800 }}>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand className="rev-logo-margin" href="#home"> 
                      <img
                        src='//cdn.shopify.com/s/files/1/1958/2177/files/revols_logo_white_90x.png?v=1517017786'
                        alt='earbuds'
                      />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="rev-links-margin">
                        <Nav.Link className="px-3 text-white" href="#home">HOME</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#features">FEATURES</Nav.Link>
                        <Nav.Link className="px-3 text-white" href="#xccessories">ACCESSORIES</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Container className="h-75">
                  <Row className="h-100 justify-content-center align-items-start margin">
                    <Col className="text-center">
                      <h1 className="text-white rev-title">
                        CUSTOM-FIT WIRELESS EARPHONES
                      </h1>
                      <h3 className="text-white rev-tagline">
                        Perfect <span className="rev-blue">Fit</span>. Ultimate <span className="rev-blue">Comfort</span>. Premium <span className="rev-blue">Sound</span>.
                      </h3>
                    </Col>
                  </Row>
                </Container>
            </Container>
            {/* New Component 5 */}
            <Container className="jam-container" fluid style={{ height: 800 }}>
              <Navbar className="offset-md-4" collapseOnSelect expand="lg">
                  <Navbar.Brand className="" href="#home"> 
                    <h3>JamStore.</h3>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                      <Nav.Link className="" href="#services">Services</Nav.Link>
                      <Nav.Link className="" href="#clients">Clients</Nav.Link>
                      <Nav.Link className="" href="#careers">Careers</Nav.Link>
                      <Nav.Link className="" href="#about">About</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>
              <Container fluid className="h-50">
                <Row className="h-50 align-items-center">
                  <Col className="text-center" md={6}>
                    <div width={20}>
                    <p className="jam-learn p-2">Learn More</p>
                    </div>
                    <p className="jam-work p-2">Work <br /> With Us</p>
                    <p className="jam-client p-2">Featured Projects</p>
                    <hr />
                    <img
                      className="jam-arrow" 
                      src={arrow}
                      alt="arrow"
                    />
                  </Col>
                  <Col md={6}>
                    <img
                      className="pr-5" 
                      src={bike}
                      width='100%'
                      alt='bike'
                    />
                  </Col>
                </Row>
              </Container>
            </Container>
      </Fragment>
    );
  }
}

export default App;
