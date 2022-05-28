import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import DeleteOrderModal from './DeleteOrderModal';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [deletingProduct,setDeletingProduct] = useState(null)
    const [user] = useAuthState(auth)
    const { email } = user
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/booking`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [email, orders, navigate])
    const handleShipping = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(),
        }).then(res => res.json().then(data => {
        }))
    }
    return (
        <div>
            <h1 className='text-2xl text-center'>Total orders: {orders.length}</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((o, index) => <tr
                                key={index}>
                                <th>{index + 1}</th>
                                <td>{(o.product).slice(0,30)}</td>
                                <td>{o.email}</td>
                                <td>{o.quantity}</td>
                                <td>
                                {(o.status === '') && <span className='text-error'>Not Paid</span>}
                                    {(o.status === 'paid') && <button onClick={() => handleShipping(o._id)} className='btn btn-sm btn-success'>Ship</button>}
                                    {(o.status === 'ship') && <span className='text-success'>Shipping</span>}
                                </td>
                                <td>
                                {(o.status==='') &&  <label onClick={()=>setDeletingProduct(o)} for="delete-order-modal" className="btn btn-error btn-sm">Delete</label>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeleteOrderModal
            deletingProduct={deletingProduct}
            setDeletingProduct={setDeletingProduct}
            >
            </DeleteOrderModal>}
        </div>
    );
};

export default ManageOrders;