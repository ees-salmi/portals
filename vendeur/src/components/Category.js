import React, { useEffect } from "react";
import { Container, Table, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/actions/category-actions/fetchCategoriesAction";
import { Link } from "react-router-dom";

function Categories() {
  const { categories, loading } = useSelector(state => state.categoriesss);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <Container>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <th>category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan='2'>
                <Spinner animation='border' /> loading...{" "}
              </td>
            </tr>
          )}
          {!loading &&
            categories.map(category => (
              <tr key={category._id}>
                <td>
                  <Link to={`/category/${category._id}`}>{category.name}</Link>
                </td>
                <td>{category.description}</td>
              </tr>
            ))}
        </tbody>
        <div className='col-lg-6  col-sm-4 navbar-search'>
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='Search ......' />
        <div className='input-group-append'>
          <span className='input-group-text'>
            <i className='fa fa-search'></i>
          </span>
        </div>
      </div>
    </div>
      </Table>
     
    </Container>
  );
}

export default Categories;