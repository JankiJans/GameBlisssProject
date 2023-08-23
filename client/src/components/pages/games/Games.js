import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';
import {
  getProducts,
  updateProducts,
} from '../../../redux/productsRedux';
import { IMAGES_URL } from '../../../config';

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
          <div key={prod._id} style={{ width: '16rem' }} className="mx-2 mb-5">
            <Card>
            <Card.Img variant="top" src={IMAGES_URL + prod.image} style={{ height: '250px' }} alt="image here" />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>{prod.category}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{prod.price}</ListGroup.Item>
                <ListGroup.Item>{prod.description}</ListGroup.Item>
                <ListGroup.Item>{prod.producent}</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        ))}
      </div>
    );
  }
};

export default FeatureProduct;
