import React from 'react';
import { Link } from 'react-router-dom';

const Editor = (props) => {
    const { onSubmitHandler, pet, setPet, errors } = props;
    console.log(errors)
    
    return(
    <div>
        <div className="Edit-Header mb-3">
            </div>
            <h3 id="Edit-name">Edit {pet.name}</h3>
            <div className="Edit-container">
                
            <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className ="Errors">
        
        </div>
            <div className="form-group">
                <label htmlfor="exampleInputname">Nombre</label>
                <input type="text" value={pet.name} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, name: e.target.value })} id="exampleInputname" aria-describedby="emailHelp" placeholder="Ingrese un nombre"/>
            </div> <div className="class-errors">{errors[6]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Tipo</label>
                <input type="text" value={pet.type} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, type: e.target.value })} id="exampleInputPassword1" placeholder="Ingrese el tipo de mascota"/>
            </div><div className="class-errors">{errors[5]}</div>
            <div className="form-group">
                <label htmlfor="exampleFormControlTextarea1">Descripción</label>
                <textarea class="form-control w-50 mx-auto" value={pet.description} onChange={e=>setPet({ ...pet, description: e.target.value })} id="exampleFormControlTextarea1" rows="3" placeholder="Ingrese una descripción"></textarea>
            </div><div className="class-errors">{errors[4]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Numero telefónico</label>
                <input type="text" value={pet.phoneNumber} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, phoneNumber: e.target.value })} id="exampleInputPassword1" placeholder="Ingrese un número telefónico"/>
            </div><div className="class-errors">{errors[3]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Dirección</label>
                <input type="text" value={pet.direction} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, direction: e.target.value })} id="exampleInputPassword1" placeholder="Ingrese una dirección"/>
            </div><div className="class-errors">{errors[2]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Raza</label>
                <input type="text" value={pet.raza} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, raza: e.target.value })} id="exampleInputPassword1" placeholder="Ingrese la raza"/>
            </div><div className="class-errors">{errors[1]}</div>
            <div className="form-group">
                <label htmlfor="exampleInputPassword1">Imagen(URL)</label>
                <input type="text" value={pet.imagen} className="form-control w-50 mx-auto" onChange={e=>setPet({ ...pet, imagen: e.target.value })} id="exampleInputPassword1" placeholder="Ingrese una imagen URL"/>
            </div><div className="class-errors">{errors[0]}</div>
            <button type="submit" className="btn btn-primary my-5">Submit</button>
                    </form>
                    </div>
    </div>
    )
}

export default Editor