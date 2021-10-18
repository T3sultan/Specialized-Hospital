import React from 'react';
import Banner from '../Banner/Banner';
import FindADoctor from '../FindADoctor/FindADoctor';
import OnlineMedicine from '../OnlineMedicine/OnlineMedicine';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Services></Services>
            <FindADoctor></FindADoctor>
            <OnlineMedicine></OnlineMedicine>
        </div>
    );
};

export default Home;