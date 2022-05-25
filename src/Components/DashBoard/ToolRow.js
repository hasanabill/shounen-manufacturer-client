import React from 'react';
import { toast } from 'react-toastify';

const ToolRow = ({ tool, index, refetch }) => {
    const { _id, img, brand, name, available } = tool;
    const handleDeleteTool = id => {
        fetch(`http://localhost:5000/tool/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success('Tool Deleted')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{brand}</td>
            <td>{name.slice(0, 20)}...</td>
            <td>{available}</td>
            <td><button
                onClick={() => handleDeleteTool(_id)}
                className='btn btn-xs btn-error'>Delete</button>
            </td>
        </tr>
    );
};

export default ToolRow;