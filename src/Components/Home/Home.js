import React from 'react';
import Article from '../Article/Article';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Article></Article>
            <Destinations></Destinations>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;