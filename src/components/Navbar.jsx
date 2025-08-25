import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;

  if (token) {
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
                <a className="nav-link active" aria-current="page" href="#">🍕Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔓Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔒Logout</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🛒Total: {total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</a>
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
                <a className="nav-link active" aria-current="page" href="#">🍕Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🔐Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">🛒Total: {total.toLocaleString("es-CL", {style:"currency", currency:"CLP"})}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }

}

export default Navbar
