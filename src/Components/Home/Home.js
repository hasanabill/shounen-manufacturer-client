import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Summery from './Summery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <Summery></Summery>
        </div>
    );
};

export default Home;