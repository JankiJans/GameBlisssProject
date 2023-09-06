import styles from './Content.module.scss';
import { Container } from 'react-bootstrap';
import { IMAGES_URL } from '../../../config';

const Content = () => {
  return (
    <div className={styles.background}>
      <img className={styles.bgImage} src={`${IMAGES_URL}background.jpg`} alt="Background" />
      <Container>
        <div className={styles.content}>
          <h1>BEST GAMES BEST PRICES</h1>
          <p>SEE FOR YOURSELF!</p>
        </div>
      </Container>
    </div>
  );
};
export default Content;
