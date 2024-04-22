import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';


export default class HorizontalForm extends Component {

  
    

        render() {

        return(
            
    
              <div style={{padding:12, fontSize:14}}>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="productName" className="mr-sm-2">Nom:</Label>
                        <Input type="text" name="name" id="productName" placeholder="nom du produit" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="productPrice" className="mr-sm-2">prix:</Label>
                        <Input type="text" name="price" id="productPrice" placeholder="prix $" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="quantity" className="mr-sm-2">quantité:</Label>
                        <Input type="text" name="stock" id="quantity" placeholder="quantité en stock" />
                    </FormGroup>
                    
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Col sm={5}>
                            <Input type="select" name="category" id="category">
                                <option>Electronique</option>
                                <option>Alimentaion</option>
                                <option>Beauté</option>
                                <option>Electroménager</option>
                                <option>Accessoires</option>
                            </Input>
                            </Col>
                    </FormGroup>
                          
                    <Button color="success">Ajouter</Button>
                </Form>
                </div>
            
       
        );
    }
}