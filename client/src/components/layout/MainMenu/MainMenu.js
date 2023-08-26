import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IMAGES_URL } from '../../../config';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((sm) => (
        <Navbar key={sm} expand={sm} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">GameBLiss</Navbar.Brand>
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
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
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
