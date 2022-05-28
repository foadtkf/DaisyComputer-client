import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deletingProduct,refetch,setDeletingProduct}) => {
    const {_id,product} = deletingProduct
    const handleDelete = () => {
        fetch(`http://localhost:5000/booking/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product: ${product} was removed`)
                    setDeletingProduct(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to remove {product}?</h3>
                    <div className="modal-action">
                    <button onClick={()=>handleDelete()} className='btn btn-error'>Yes</button>
                        <label for="delete-order-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default DeleteOrderModal;