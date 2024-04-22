import ProductCard from './ProductCard';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useState,useEffect } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { getShortDescription } from '../helpers/helper';


function AllProducts({data, setProduct}) {

  const location = useLocation();

  return (
    <div className="AllProducts">
       
        <>
          <Container style={{marginTop:'10px'}}>
          <Row gutter={16}>
          {data.map(item => (
              <Col style={{marginTop:'10px'}} lg={3} sm={12}>
                <ProductCard product = {item}/>
              </Col>
          ))}
          </Row>
          </Container>
        </>
    </div>
  );
}

export default AllProducts;
