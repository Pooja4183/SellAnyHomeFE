import React from 'react';
import {
  Badge,
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './Login';
import { BsCart2 } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartProduct);
  const subQantity = cartItems.reduce((e, p) => e + p.qty, 0);
  return (
    <Navbar bg='dark' expand='lg' variant='dark' fixed='top'>
      <Container fluid>
        <Navbar.Brand>
          <Link to={'/'}>
            <img
              src='/logo.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='Sellanyhome'
            />
            Sellanyhome
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to={'/about'}>About</Link>

            <Link to={'/feedback'}>Feedback</Link>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className='d-flex '>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Link to={'/cart'}>
            <Button variant='text'>
              <BsCart2 color='white' fontSize='25px' />
              <Badge
                bg='dark'
                style={{
                  position: 'absolute',
                  right: 90,
                  top: 5,
                  opacity: '50%',
                }}
              >
                {subQantity}
              </Badge>
              <span className='visually-hidden'>unread messages</span>
            </Button>
          </Link>
          <Login />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
