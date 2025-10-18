import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {

  const { cart, setCart } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();


  let total = 0;
  cart.forEach(pizza => {
    total += pizza.price * pizza.count;
  })

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
                <button className="nav-link" onClick={logout}>🔒Logout</button>
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
