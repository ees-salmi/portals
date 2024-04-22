import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { checkProductAvailablity } from '../helpers/helper';
  
const  ProductDetails = ({product}) => {

//console.log(product)
const [quantity , setQuantity] = useState(1);
useEffect(() => {
     checkProductAvailablity();
  }, []);

const {id} = useParams();
//console.log(id);
const addQuantity = () => {
    setQuantity(quantity+1);
}
const subQuantity = () => {

    if(quantity <= 1 ){
        setQuantity(1);
    } 
    else {
        let sbq = quantity - 1 ;
    setQuantity(sbq);
    }
    
}

const Pricetabe = () => {
    return(
        <Card>
        <Card.Body>
            <table>
                <thead>
                    <tr>
                        <th>prix</th>
                        <th>quantité</th>
                        <th>sous totale</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.price} dh</td>
                        <td>{quantity} unité</td>
                        <td>{quantity*product.price} unité</td>
                    </tr>
                </tbody>
                
            </table>
        </Card.Body>
        </Card>
    )
}

/*const checkProductAvailablity = () => {
    if(product == null){
      const newProduct = { title: 'product test',
       name: 'test ',
       description: 'a new product descpription',
       price: 23, quantity: 45,
       iamge: '../assets/img_avatar.png'
      };
      product = newProduct;
    }
    console.log(product);
  }*/

    return(
            <Container>
                <Row>
                    <Col >
                        <h3>{product.title}</h3>
                        <hr />
                    </Col>                
                </Row>
                <Row>
                <Col lg={6} md={6} sm={12}>
                    <Card >
                    <Card.Img style={{width:"18rem"}} top="true" src={product.image} alt="product image" />
                    <Button
                        variant="info"
                        size="lg"
                        style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        zIndex: 1, // To make sure the button appears above the image
                        }}
                    >
                        {product.price} {id} dh
                    </Button>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Footer>
                            <div><p>card footer</p></div>
                        </Card.Footer>
                    </Card.Body>
                        </Card>
                        <Container className='mt-2'>
                            <Row>
                            <InputGroup className="mb-3">
                            <Button onClick={addQuantity} variant="outline-secondary" id="button-addon1">
                                <i className="bi bi-plus-circle"></i>
                                </Button>
                                {/* <Form.Control
                                className="text-center"
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                value={quantity}
                                /> */}
                                <Button onClick={subQuantity} variant="outline-secondary" id="button-addon1">
                                <i className="bi bi-dash-circle"></i>
                                </Button>
                            </InputGroup>
                            </Row>
                            <Row>
                                <Col>
                                    <Button style={{width: '100%',marginRight:"40px"}}>add to cart</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                            <h2>description</h2>
                            <p>{product.description}</p>
                            <Pricetabe></Pricetabe>
                    </Col>
                </Row>
            </Container>  
);}
            
export default ProductDetails;