import React, { useEffect, useState } from 'react';
import { Card, Spinner, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import { getProducts, updateProducts } from '../../../redux/productsRedux';
import { IMAGES_URL } from '../../../config';
import styles from './Games.module.scss';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FeatureProduct = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const allProducts = useSelector(getProducts);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL + '/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      await dispatch(updateProducts(products));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function shortenTitle(title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  }

  if (isLoading) {
    return (
      <Spinner animation="border" role="status" className="d-block mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <div className="py-5 d-flex flex-wrap">
        {allProducts.map((prod) => (
          <div key={prod.id} style={{ width: '250px' }} className="mx-2 mb-5">
            <Card>
              <a href={`/products/${prod.id}`}>
                <Card.Img
                  variant="top"
                  src={IMAGES_URL + prod.image}
                  style={{ height: '250px' }}
                  alt="image here"
                  className={styles.hoverCard}
                />
              </a>
              <Card.Body style={{ height: '150px' }}>
                <Card.Title>{shortenTitle(prod.name, 22)}</Card.Title>
                <Card.Text>{prod.category}</Card.Text>
                <Card.Text>From {prod.price},99$</Card.Text>
              </Card.Body>
              <Button variant="primary" className={`${styles.addToCartButton} d-flex justify-content-center`} >
                  <FontAwesomeIcon icon={faShoppingCart} />
              </Button>
            </Card>
          </div>
        ))}
      </div>
    );
  }
};

export default FeatureProduct;
