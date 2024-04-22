import NavBar from '../src/pages/NavBar';
import { Switch, Route, Router, BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from 'react';
import axios from "axios";
import './App.css';
import React from 'react';
import AllProducts from '../src/pages/AllProducts';
import ProductDetails from '../src/pages/ProductDetails';
import SideBar from './pages/SideBar';
import Home from './pages/Home';
import { MyContextProvider } from './pages/MyContext';
import LoginForm from './pages/login';

function App() {

  const [data, setData] = useState([]);
  const [product,setProduct] = useState();

  useEffect(() => {
    fetchData();
    //checkProductAvailablity();
  }, []);

  const fetchData = async () => {
    try {
      let response = await axios.get('https://fakestoreapi.com/products');
      setData(response.data);
      //setProduct(data[0]);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const checkProductAvailablity = () => {
    if(product == null){
      let newProduct = { title: 'product test',
       name: 'test ',
       description: 'a new product descpription',
       price: 23, quantity: 45,
       iamge: '../assets/img_avatar.png'
      };
      product = newProduct;
    }
  }

  return (
    <div className="App">
       <MyContextProvider>
      <NavBar />
      <Container>
        <Row>
          <Col xs={12} lg={2} md={6}>
              <SideBar/>
          </Col>
          <Col xs={12} lg={10} md={6}>
          
          <BrowserRouter>
              <Switch>
                <Route exact path="/allProducts"  component={() => <AllProducts data={data} setProduct={setProduct} /> } />
                <Route
                  path="/productDetails"
                  component={() => <ProductDetails product={product} />}
                />
                <Route path="/login" component={LoginForm} />
                <Route path="*" component={Home} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
      </MyContextProvider>
    </div>
  );
}

export default App;
