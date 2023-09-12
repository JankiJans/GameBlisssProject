import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import { getProducts, updateProducts } from '../../../redux/productsRedux';
import { IMAGES_URL } from '../../../config';
import { Link } from 'react-router-dom';
import styles from './Games.module.scss';

import Stars from '../../features/Stars/Stars';


const Games = () => {
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
          <div key={prod.id} className={styles.test}>
          <div style={{ width: '250px' }} className="mx-2 mb-5">
            <Card>
              <Link to={`/products/${prod.id}`}>
                <Card.Img
                  variant="top"
                  src={IMAGES_URL + prod.image}
                  alt="image here"
                  className={styles.hoverCard}
                />
              </Link>
              <Card.Body style={{ height: '150px' }} className='mb-3'>
                <Card.Title>{shortenTitle(prod.name, 22)}</Card.Title>
                <div className={styles.stars}><Stars rating={prod.rating}/></div>
                <Card.Text className={`${styles.categoryBackground} mb-2`}>{prod.category}</Card.Text>
                <Card.Text>From <b>{prod.price}$</b></Card.Text>
              </Card.Body>
            </Card>
          </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Games;