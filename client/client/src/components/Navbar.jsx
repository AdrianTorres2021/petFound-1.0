import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaw} from '@fortawesome/free-solid-svg-icons'
const Navbar = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <p className="navbar-brand" id="Logo-navbar">PetFound<FontAwesomeIcon icon={faPaw} /></p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
        <li className="nav-item">
        <Link className="link-to-reportar" to={`/`} >
          <a className="nav-link active px-5" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link className="link-to-reportar" to={`/lostpets`} >
          <a className="nav-link active px-5" href="#">Buscador de mascotas</a>
          </Link>
        </li>
        <li className="nav-item">
        <Link className="link-to-reportar" to={`/lostpets/new`} >
          <button className="btn btn-outline-dark px-5" href="#">Reportar</button>
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar