import React from 'react'
import { Link } from 'react-router-dom'

const CardMain = () =>{
    return(
        <div class="card mx-auto w-50 my-5">
  
  <div class="card-body mx-auto py-0">
    <div class="card-body w-50 me-auto d-inline">
    <h5 class="card-title ps-5">Bienvenido a PetFound</h5>
        <p class="card-text ps-5">El portal web para buscar mascotas perdidas.</p>
        <p class="card-text ps-5">Registrate o inicia sesión para acceder al buscador de mascotas perdidas o registrar una mascota perdida</p>
    </div>
    <div class="card-body">
    <Link className="link-to-reportar" to={`/register`} >
    <a href="#" class="btn btn-primary  me-auto">Register or Log in</a>
          </Link>
    
    </div>
  </div>
</div>
    )
}

export default CardMain