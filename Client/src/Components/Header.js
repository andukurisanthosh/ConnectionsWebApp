import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='bg-dark'>
        <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <h1 className="navbar-brand text-light">MY-CONNECTIONS</h1>
          <button className="navbar-toggler  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active text-light" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/register">Register</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header