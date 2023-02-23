import React from 'react';
import CardMain from '../components/Card-main';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Prices from '../components/Prices';


const Home = () => {

    return(
        <div>
            <Navbar />
            <CardMain />
            <Carousel />
            <Prices />
            <Footer />
        </div>
    )
}

export default Home