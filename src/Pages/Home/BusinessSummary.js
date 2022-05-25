import React from 'react';
import { Rotate } from 'react-reveal';
import "./BusinessSummary.css";
import {BiUserCircle} from "react-icons/bi";
import {FcCurrencyExchange,FcRegisteredTrademark} from "react-icons/fc";
import {FaTools} from "react-icons/fa"


const BusinessSummary = () => {
    return (
        <section className='bg-white text-black'>
           <h2 className="text-center" style={{fontSize:'50px'}}>Summary</h2> 

          <Rotate right> <div className=" subscriber" >
         
         <div>
           <h2 className="number" style={{fontSize:'30px'}}>100k+</h2>
          <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><BiUserCircle></BiUserCircle> </span><span style={{fontSize:'30px'}}>Customer</span>
         </div>
         <div>
           <h2 className="number"style={{fontSize:'30px'}}>120M+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FcCurrencyExchange></FcCurrencyExchange></span><span style={{fontSize:'30px'}}>Annual Revenue</span>
         </div>
         <div>
           <h2 className="number"style={{fontSize:'30px'}}>33k+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FcRegisteredTrademark></FcRegisteredTrademark></span><span style={{fontSize:'30px'}}>Review</span>
         </div>
         <div>
           <h2 className="number"style={{fontSize:'30px'}}>50+</h2>
           <span style={{fontSize:'60px', color:'rgb(68, 11, 173)'}}><FaTools></FaTools></span><span style={{fontSize:'30px'}}>Tools</span>
         </div>
       </div></Rotate>
           </section>
    );
};

export default BusinessSummary;