import React from 'react';
import './navbar.css';

const Navbar = () => (
    <div className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between">
        <a href="/"
           className="navbar-brand d-flex align-items-center"
           title="PhotoStreamer">
          <strong>PhotoStreamer</strong>
        </a>
      </div>
    </div>
);

export default Navbar;
