import React from 'react';
import Reviews from '../Shared/Reviews';
import Services from '../Shared/Services/Services';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Contact from './Extra/Extra';
import Extra1 from './Extra/Extra1';

const Home = () => {
    
  const navigate = useNavigate();
  const navigateSeemore = event => {
      navigate('/inventory');
  }
    return (
        <div>
            <Banner></Banner>
            <Services val='six'></Services>
<button className="btn btn-primary mb-3" onClick={()=>navigateSeemore()}>All tools<span><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></span></button>

            <BusinessSummary></BusinessSummary>
            <Extra1></Extra1>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;