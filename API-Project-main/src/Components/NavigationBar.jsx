import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const [showCart, setShowCart] = useState(false);

    const handleCartButtonClick = () => {
      setShowCart(true);
    };
  
    const handleCloseCart = () => {
      setShowCart(false);
    };
    const signUpbtn ={
        color: "#800080",
        backgroundColor: "white",
    }
    return (
        <>
        <Navbar style={{backgroundColor:"black"}} expand="lg">
            <Container>
                <Link className='navbar-brand' style={{color:"white"}} to="/"><b>Online Store</b></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="/" style={{color:"white"}}>Home</Link>
                        <Link className='nav-link' to="/products" style={{color:"white"}}>Products</Link>
                        <Link className='nav-link' to="/About" style={{color:"white"}}>About</Link>
                        <Link className='nav-link' to="/Contact" style={{color:"white"}}>Contact</Link>
                  
              <span className="nav-link" onClick={handleCartButtonClick}>
                <FaShoppingCart />
              </span>
                    </Nav>
                    </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>          
        </>
    );
}

export default NavigationBar;