import React from 'react';



const Header = () => (
  <div className="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <a className="navbar-brand">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/authenticate">Login <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
    </ul>
  </div>
</div>
)

export default Header;
  
