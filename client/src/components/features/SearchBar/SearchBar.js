// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { searchProducts, getProducts } from '../../../redux/productsRedux';
// import { Form } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { getFilteredProducts } from '../../../redux/productsRedux';

// const SearchBar = () => {
//   const [searchPhrase, setSearchPhrase] = useState('');
//   const dispatch = useDispatch();
//   const filteredProducts = useSelector(getFilteredProducts); 

//   useEffect(() => {
//     dispatch(searchProducts(searchPhrase.toLowerCase()));
//   }, [searchPhrase, dispatch]);

//   return (
//     <div className="container d-flex align-items-center">
//       <Form.Group controlId="searchForm" className="d-flex align-items-center">
//         <Form.Control
//           placeholder="Search..."
//           type="text"
//           value={searchPhrase}
//           onChange={(e) => setSearchPhrase(e.target.value)}
//           style={{ width: '250px', marginRight: '10px' }}
//         />
//         <FontAwesomeIcon icon={faSearch} style={{ cursor: 'pointer' }} />
//       </Form.Group>
//     </div>
//   );
// };

// export default SearchBar;
