import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'
import './PetCards.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const PetCards = props => {
    const [busqueda, setBusqueda] = useState("");
    const [petSearch, setPetSearch] = useState([]);
    const [pet, setPet] = useState([]);

  

    

    useEffect(() => {
        axios.get('http://localhost:8080/api/pet')
        .then(res=>{
        setPet(res.data.list)
        setPetSearch(res.data.list)})
        
        .catch(err=>console.log("Error: ", err))
    }, []);
    const handleChange = e => {
        e.preventDefault();
        setBusqueda(e.target.value);
        console.log('Búsqueda: '+e.target.value);
        filtrar(e.target.value);
    }

    

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda=petSearch.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.raza.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return ( elemento);
            }
        })
        setPet(resultadosBusqueda)
        console.log("pet:", pet)
    }
   
      
    return(
        
        <>
        <h1>Foro de mascotas perdidas</h1>
        <div className="containerInput d-flex my-5">
                
                <label class="form-label" for="form1" id="search-input"></label>
                <input 
                type="search"
                className="form-control m w-50"
                value={busqueda}
                id="form1"
                placeholder="Busqueda por nombre o raza"
                onChange={handleChange}
                />
           
            <button type="button" class="btn btn-primary">
                <i class="fas fa-search"><FontAwesomeIcon icon={faSearch}/></i>
            </button>
            
        </div>
        <div className="row card d-flex flex-row">
        {pet.map((pet, index) => {
            const {name, type, description, phoneNumber, imagen, _id, raza, direction} = pet
        return(
        
            <div className="card w-25 mx-5 my-5 " key={_id}>
                <img src={imagen} className="card-img-top mt-3" alt="..." ></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Tipo: {type}</p>
                    <p className="card-text">Raza: {raza}</p>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Número de contacto: {phoneNumber}</p>
                    <p className="card-text">Dirección: {direction}</p>
                    <Link className="link-to-reportar" to={`/pet/${pet._id}/edit`} >
                    <a href="#" className="btn btn-primary">Edit</a>
                    </Link>
                    <DeleteButton id={_id} name={name}/>
                    
                </div>
            </div>
        )
})}</div>
 </>   )
}

export default PetCards