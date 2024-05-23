import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount, searchTerm, handleSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">E-Commerce</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <Link to= '/' className="nav-link" href="#">Products</Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="btn btn-outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          {/* <a  className="nav-link" href='#'>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemCount})
          </a> */}
          <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemCount})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
