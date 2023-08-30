import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { getCart } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { API_URL } from '../../../config';

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

  const currentUser = localStorage.getItem('loggedInUser');
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      clientId: 'd76485e9-9187-4183-b60c-3e83051891bc',
      productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17345',
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
        } else if (res.status === 400) {
          setStatus('clientError');
        } else if (res.status === 409) {
          setStatus('loginError');
        } else {
          setStatus('serverError');
        }
      })
      .catch((err) => {
        setStatus('serverError');
      });
  };

  return (
    <Form className="col-12 col-sm-3 mx-auto" onSubmit={handleSubmit}>
      <h1 className="my-4">Sign up</h1>

      {status === 'success' && (
        <Alert variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successful registered</p>
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

      {status === 'loginError' && (
        <Alert variant="warning">
          <Alert.Heading>Login already in use</Alert.Heading>
          <p>You have to use other login</p>
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

      <Form.Group className="mb-3" controlId="formPayment">
        <Form.Label>payment method</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLogin">
        <Form.Label>delivery</Form.Label>
        <Form.Control
          type="text"
          placeholder="delivery method"
          value={delivery}
          onChange={(e) => setDelivery(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAmount">
        <Form.Label>Total Amount</Form.Label>
        <Form.Control
          type="number"
          placeholder="Total amount"
          value={getTotalPrice()}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formQuantity">
        <Form.Label>Total Quantity</Form.Label>
        <Form.Control
          type="number"
          placeholder="Total quantity"
          value={getTotalQuantity()}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </Form.Group>

      <Button variant="warning" type="submit" className="mb-5">
        Submit
      </Button>
    </Form>
  );
};

export default Orders;
