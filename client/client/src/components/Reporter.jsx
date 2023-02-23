import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Reporter.css'
//console.log(err.response.data.error.errors))
const Reporter = props => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [direction, setDirection] = useState("");
    const [raza, setRaza] = useState("");
    const [imagen, setImagen] = useState("");
    const [errors, setErrors] = useState([]);
   
    
    const navigate = useNavigate()

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/pet/new' ,{
            name,
            type,
            description,
            phoneNumber,
            direction,
            raza,
            imagen
        })
        .then(res => console.log("Response: ", res, navigate('/lostpets')))
        .catch(err => {const errorResponse = err.response.data.error.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);

        })
        

    }
 
    return(
       
    <>
        <h3>Se ha perdido tu mascota?</h3>
        <p>Repórtalo en el foro</p>
        <form onSubmit={onSubmitHandler}>
        <div className='PetForm-subcontainer'>
            <div className="form-group">
                <label htmlfor="exampleInputname1">Nombre</label>
                <input type="text" onChange={e=>setName(e.target.value)} className="form-control w-50 mx-auto"  id="exampleInputname1" aria-describedby="nameHelp" placeholder="Ingrese un nombre"/>
            </div> <div className="class-errors">{errors[0]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputtype1">Tipo</label>
                <input type="text" onChange={e=>setType(e.target.value)} className="form-control w-50 mx-auto"  id="exampleInputtype1" placeholder="Ingrese el tipo de mascota"/>
            </div><div className="class-errors">{errors[1]}</div>
            <div className="form-group">
                <label htmlfor="exampleFormControlTextarea1">Descripción</label>
                <textarea class="form-control w-50 mx-auto" onChange={e=>setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese una descripción"></textarea>
            </div><div className="class-errors">{errors[2]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Numero telefónico</label>
                <input type="text" className="form-control w-50 mx-auto" onChange={e=>setPhoneNumber(e.target.value)} id="exampleInputPassword1" placeholder="Ingrese un número telefónico"/>
            </div><div className="class-errors">{errors[3]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Dirección</label>
                <input type="text" className="form-control w-50 mx-auto" onChange={e=>setDirection(e.target.value)} id="exampleInputPassword1" placeholder="Ingrese una dirección"/>
            </div><div className="class-errors">{errors[4]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Raza</label>
                <input type="text" className="form-control w-50 mx-auto" onChange={e=>setRaza(e.target.value)} id="exampleInputPassword1" placeholder="Ingrese la raza"/>
            </div><div className="class-errors">{errors[5]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Imagen (URL)</label>
                <input type="text" className="form-control w-50 mx-auto" onChange={e=>setImagen(e.target.value)} id="exampleInputPassword1" placeholder="Ingrese una imagen URL"/>
            </div><div className="class-errors">{errors[6]}</div>
     
        </div>
        <button type="submit" className="btn btn-primary my-5">Submit</button>
        </form>
        </> )
    
}

export default Reporter;