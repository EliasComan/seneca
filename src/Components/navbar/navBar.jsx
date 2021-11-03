import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import './navBar.css'


const NavBar = () =>{
    return (
        <>
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <p className="navbar-brand" >Seneca</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page" >Home</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" >Shop</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" >About us</p>
              </li>
            </ul>
            <span className="cart-span">
             <CartWidget/>
            </span>
          </div>
        </div>
      </nav>
    </header>
    </>
    
)}
export default NavBar;