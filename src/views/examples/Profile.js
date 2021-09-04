/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// reactstrap components
import { Button, Card, Container, Row, Col } from 'reactstrap';

// core components
import DemoNavbar from 'components/Navbars/DemoNavbar.js';
import SimpleFooter from 'components/Footers/SimpleFooter';
import profile from 'assets/img/theme/profile.png';

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">2</span>
                          <span className="description">Daughters</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Dogs</span>
                        </div>
                        <div>
                          <span className="heading">Eagles</span>
                          <span className="description">Favorite Band</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Yvette Clapp
                      <span className="font-weight-light">, MBA, DTM</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Marion, Iowa
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Change leader | Data Analysis | Project Management | Website Coding
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Delta V Code School | Colorado Technical University (MBA)
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Degreed leader with 25+ years of experience in problem solving, creating solutions, lifetime learning, developing projects, trainer, and data analyst. Expert change leader specializing in identifying efficiencies, improving employee engagement, standardizing processes, communication, analysis, development, and measurement of key performance metrics.</p>

                        <p>Languages: CSS, HTML, Javascript, EJS, AJAX, SQL, JQuery, APIs, C#, Python, SQL</p>
                        <p>Tools: MS Office Suite of Products, Power BI, GitHub, Heroku, Visual Studio, Ubuntu, Trello, VBA</p>

                        <p><strong>Data Analyst | Project Manager | Website Development</strong></p>
                        <p><strong>Email: ymclapp@yahoo.com</strong></p>

                        <p>Senior Manager excelling at driving increased productivity, increased quality, increased communication, standardized processes, and ensuring successful changes as needed. Expertise in learning any process, software, or techniques needed to be the most successful.</p>

                        <p>Expert leader with advanced communication skills to empower employees, communicate changes, analyze data, demonstrate processes, gain buy in, and provide feedback to customers and upper management on processes or changes needed.</p>

                        <p><strong>CORE COMPETENCIES</strong>

                        • Leadership
                        • Fearless Learner
                        • Time Management
                        • Project Management
                        • Report Development
                        • Problem Solver
                        • Teamwork
                        • Communication (written, verbal, interpersonal)
                        • Customer Service
                        • Detail Oriented
                        • Organization
                        • Learning – technology/processes/coding/etc.
                        </p>
                        <p><strong>ACCOMPLISHMENTS</strong></p>

                        <p> • Constantly learning new coding languages, software, or processes to keep skills sharp. Recently completely Python, C#, Power BI, Javascript, CSS, HTML, AJAX, JQery, APIs and am continuing onto additional levels of languages, software, and processes. A fearless learner!</p>

                        <p> • Overhauled the procedure for process completion involving multiple systems resulting in the elimination of bottlenecks in productivity and increased employee engagement</p>

                        <p> • Creation thru moderated training on an Excel system of forms to allow employees to upload information and have documentation created for them vs three static, redundant Excel workbooks which increased security of documentation, standardized processes, increased productivity and decreased human error</p>

                        <p> • Led the department in the introduction of pre-deadlines to drive employees toward a higher success of hitting deadlines to increase productivity stats by 5% </p>

                        <p>• Launched a Change Management process that required collaboration with key employees affected by the change and increased communication (verbal and written) of affected changes</p>

                        <p><strong>Contact me at ymclapp@yahoo.com for any data analysis/development/project opportunities</strong>
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
