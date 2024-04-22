import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useContext, useRef } from 'react';
import { MyContext } from './MyContext';

function NavBar() {

  const { sharedValue, updateValue } = useContext(MyContext);
  let number = sharedValue.length;

  const getShortDescription = (description, end) => {
    const shortDescription = description.substr(0,end)+"..." ;
    return shortDescription;
  }
 
  let numberofproducts = 4;
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand id='logo-text' href="#home">Taalim Jeux</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/allProducts">Produits</Nav.Link>
            <Button className='btn-success' placeholder='ecrire ici'> Promotions</Button>
            <NavDropdown title="choix" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Montessori</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Logic
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Maths
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                imagination
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <InputGroup >
            <InputGroup.Text id="basic-addon1">chercher</InputGroup.Text>
            <Form.Control
                placeholder="chercher produit"
                aria-label="produit"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            <Button className='btn-info m-2'>
              cart
              
              <span className="badge text-bg-secondary" style={{position:"absolute",top:"15px", right:"120px"}}>{number}</span>
              
            </Button>
            <Button className='btn-warning' > Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;