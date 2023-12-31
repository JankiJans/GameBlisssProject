import { Container, Row, Col } from 'reactstrap';
import Games from '../games/Games';
import styles from './HomePage.module.scss';
import Content from '../../layout/Content/Content';
import InformationTiles from '../../layout/InformationTiles/InformationTiles';

const HomePage = () => {
  return (
    <div>
      <Content/>
      <div className={styles.body}>
        <Container>
          <Row className={styles.topContainer}>
            <div className={styles.top}>
              <h1>Best Sellers</h1>             
            </div>
            <Col>
              <Games />
            </Col>
          </Row>
        </Container>
        <InformationTiles />
      </div>
    </div>
  );
};

export default HomePage;
