import { useState } from 'react';
import { getCart, clearCart } from '../../../redux/cartRedux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './Order.module.scss';
import { API_URL } from '../../../config';
import { Alert, Button, Form, Spinner, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import Alerts from '../../features/Alerts/Alerts';
import NotLoggedInModal from '../../features/NotLoggedInModal/NotLoggedInModal';
import FormGroups from '../../features/FromGroups/FromGroups';

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

        <Alerts status={status}/>

        <FormGroups
          email={email} setEmail={setEmail}
          name={name} setName={setName}
          address={address} setAddress={setAddress}
          payment={payment} setPayment={setPayment}
          delivery={delivery} setDelivery={setDelivery}
          note={note} setNote={setNote}
          getTotalPrice={getTotalPrice}
          getGameNames={getGameNames}
          handleSubmit={handleSubmit}
        />

        <Button variant="warning" type="submit" className="mb-5">
          Submit
        </Button>
      </Form>

      <NotLoggedInModal showModal={showModal} handleClose={handleClose}/>
    </div>
  );
};

export default Orders;
