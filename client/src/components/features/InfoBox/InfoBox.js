import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faKey, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Container, Row } from 'react-bootstrap';
import styles from './InfoBox.module.scss'

function InfoBox() {
  return (
    <div className="mt-5">
      <Container>
      <div className={styles.column}>
        <Row>         
        <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <FontAwesomeIcon icon={faShoppingCart} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <FontAwesomeIcon icon={faKey} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="text-center">
              <FontAwesomeIcon icon={faUserSecret} className={`mb-3 ${styles.infoIcon}`} />
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default InfoBox;
