import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {_id, name, img, description, price,quantity,brand} = service;
    const navigate = useNavigate();


    const navigateToUpdate = id =>{
        navigate(`/update/${id}`);
    }

    return (
        <div className='service p- w-100 shadow'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2><strong>
            <p>Price: ${price} </p>
            <p>Available: {
                quantity>0? <span>{quantity}</span>:<span style={{color:'red'}}>stock out</span>
            }</p></strong>
            <p><strong>{brand}</strong></p>
            <button onClick={() => navigateToUpdate(_id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Service;