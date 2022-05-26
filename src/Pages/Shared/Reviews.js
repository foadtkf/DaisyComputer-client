import React, { useEffect } from 'react';
import { Fade } from 'react-reveal';
import useReviews from './../../CustomHooks/useReviews';

const Reviews = () => {
    const [reviews,setReviews]=useReviews([])
    return (
      <Fade left cascade>
<div>
            <h1 className='text-6xl mb-5'>This is reviews section</h1>
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            {
                reviews.map(review=><div class="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=878" alt="Laptop img" /></figure>
  <div class="card-body">
    <h2 class="card-title">{review.name}</h2>
    <p>{review.feedback}</p>
    <div class="card-actions justify-end">
      <p>Rated {review.rating} stars</p>
    </div>
  </div>
</div>)
            }</div>
        </div>
      </Fade>
        
    );
};

export default Reviews;