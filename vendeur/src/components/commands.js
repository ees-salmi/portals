import React, { Component } from 'react';
import {Button, Card, Table } from 'reactstrap';
//import { Link } from 'react-router-dom';
import HorizontalForm from './HorizontalForm';
import {COMMANDS} from '../shared/commands'
import FilterForm from './FilterForm'
import Example from './LeftSideBar'
//import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
export default class Commands extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       commands : COMMANDS
    }
  }
  
   
   // componentDidMount() {
   //   ProductService.getProducts().then((response) =>
   //      {
   //        this.setState({ products: response.data });
         
   //       console.log(response);
   //       } )
   //     ;
       
   //   }

   //   addProduct(event) {

       
   //     event.preventDefault();
   
   // }
   

   
   
     render() {
       
   
       return (
         
         
         <div className="container-fluid" style={{padding:12, border: '4px solid black' , borderRadius :4}}>
           <div class="row">
         </div>
          <div className="container" style={{padding:4, border: '1px solid black' , borderRadius :2}}>
           <div class="col-12">
             <FilterForm></FilterForm>
             
           </div>
           </div>
           
            <div class="row">
              <p>Commandes :</p>
            </div>
            <div class="row">
           <div class="col-6">
                <Table bordered style={{padding:4, textAlign: 'center'}} striped hover >
            <thead>
              <tr>
                <th><input type="checkbox" id="commande" name="vehicle1" value="Bike"></input></th>
                <th>CODE</th>
                <th>Etat</th>
                <th>Date</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <th scope="row"><input type="checkbox" id="commande" name="vehicle1" value="Bike"></input></th>
               <td>123</td>
                <td><span class="badge badge-pill badge-warning">En cours</span></td>
                <td>30/02/2020</td>
                <td>5029</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" id="commande" name="vehicle1" value="Bike"></input></th>
                <td >114</td>
                <td><span class="badge badge-pill badge-success">Terminée</span></td>
                <td>30/02/2020</td>
                <td>2039</td>
              </tr>
              <tr>
              <th scope="row"><input type="checkbox" id="commande" name="vehicle1" value="Bike"></input></th>
                <td>84</td>
                <td><span class="badge badge-pill badge-success">Terminée</span></td>
                <td>30/02/2020</td>
                <td>219</td>
              </tr>
              <tr>
              <th scope="row"><input type="checkbox" id="commande" name="vehicle1" value="Bike"></input></th>
                <td >84</td>
                <td><span class="badge badge-pill badge-success">Terminée</span></td>
                <td>30/02/2020</td>
                <td>219</td>
              </tr>
            </tbody>
          </Table>
          </div>
          <div class="col-6">
          <Table borderless >
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td><Button color="link">creer commande</Button></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Button color="link">Ajouter commande</Button></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Button color="link">Modifier commande</Button></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><Button color="link">Supprimer commande</Button></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
               
            
                 
            </div>
          
              </div>
            
           </div>
         
      
       
        
       );
     }
       
     
}