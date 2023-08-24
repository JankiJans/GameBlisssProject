import { Container, Row, Col } from 'reactstrap';
import Games from '../games/Games';
import MainMenu from '../../layout/MainMenu/MainMenu';
import DropDowns from '../../features/DropDowns/DropDowns';
import styles from './HomePage.module.scss';
import SearchBar from '../../features/SearchBar/SearchBar';

const HomePage = () => {
  return (
    <div>
      <MainMenu />
      <div style={{ backgroundColor: '#040D12' }}>
        <Container>
          <Row className={styles.topContainer}>
            <div className={styles.top}>
              <h1>Best Sellers</h1>
              <div className={styles.searchBar}>
              </div>
            </div>
            <SearchBar />
            <Col>
              <Games />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
