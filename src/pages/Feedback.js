import React, { useState } from 'react';
import firebase from '../Firebase';
import Header from '../component/Header';
import Footer from '../component/Footer';
import {
  Button,
  Container,
  Form,
  Col,
  Row,
  Image,
  Alert,
} from 'react-bootstrap';

import {
  getDatabase,
  push,
  ref,
  // onValue,
  // update,
  // child,
  // remove,
} from 'firebase/database';

const Feedback = () => {
  const [userInput, setuserInput] = useState({
    userName: '',
    UserEmail: '',
    userFeed: '',
  });

  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setuserInput({ ...userInput, [event.target.name]: event.target.value });
    console.log('userinput', userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firebase.name);

    const db = getDatabase();
    const r = ref(db, 'feedback');
    push(r, userInput);
    setShow(true);
    console.log('data inserted');
    setuserInput({ userName: '', UserEmail: '', userFeed: '' });
    setInterval(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <Container style={{ marginTop: '100px', marginBottom: '30px' }}>
        <Row>
          <Col xs={12} md={6}>
            <h3 className='feed'>We'd love your feedback!</h3>
            <Image fluid src='/feeback3.jpg'></Image>
          </Col>
          <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='userName'
                  value={userInput.userName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='UserEmail'
                  value={userInput.UserEmail}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label>Your feedback</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  name='userFeed'
                  value={userInput.userFeed}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant='outline-success' type='submit' value='submit'>
                Submit
              </Button>
            </Form>
            <div style={{ marginTop: '5%' }}>
              {show ? (
                <Alert variant='success'>Thanks for the feedback!</Alert>
              ) : (
                <span></span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Feedback;
