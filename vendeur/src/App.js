import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/MainComponent';
import { COMMENTS }         from './shared/comments';
import { PRODUCTS }         from './shared/products';
import { PROMOTIONS }       from './shared/promotions';
import { LEADERS }          from './shared/leaders';
import { DISHES }           from './shared/dishes';

import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      // <Provider>
        <BrowserRouter>
          <div className="App">
            {/* <Main dishes={DISHES} comments={COMMENTS} products={PRODUCTS} promotions={PROMOTIONS} leaders={LEADERS} /> */}
          </div>
        </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
