import React from 'react';
import { Link } from 'react-router-dom';

const Extra1 = () => {
    return (
        <div className="hero min-h-screen bg-slate-400 py-10 mb-10">
        <div className="hero-content flex-col lg:flex-row">
          <img className='w-[700px] rounded-2xl opacity-80' src="https://images.unsplash.com/photo-1585201731775-0597e1be4bfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80" alt='' />
          <div>
            <h1 className="text-6xl font-bold text-black">GET THE</h1>
            <h1 className="text-3xl text-sky-800 font-bold">BEST TOOLS</h1>
            <p className="py-6 text-xl text-black">We provide 100% original products to our customers for more than 40 years</p>
            <Link to={'/inventory'}><button className="btn">Shop now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Extra1;