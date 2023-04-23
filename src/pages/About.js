import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <div class='container py-4'>
          <div
            class='p-5 mb-4 rounded-3'
            style={{ backgroundColor: '#f9f2ec', marginTop: '5%' }}
          >
            <div class='container-fluid py-5'>
              <h1 class='display-5 fw-bold'>About us</h1>
              <p class='col-md-8 fs-4'>
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking.
              </p>
            </div>
          </div>

          <div class='row align-items-md-stretch'>
            <div class='col-md-6'>
              <div class='h-100 p-5 text-white bg-dark rounded-3'>
                <h2>Our vision</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
              </div>
            </div>
            <div class='col-md-6'>
              <div class='h-100 p-5 bg-light border rounded-3'>
                <h2>Life in Serene</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>
              </div>
            </div>
          </div>
          <Container className='mb-4 text-center about'>
            <Row>
              <Col>
                <h3>Meet the Team</h3>
              </Col>
            </Row>
          </Container>
          <Row xs={1} md={5} className='g-4 text-center'>
            {Array.from({ length: 5 }).map((_, idx) => (
              <Col>
                <Image
                  roundedCircle
                  variant='top'
                  src='/user1.png'
                  style={{ width: '150px', height: '150px' }}
                />
                <Card.Body>
                  <Card.Title>Developer</Card.Title>
                  <Card.Text>Mayank Saswat</Card.Text>
                </Card.Body>
                <footer className='blockquote-footer'>
                  <cite title='Source Title'>
                    Every moment is a fresh beginning.{' '}
                  </cite>
                </footer>
              </Col>
            ))}
          </Row>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
