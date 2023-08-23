import { Container, Row, Col } from 'reactstrap';
import Games from '../games/Games';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: '#7F8487' }}>
      <Container>
        <Row>
          <div className="d-flex align-items-center mt-5 justify-content-between">
            <h1>Games</h1>
          </div>
          <Col>
          <Games />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
