import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import styles from './MainMenu.module.scss';
import { getCart } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';

function OffcanvasExample() {
  const cartItems = useSelector(getCart)
  console.log(cartItems)

  return (
    <>
      {['sm'].map((sm) => (
        <Navbar key={sm} expand={sm} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand><Link to="/" className={styles.brand}>GameBLiss</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-sm-${sm}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-sm-${sm}`}
              aria-labelledby={`offcanvasNavbarLabel-sm-${sm}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-sm-${sm}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className={styles.cart}>
                  <Link to="/cart" className={styles.cartIcon}>
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                  </Link>
                  <span>{cartItems.length}</span>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
