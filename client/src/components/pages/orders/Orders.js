import { useState } from 'react';
import { getCart, clearCart } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Order.module.scss';
import { API_URL } from '../../../config';
import { Alert, Button, Form, Spinner, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Orders = () => {
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [delivery, setDelivery] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState();
  const [cartData, setCartData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const dispatch = useDispatch()

  const currentUser = localStorage.getItem('loggedInUser');
  const currenUserId = localStorage.getItem('loggedInUserId');
  console.log(currenUserId);
  const cart = useSelector(getCart);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartData(storedCart);
    }
  }, []);

  function getTotalQuantity() {
    let totalQuantity = 0;
    cartData.forEach((product) => {
      totalQuantity += product.value;
    });
    return totalQuantity;
  }

  function getTotalPrice() {
    let totalPrice = 0;
    cartData.forEach((product) => {
      totalPrice += product.product.price * product.value;
    });
    return totalPrice;
  }

  function getGameNames() {
    return cartData.map((product) => product.product.name).join(', ');
  }

  const productIds = cartData.map((product) => product.product.id);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentUser) {
      handleShow();
      return;
    }

    const requestData = {
      clientId: currenUserId,
      productId: productIds,
      amount: getTotalPrice(),
      quantity: getTotalQuantity(),
      email,
      name,
      address,
      payment,
      delivery,
      note,
    };

    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    };

    setStatus('loading');
    fetch(`${API_URL}/orders`, options)
      .then((res) => {
        if (res.status === 201) {
          setStatus('success');
          localStorage.removeItem('cart');
          dispatch(clearCart());
          window.scrollTo(0, 0);
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else if (res.status === 400) {
          setStatus('clientError');
          window.scrollTo(0, 0);
        } else if (res.status === 409) {
          setStatus('loginError');
          window.scrollTo(0, 0);
        } else {
          setStatus('serverError');
          window.scrollTo(0, 0);
        }
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <div className={styles.body}>
      <Form className="col-12 col-sm-6 mx-auto my-5" onSubmit={handleSubmit}>
        <h1 className="pt-5">Order</h1>

        {status === 'success' && (
          <Alert variant="success" className="my-5">
            <Alert.Heading>Success!</Alert.Heading>
            <p>Your order has been sent to us!</p>
          </Alert>
        )}

        {status === 'serverError' && (
          <Alert variant="danger">
            <Alert.Heading>Something went wrong!</Alert.Heading>
            <p>Unexpected error please try again</p>
          </Alert>
        )}

        {status === 'clientError' && (
          <Alert variant="danger">
            <Alert.Heading>Not enough data</Alert.Heading>
            <p>You have to fill all the fields</p>
          </Alert>
        )}

        {status === 'loading' && (
          <Spinner animation="border" role="status" className="block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAdress">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select
            aria-label="Payment method select"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Select a payment method</option>
            <option value="UPS">Card</option>
            <option value="DHL">Cash</option>
            <option value="FedEx">Crypto</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Delivery Method</Form.Label>
          <Form.Select
            aria-label="delivery method select"
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
          >
            <option value="">Select a delivery method</option>
            <option value="UPS">UPS</option>
            <option value="DHL">DHL</option>
            <option value="FedEx">FedEx</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="type something for us :)"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAmount">
          <Form.Label>Total Amount</Form.Label>
          <Form.Control
            disabled
            placeholder="Total amount"
            value={`${getTotalPrice()}$`}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGameNames">
          <Form.Label>Games in Cart</Form.Label>
          <Form.Control disabled placeholder="Games" value={getGameNames()} />
        </Form.Group>

        <Button variant="warning" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Not Logged In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You need to be logged in to submit the form. Please create an account
          or login.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Orders;
