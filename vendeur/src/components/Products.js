import React ,{Component}                          from 'react';
//import { Link }                       from 'react-router-dom'
import ProductService from       '../service/ProductService';
import { Table } from 'reactstrap';
import HorizontalForm from './HorizontalForm';
import {Button, Card }        from 'reactstrap';
import {PRODUCTS} from '../shared/products'


class Products extends Component{

       constructor(props) {
         super(props)
       
         this.state = {
            products : PRODUCTS
         }
       }
       
        
   componentDidMount() {
          ProductService.getProducts().then((response) =>
             {
               this.setState({ products: response.data });
              console.log(response);
              } )
            ;
            
          }

        
   RenderCard(item) {

          return(
            <div className='card'>
              <img class="card-img-top" src="..." alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{item.price}</h5>
                <p class="card-text">{item.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
          );
      
      }
        
       
      render() {
            
            return (
              
              <div className="container-fluid" style={{padding:12}}>
                <div class="row">
                  <div className="row align-items-start">
                    <div className="col-lg-4 col-md-6 col-sm-12 m-1">
                        {this.state.products.map(product =>{
                          this.RenderCard(product);
                        })}
                    </div>
                  </div>
                </div>
              </div>
             
            );
          }
            
          
}

export default Products;
