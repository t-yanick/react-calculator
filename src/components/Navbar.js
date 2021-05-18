import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/" className="link">Home | </Link>
        </li>
        <li>
          <Link to="/calculator" className="link">Calculator | </Link>
        </li>
        <li>
          <Link to="/quote" className="link">Quote of the day </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
