import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';


export default class FilterForm extends Component {


    

        render() {

        return(
            
     
            <div className="container-fluid"  >
            
            <div class="row">
              <div style={{padding:12, fontSize:14}}>
                <Form inline>
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
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="productName" className="mr-sm-2">Date:</Label>
                        <Input type="text" name="name" id="productName" placeholder="date de commande" />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="productPrice" className="mr-sm-2">Par client:</Label>
                        <Input type="text" name="price" id="productPrice" placeholder="client $" />
                    </FormGroup>
                    
                 
                          
                    <Button>Filtrer</Button>
                </Form>
                </div>
                </div>
                </div>
            
       
        );
    }
}