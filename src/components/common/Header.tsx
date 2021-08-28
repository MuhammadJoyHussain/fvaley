import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from 'assets/images/fvaly.png';
import { BiSearch, BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import { IProduct } from 'types';
import { Link } from 'react-router-dom';

const Header = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);

  return (
    <div className="header-component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex align-items-center gap-3">
            <li>
              <FiPhoneCall /> <a href="tel:01714454178">01714454178</a>
            </li>
            <li>
              <FaRegEnvelope />{' '}
              <a href="mail-to:support@gmail.com">support@gmail.com</a>
            </li>
          </ul>
          <div>
            <BsPhone /> <a href="">Save big on our app</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <img className="branding" src={logo} alt="" />
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search Here..."
                aria-lebel="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News Feed</Nav.Link>
            <Nav.Link href="#features">Marcent Zone</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
