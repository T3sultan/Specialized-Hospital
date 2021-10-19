import React from 'react';
import Banner from '../Banner/Banner';
import FindADoctor from '../FindADoctor/FindADoctor';
import Footer from '../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;