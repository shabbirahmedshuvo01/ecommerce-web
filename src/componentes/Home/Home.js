import React from 'react';
import Login from '../Autherntication/Login/Login';
import Singup from '../Autherntication/Singup/Singup';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Stat />
            <Review />
        </div>
    );
};

export default Home;