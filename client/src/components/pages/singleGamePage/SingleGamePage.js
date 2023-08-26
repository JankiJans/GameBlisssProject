import { getProductsById, updateProducts } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IMAGES_URL } from '../../../config';
import { API_URL } from '../../../config';
import { useEffect } from 'react';
import { Container, Image, Card } from 'react-bootstrap';
import styles from './SingleGamePage.module.scss';
import { Carousel } from 'react-bootstrap';
import Stars from '../../features/Stars/Stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleGamePage = () => {
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

  if (!prod) {
    return <div>Loading...</div>;
  }
  

  return (
    <div style={{ backgroundColor: '#040D12', minHeight: '100vh' }}>
      <Container>
        <div className={styles.gameBox}>
          <div className={styles.gameImage}>
            <Image src={IMAGES_URL + prod.image} />
          </div>
          <div className={styles.gameInfo}>
            <h1>{prod.name}</h1>
            <div className={styles.stars}>
              {Array.from({ length: prod.rating }).map((_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
              ))}
            </div>
          </div>
        </div>
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
