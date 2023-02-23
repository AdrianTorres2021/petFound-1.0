
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';
import Editor from '../components/Editor';

import Navbar from '../components/Navbar';
import Footer2 from '../components/Footer-2';

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const [pet, setPet] = useState({
        name: '',
        type: '',
        description: '',
        phoneNumber:'',
        direction:'',
        raza: '',
        imagen:''
    })
    useEffect(() => {
        axios.get(`http://localhost:8080/api/pet/${id}`)
            .then(res => setPet(res.data.pet))
            .catch(err => console.log(err))
    }, [id])
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/pet/update/${id}`, {
            ...pet
        })
            .then( res => console.log(res, navigate('/lostpets')))
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
        <Navbar />
        <Editor onSubmitHandler={onSubmitHandler} pet={pet} setPet={setPet} errors={errors}/>
        <Footer2 />
        </>
    )
}

export default Edit