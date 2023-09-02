import { getProductsById, updateProducts } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IMAGES_URL } from '../../../config';
import { API_URL } from '../../../config';
import { useEffect } from 'react';
import { Container, Image, Button, Toast, Table } from 'react-bootstrap';
import styles from './SingleGamePage.module.scss';
import { Carousel } from 'react-bootstrap';
import Stars from '../../features/Stars/Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import InfoBox from '../../features/InfoBox/InfoBox';
import shortid from 'shortid';
import { useState } from 'react';
import { addCart } from '../../../redux/cartRedux';

const SingleGamePage = () => {
  const [value, setValue] = useState(1);
  const [status, setStatus] = useState('');
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const prod = useSelector((state) => getProductsById(state, id));
  console.log(prod);

  useEffect(() => {
    if (!prod) {
      fetch(API_URL + '/products/' + id).then((res) => {
        if (res.status === 200) {
          return res.json().then((product) => {
            dispatch(updateProducts([product]));
          });
        }
      });
    }
  }, [id, prod, dispatch]);

  const handleAddCart = async () => {
    const data = { id: shortid(), value, product: prod };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.product.id === prod.id,
    );

    if (existingProductIndex !== -1) {
      console.log('Product already in cart');
      setStatus('failure');
      setShowToast(true);
      return;
    } else {
      dispatch(addCart(data));
      console.log(data);
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]');
      }
      cart.push(data);
      localStorage.setItem('cart', JSON.stringify(cart));
      setStatus('success');
      setShowToast(true);
    }
  };

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.body}>
      <Container>
        <div className={styles.gameBox}>
          <div className={styles.imagesBox}>
            <div className={styles.gameImage}>
              <Image src={IMAGES_URL + prod.image} />
            </div>
            <div className={styles.otherImages}></div>
          </div>
          <div className={styles.gameInfo}>
            <h1>{prod.name}</h1>
            <div className={styles.stars}>
              <Stars rating={prod.rating} />
            </div>
            <div className={styles.description}>
              <h6>{prod.description}</h6>
            </div>
            <div>
              <h5 className={styles.categoryBackground}>{prod.category}</h5>
            </div>
            <div>
              <h5 className={styles.producentBackground}>{prod.producent}</h5>
            </div>
            <div
              className={`${styles.addToCart} ${styles.whiteLineBelowButton}`}
            >
              <Button
                variant="warning"
                className={styles.addToCartButton}
                onClick={handleAddCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} />{' '}
                <span>
                  <b>{prod.price}$</b>
                </span>
              </Button>
            </div>
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              style={{
                position: 'fixed',
                bottom: '40px',
                left: '10px',
                zIndex: 1000,
              }}
            >
              <Toast.Header
                className={`bg-${
                  status === 'success' ? 'success' : 'danger'
                } text-white`}
              >
                <strong className="me-auto">
                  {status === 'success' ? 'Success' : 'Failure'}
                </strong>
              </Toast.Header>
              <Toast.Body
                className={`bg-${status === 'success' ? 'success' : 'danger'}`}
              >
                {status === 'success'
                  ? 'Product has been added to your cart!'
                  : 'Product is already in your cart!'}
              </Toast.Body>
            </Toast>
          </div>
        </div>
        <InfoBox />
        <div className={styles.carousel}>
          <Carousel>
            {prod.gallery.map((item) => (
              <Carousel.Item key={item.id}>
                <img src={IMAGES_URL + item.image} alt={item.name}/>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className={styles.systemRequirements}>
          <h2>System Requirements</h2>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className={styles.requirementTable}
          >
            <thead>
              <tr>
                <th>System</th>
                <th>Processor</th>
                <th>Graphics</th>
                <th>Memory</th>
                <th>Space</th>
              </tr>
            </thead>
            <tbody>
              {prod.systemRequirements.map((req) => (
                <tr key={req.id}>
                  <td>{req.system}</td>
                  <td>{req.processor}</td>
                  <td>{req.graphics}</td>
                  <td>{req.memory}</td>
                  <td>{req.space}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default SingleGamePage;
