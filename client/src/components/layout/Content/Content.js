import styles from './Content.module.scss';
import { NavLink, Button, Container } from 'react-bootstrap';

const Content = () => {
  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.content}>
          <h1>BEST GAMES BEST PRICES!</h1>
          <p>TEST 2</p>
          <NavLink to="/register">
            <Button>DOŁĄCZ DO NAS</Button>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
export default Content;
