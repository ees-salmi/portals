import React, { Component } from 'react';
import Menu                 from './MenuComponent';
import DishDetail           from './DishdetailComponent'; 
import commands             from './commands'

import Header               from './HeaderComponent';
import Footer               from './FooterComponent';
import Home                 from './HomeComponent';
import Products             from './Products'
import { COMMENTS }         from '../shared/comments';
import { PRODUCTS }         from '../shared/products';
import { PROMOTIONS }       from '../shared/promotions';
import { LEADERS }          from '../shared/leaders';
import { DISHES }           from '../shared/dishes';
import About                from './AboutComponent';  
import { connect }          from 'react-redux';
import { Switch, Route,
   Redirect, withRouter }   from 'react-router-dom'


  // this pure function is used to get states from the store and make this props


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes    : props.dishes,
      comments  : props.comments,
      promotions: props.promotions,
      leaders   : props.leaders,
      products  : props.products
    };
  }
  

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    console.log("clicked") 
  }
  

  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      
      <>
         <Products></Products>
      </>  
        );
  }
}

export default Main;