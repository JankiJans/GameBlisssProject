import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MainMenu = () => {

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">BorderAds</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar className="justify-content-between">
          <div>
          </div>
          <div>
            <Nav className="ml-auto align-items-center" navbar>
                <NavItem>
                  <NavLink href="/logout">
                  <Button outline color="warning">
                      Logout
                    </Button>
                  </NavLink>
                </NavItem>
                  <NavItem>
                    <NavLink href="/login">
                   <Button outline color="warning">
                        Login
                      </Button>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register">
                    <Button outline color="warning">
                        Register
                      </Button>
                    </NavLink>
                  </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MainMenu;
