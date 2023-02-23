import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const DeleteButton = props => {
    const navigate = useNavigate()
    const { id } = props;
    const {name} = props;
    const remove = () => {
        axios.delete(`http://localhost:8080/api/pet/delete/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
            navigate(0)
    }
    return (
        <>
        <button type="button" className="btn btn-primary ms-4" onClick={remove}>Delete</button>
        </>
    )
}

export default DeleteButton;