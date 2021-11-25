import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'
import { CartContext } from '../CartContext/CartContextProvider';
import './navBar.css'


const NavBar = () =>{
  const   { cantCart } = useContext(CartContext);
  
  return (
        <>
        <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
          <h1 className="navbar-brand" ><Link to='/' className="navbar-brand" > SENECA </Link> </h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/lazylion' className="nav-link" >Lazy-lions</Link>
              </li>
              <li className="nav-item">
                <Link to='/hashmask' className="nav-link" >Hashmask</Link>
              </li>
              <li className="nav-item">
                <Link to='/boredape' className="nav-link" >Bored-ape</Link>
              </li>
              <li className="nav-item">
                <Link to='/lostpoets' className="nav-link" >Lost-Poets</Link>
              </li>
            </ul>
            <span className="cart-span">
            <Link to='/cart'> <CartWidget/> </Link>
            </span>
            { cantCart > 0 ?
            <h3 className='cantidad'>{cantCart}</h3>
          : <></>}
            <div >
            </div>
          </div>
        </div>
      </nav>
    </header>
    </>
    
)}
export default NavBar;