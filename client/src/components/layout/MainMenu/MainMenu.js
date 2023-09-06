import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './MainMenu.module.scss';
import { getCart } from '../../../redux/cartRedux';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../../redux/usersRedux';

function OffcanvasExample() {
  const cartItems = useSelector(getCart);
  const [cartCount, setCartCount] = useState(cartItems.length);
  
  useEffect(() => {
      setCartCount(cartItems.length);
  }, [cartItems]);

  const currentUser = localStorage.getItem('loggedInUser');

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    window.location.href = '/logout';
  };


  return (
    <>
      {['sm'].map((sm) => (
        <Navbar key={sm} expand={sm} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/" className={styles.brand}>
                GameBLiss
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-sm-${sm}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-sm-${sm}`}
              aria-labelledby={`offcanvasNavbarLabel-sm-${sm}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-sm-${sm}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div
                    className="btn-group ms-auto me-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <Link to='/cart'><button type="button" className="btn btn-dark">
                      <FontAwesomeIcon icon={faShoppingCart} /> Cart<span className={styles.prodNumbers}>({cartCount})</span>
                    </button></Link>
                    {currentUser &&<button type="button" className="btn btn-dark" onClick={handleLogout}>
                      <FontAwesomeIcon icon={faUserTimes} /> Logout
                    </button>}
                    {!currentUser &&<Link to='/login'><button type="button" className="btn btn-dark">
                      <FontAwesomeIcon icon={faUser} /> Login
                    </button></Link>}
                    {!currentUser &&<Link to='/register'><button type="button" className="btn btn-dark">
                      <FontAwesomeIcon icon={faUserPlus} /> Register
                    </button></Link>}
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
