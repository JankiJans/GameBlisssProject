import React, { useState } from 'react';
import { Button, Col, Container, Row, Table, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';
import { useEffect } from 'react';

const Cart = () => {
  const cartProds = useSelector(getCart);
  console.log(cartProds);
  const currentUser = localStorage.getItem('loggedInUser');

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCartData(storedCart);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartData(updatedCart);
  };

  function getTotalPrice() {
    let totalPrice = 0;
    cartData.forEach((product) => {
      totalPrice += product.product.price * product.value;
    });
    return totalPrice;
  }

  
  return (
    <div className={styles.body}>
      <Container>
        <h1 className={styles.title}>Cart</h1>
        <Row>
          <Col>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                </tr>
              </thead>
            </Table>
            <div>
              {cartData.length === 0 ? (
                <h2 className="py-5">Cart is empty!</h2>
              ) : (
                cartData.map((cartProds) => (
                  <div key={cartProds.id} className={styles.products}>
                    <div className={styles.first}>
                      <img src={IMAGES_URL + cartProds.product.image} alt={cartProds.product.name} />
                      <div className={styles.firstInfo}>
                        <h3>{cartProds.product.name}</h3>
                        <h6>{cartProds.product.producent}</h6>
                        <Badge
                          className={styles.badge}
                          bg="danger"
                          onClick={() => handleDelete(cartProds.id)}
                        >
                          REMOVE
                        </Badge>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <h1>{cartProds.product.price}$</h1>
                    </div>
                    <div className={styles.quantity}>
                      <h1>{cartProds.value}</h1>
                    </div>
                  </div>
                ))
              )}
              {cartData.length > 0 && (
                <div className={styles.subTotalBox}>
                  <div className={styles.subTotal}>
                    <div className={styles.subTotalPrice}>
                      <h1>Subtotal</h1>
                      <h1><b>{getTotalPrice()}$</b></h1>
                    </div>
                    <div className={styles.subTotalInfo}>
                      <h5>Taxes and shipping calculated at checkout</h5>
                      <Button className={styles.subTotalButton}>Checkout</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cart;
