import React from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <SearchBox />
    </nav>
  );
};

export default Navbar;