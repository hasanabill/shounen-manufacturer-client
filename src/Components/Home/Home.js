import React from 'react';
import Banner from './Banner';
import Chart from './Chart';
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
            <Chart></Chart>
        </div>
    );
};

export default Home;