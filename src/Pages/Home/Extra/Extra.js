import React, { useState } from "react";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDollar, faPhone, faTruckFast} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
const Contact = () => {
  const handleClick =()=>{
    toast.info('We are working on it!');
  }
  return (
	<Fade left cascade>
	  <div className="grid lg:grid-cols-3 border-4 p-5 m-5 shadow-md shadow-slate-300 rounded-lg gap-4">
<section className="hover:shadow-red-600 hover:shadow-xl rounded-lg p-2">
		<div>
    <h1><FontAwesomeIcon icon={faCommentDollar} style={{fontSize:'150px'}}/></h1>
			<h3 className="text-2xl">Pay monthly at 0% APR</h3>
			<p className='text-xl'>You can pay over time when you choose to check out with Daisy&nbsp;Card Monthly Installments.†</p>
				<Link to='' className="btn" onClick={handleClick}>Learn more</Link>
		</div>
	</section>
	<section className="hover:shadow-red-600 hover:shadow-xl rounded-lg p-2">
			<div>
    <h1><FontAwesomeIcon icon={faTruckFast} style={{fontSize:'150px'}}/></h1>
				<h3 className="text-2xl">Fast, free delivery</h3>
			<p className='text-xl'	>Choose free delivery or pick up available items at an Daisy&nbsp;Store.</p>
				<Link to='' className="btn" onClick={handleClick}>Learn more</Link>
			</div>
		</section>
		<section className="hover:shadow-red-600 hover:shadow-xl rounded-lg p-2">
		<div>
    <h1><FontAwesomeIcon icon={faPhone} style={{fontSize:'150px'}}/></h1>
			<h3 className="text-2xl">Get help buying</h3>
			<p className='text-xl' >Have a question? Call a Specialist or chat online.</p>
			<p>Call 01610-772131</p>
			<Link to='' className="btn" onClick={handleClick}>Contact Us</Link></div>
	</section>
	  </div>
	  </Fade>
  );
};

export default Contact;