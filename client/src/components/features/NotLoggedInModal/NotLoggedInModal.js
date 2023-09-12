import { Modal, Button } from "react-bootstrap";

const NotLoggedInModal = ({ showModal, handleClose }) => (
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Not Logged In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      You need to be logged in to submit the form. Please create an account or
      login.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default NotLoggedInModal
