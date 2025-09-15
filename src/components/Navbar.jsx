import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = true; // Simulando que el usuario está autenticado

  if (token) {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">Pizzería Mamma Mia</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link">🍕Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/profile' className="nav-link">🔓Profile</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">🔒Logout</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link">🛒Total: {total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Pizzería Mamma Mia</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link">🍕Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/login' className="nav-link">🔐Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/register' className="nav-link">🔐Register</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link">🛒Total: {total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar
