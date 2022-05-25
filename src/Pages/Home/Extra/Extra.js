import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Extra.css'
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentDollar, faPhone, faTruckFast} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
const Contact = () => {
  const handleClick =()=>{
    toast.info('We are working on it!');
  }
  return (
    <Container className="w-100 mx-auto bg-light p-5 shadow-lg rounded-3 mb-lg-5">
  <Row xs={1} md={3}>
    <Col><section>
		<div>
    <h1><FontAwesomeIcon icon={faCommentDollar} style={{fontSize:'150px'}}/></h1>
			<h3 >Pay monthly at 0% APR</h3>
			<p>You can pay over time when you choose to check out with Apple&nbsp;Card Monthly Installments.†</p>
				<Link to='' onClick={handleClick}>Learn more</Link>
		</div>
	</section></Col>
    <Col><section>
			<div>
    <h1><FontAwesomeIcon icon={faTruckFast} style={{fontSize:'150px'}}/></h1>
				<h3 >Fast, free delivery</h3>
				<p >Choose free delivery or pick up available items at an Apple&nbsp;Store.</p>
				<Link to='' onClick={handleClick}>Learn more</Link>
			</div>
		</section></Col>
    <Col><section>
		<div>
    <h1><FontAwesomeIcon icon={faPhone} style={{fontSize:'150px'}}/></h1>
			<h3 >Get help buying</h3>
			<p  >Have a question? Call a Specialist or chat online.</p>
			<p>Call 01610-772131</p>
			<Link to='' onClick={handleClick}>Contact Us</Link></div>
	</section></Col>
  </Row>
  <ToastContainer></ToastContainer>
</Container>
  );
};

export default Contact;