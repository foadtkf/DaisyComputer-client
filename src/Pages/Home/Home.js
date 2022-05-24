import React from 'react';
import Reviews from '../Shared/Reviews';
import Services from '../Shared/Services/Services';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Extra1 from './Extra1';
import Extra2 from './Extra2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services val='six'></Services>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Extra1></Extra1>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;