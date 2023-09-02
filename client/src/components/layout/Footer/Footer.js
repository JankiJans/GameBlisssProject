import styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex justify-content-start">@ GameBLiss-ltd.</div>
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-end">
            <a href="#" className="link-primary p-1">
              About
            </a>
            <a href="#" className="link-primary p-1">
              Delivery
            </a>
            <a href="#" className="link-primary p-1">
              Returns
            </a>
            <a href="#" className="link-primary p-1">
              Privacy policy
            </a>
            <a href="#" className="link-primary p-1">
              Terms and conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
