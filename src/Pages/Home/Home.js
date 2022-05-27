import React from 'react';
import Reviews from '../Shared/Reviews';
import Services from '../Shared/Services/Services';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Extra1 from './Extra1';
import Extra2 from './Extra2';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Contact from './Extra/Extra';

const Home = () => {
    
  const navigate = useNavigate();
  const navigateSeemore = event => {
      navigate('/inventory');
  }
    return (
        <div>
            <Banner></Banner>
            <Services val='six'></Services>
<button class="btn btn-primary mb-3" onClick={()=>navigateSeemore()}>All tools<span><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></span></button>

            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Extra1></Extra1>
            <Extra2></Extra2>
            <Contact></Contact>
        </div>
    );
};

export default Home;