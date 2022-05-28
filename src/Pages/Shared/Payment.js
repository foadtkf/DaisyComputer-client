import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';
import Loading from './Loading';

const stripePromise = loadStripe('pk_test_WHT2vO4EewwarASjGqH6HvBk');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div class="card w-50 max-w-md shadow-xl my-12 mx-auto bg-neutral text-base-100">
                <div class="card-body">
                    <p className="text-success text-xl font-bold">Hello {order.email}</p>
                    <h2 class="card-title">Please pay for {order.name}</h2>
                    <p>Please pay: $ {order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl mx-auto bg-neutral text-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;