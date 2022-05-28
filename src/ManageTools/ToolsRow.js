import React from 'react';

const ToolsRow = ({ doctor: service, index, refetch, setDeletingDoctor }) => {
    const { name,price,quantity,_id } = service;
    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <label onClick={() => setDeletingDoctor(service)} for="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default ToolsRow;