//import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { MyContext } from './MyContext';
import { useContext } from 'react';

function ProductCard({ product, setProduct}) {
  
  let { sharedValue, updateValue } = useContext(MyContext);
  const getShortDescription = (description, end) => {
    const shortDescription = description.substr(0,end)+"..." ;
    return shortDescription;
  }
  const addProductToCard = () => {
    console.log(sharedValue);
    sharedValue.push(product);
    updateValue(sharedValue);
    console.log("add to cart clicked");
    
  }

//removed href from nav.link 
  return (
    <Card>
      <Nav.Link  >
      <Card.Img variant="top" src={product.image} width={70} height={200} />
        <Button
          onClick={() => addProductToCard()}
          variant="info"
          size="sm"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1, // To make sure the button appears above the image
          }}
        >
          {product.price} dh
        </Button>
      </Nav.Link>
      <Card.Body>
        <Card.Title>{getShortDescription(product.title, 11)}</Card.Title>
        <Card.Text>
          {getShortDescription(product.description,100)}
        </Card.Text>
        <Container>
          <Row>
            <Col lg={2} sm={12} style={{margin:'3px'}}>
            </Col>
          </Row>
        </Container>
      </Card.Body>
      
    </Card>
  );
}

export default ProductCard