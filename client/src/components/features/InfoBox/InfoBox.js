import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faKey, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap'; // Importujemy komponenty z Bootstrap
import styles from './InfoBox.module.scss'

function InfoBox() {
  return (
    <div className="mt-5">
      <Container>
      <div className={styles.column}>
        <Row>         
          <Col>
            <div className="text-center">
              <FontAwesomeIcon icon={faShoppingCart} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <FontAwesomeIcon icon={faKey} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <FontAwesomeIcon icon={faUserSecret} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default InfoBox;
