import React from 'react';
import Banner from '../Banner/Banner';
import Sliders from '../Banner/Slider/Sliders';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Stat from '../Stat/Stat';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Review />
            <Sliders />
            <Stat />
        </div>
    );
};

export default Home;