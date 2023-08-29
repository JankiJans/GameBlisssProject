import { getProductsById, updateProducts } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IMAGES_URL } from '../../../config';
import { API_URL } from '../../../config';
import { useEffect } from 'react';
import { Container, Image, Card, Button, Toast } from 'react-bootstrap'; // Dodaliśmy Button
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
    dispatch(addCart(data));
    console.log(data);
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', '[]');
    }
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    setStatus('succes');
    setShowToast(true);
  };

  if (!prod) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: '#040D12', minHeight: '100vh' }}>
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
              <p>{prod.description}</p>
            </div>
            <div>
              <p className={styles.categoryBackground}>{prod.category}</p>
            </div>
            <div>
              <p className={styles.producentBackground}>{prod.producent}</p>
            </div>
            <div className={styles.addToCart}>
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
              <Toast.Header className="bg-success text-white">
                <strong className="me-auto">Success</strong>
              </Toast.Header>
              <Toast.Body className="bg-success">
                Product has been added to your cart!
              </Toast.Body>
            </Toast>
          </div>
        </div>
        <InfoBox />
        <div className={styles.carousel}>
          <Carousel>
            {prod.gallery.map((item) => (
              <Carousel.Item key={item.id}>
                <img src={IMAGES_URL + item.image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default SingleGamePage;
