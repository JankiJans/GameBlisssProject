import styles from './Content.module.scss';
import { NavLink, Button, Container } from 'react-bootstrap';

const Content = () => {
  return (
    <div className={styles.background}>
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
