import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyBillWave, faLifeRing, faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF as fabFacebookF, faInstagram as fabInstagram, faTwitter as fabTwitter, faYoutube as fabYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from './InformationTiles.module.scss'

const InformationTiles = () => {
  return (
    <>
      <section className="second-tiles">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card p-3 mb-3">
                <div className="row">
                  <div className="col-md-2 d-none d-md-block">
                    <FontAwesomeIcon icon={faTruck} className="pt-4 ps-3" />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h3>Free shipping</h3>
                      <p>Curabitur eget ligula nisl.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card p-3 mb-3">
                <div className="row">
                  <div className="col-md-2 d-none d-md-block">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="pt-4 ps-3" />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h3>60-day refund</h3>
                      <p>Curabitur eget ligula nisl.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card p-3 mb-3 ">
                <div className="row">
                  <div className="col-md-2 d-none d-md-block">
                    <FontAwesomeIcon icon={faLifeRing} className="pt-4 ps-3" />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h3>24/7 support</h3>
                      <p>Curabitur eget ligula nisl.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-12 order-sm-3 order-md-1">
        <div className={`card px-5 mb-3 border-0 bg-transparent ${styles.cards}`}>
          <div className="card-body order-sm-3 ">
            <h4 className={styles.text}>Newsletter</h4>
            <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
            <form>
              <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
            </form>
            <a className="btn btn-primary mt-3" href="#">Submit</a>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 order-sm-1 order-md-2">
        <div className={`card px-5 mb-3 border-0 bg-transparent ${styles.cards}`}>
          <div className="card-body ">
            <h4 className={styles.text}>Harbringer</h4>
            <p className={styles.text}>vestibulum varius neque non posuere dapibus</p>
            <div className={styles.icons}>
              <FontAwesomeIcon className={styles.fabFacebookF} icon={fabFacebookF} />
              <FontAwesomeIcon className={styles.fabInstagram} icon={fabInstagram} />
              <FontAwesomeIcon className={styles.fabTwitter} icon={fabTwitter} />
              <FontAwesomeIcon className={styles.fabYoutube} icon={fabYoutube} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 order-sm-2 order-md-3">
        <div className={`card px-5 mb-3 border-0 bg-transparent ${styles.cards}`}>
          <div className="card-body">
            <h4 className={styles.text}>Contact us</h4>
            <p className={styles.text}> 2795 Cunningham Court<br />Rochester Hills 48306 Michigan<br /><a href="#" className="link-primary">support@company.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};

export default InformationTiles;
