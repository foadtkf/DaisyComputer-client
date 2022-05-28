import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Fade } from 'react-reveal';
import auth from '../firebase.init';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const [user] = useAuthState(auth)

    const { email } = user
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <Fade left cascade>
            <div className='w-full mb-10'>
                <h1 className='text-2xl text-center mb-5'>My Reviews</h1>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {
                        reviews.map(review => <div className="card bg-base-100 shadow-xl hover:shadow-red-600 image-full"  rounded-lg p-2>
                            <figure><img className='opacity-70' src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878"  alt="drill machine img" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{review.name}</h2>
                                <p>{review.feedback}</p>
                                <div className="card-actions justify-end">
                                    <p>Rated {review.rating} stars</p>
                                </div>
                            </div>
                        </div>)
                    }</div>
            </div>
        </Fade>

    );
};

export default MyReview;
