import React from 'react';
import { NavLink, Container } from 'reactstrap';
import { Button } from 'react-bootstrap';

import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.background}>      
          <Container>
            <div className={styles.top}>
              <div>
                <h1>GameBliss</h1>
              </div>
              <div className={styles.buttonsContainer}>
                <NavLink href="/login"><Button variant="warning">Logowanie</Button></NavLink>
                <NavLink href="/register"><Button variant="warning">Rejestracja</Button></NavLink>
              </div>
            </div>
            <div className={styles.content}>
              <h1>BEST GAMES BEST PRICES!</h1>
              <p>TEST 2</p>
              <NavLink to="/register">
                <Button>DOŁĄCZ DO NAS</Button>
              </NavLink>
            </div>
          </Container>
      </div>
    </div>
  );
};

export default MainMenu;
