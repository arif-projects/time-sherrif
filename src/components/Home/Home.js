import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Offer from './Offer/Offer';
import Product from './Products/Product';
import Review from './Review/Review';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Product></Product>
            <Offer></Offer>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;