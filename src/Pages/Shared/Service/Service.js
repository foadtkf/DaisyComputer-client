import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Service.css';

const Service = ({service}) => {
    const [user] = useAuthState(auth);
    const {_id, name, img, description, price,quantity,brand,minquantity} = service;
    const navigate = useNavigate();


    const navigateToPurchase = id =>{
        navigate(`/purchase/${id}`);
    }

    return (
        <div className='service p- w-100 hover:shadow-slate-500 shadow-2xl hover:border-8 border-x-sky-800'>
            <img className='w-80 mx-auto my-5 h-52 rounded-md' src={img} alt="" />
            <h2>{name}</h2><strong>
            <p>Price: ${price} </p>
            <p>Available: {
                quantity>minquantity? <span>{quantity}</span>:<span style={{color:'red'}}>stock out</span>
            }</p></strong>
            <button onClick={() => navigateToPurchase(_id)} className='btn btn-primary'>Purchase</button>
        </div>
    );
};

export default Service;