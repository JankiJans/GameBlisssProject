import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts, getProducts } from '../../../redux/productsRedux';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const dispatch = useDispatch();
  const allProducts = useSelector(getProducts);
  console.log(allProducts)

  useEffect(() => {
    if (searchPhrase.trim() === '') {
      dispatch(searchProducts('')); // Display all products if searchPhrase is empty
    } else {
      dispatch(searchProducts(searchPhrase));
    }
  }, [searchPhrase, dispatch]);

  return (
    <div className="container d-flex align-items-center">
      <Form.Group controlId="searchForm" className="d-flex align-items-center">
        <Form.Control
          placeholder="Search..."
          type="text"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          style={{ width: '250px', marginRight: '10px' }}
        />
        <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
      </Form.Group>
    </div>
  );
};

export default SearchBar;
