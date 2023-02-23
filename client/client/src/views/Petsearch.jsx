import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PetCards from '../components/PetCards';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';





const Petsearch = () => {
    

    return (
        <>
            <Navbar />
            <PetCards />
            <Footer />
        </>
    )
}

export default Petsearch;