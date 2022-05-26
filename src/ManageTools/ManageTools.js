import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useServices from '../CustomHooks/useServices';

const ManageTools = (props) => {
    const six=props.val
    const [services,setServices]=useServices(six);
    const handleDelete=id=>{
        const proceed =window.confirm('R you sure?')
        if(proceed){
            fetch(`http://localhost:5000/products/${id}`,{
                method:'DELETE',
                headers: {
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },})
                .then(res=>{
                  if(res.status === 403){
                  toast.error('Failed to delete tool');
              }
                return  res.json()})
                .then(data=>{
                  if (data.modifiedCount > 0) {
                    toast.error('Deleted Successfully!')
                }
                    const remaining=services.filter(service=>service._id !== id)
                    setServices(remaining)
                    
                }
                )
                
        }
    }
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Manage</th>
      </tr>
    </thead>
    <tbody>
      {
          services.map((service,index)=><tr class="hover">
        <th>{index+1}</th>
        <td>{service.name}</td>
        <td>{service.price}</td>
        <td>{service.quantity}</td>
      <td><button class="btn btn-outline btn-error" onClick={()=>handleDelete(service._id)}>Delete</button></td>

      </tr>)
      }
    </tbody>
  </table>
  <ToastContainer/>
</div>
    );
};

export default ManageTools;