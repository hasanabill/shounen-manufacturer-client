import React from 'react';
import { toast } from 'react-toastify';

const CartRow = ({ tool, refetch, index }) => {

    const cancelOrder = id => {
        fetch(`https://shounen-manufacturer-13.herokuapp.com/cart/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success('Order Canceled')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tool.userName}</td>
            <td>{tool.toolsName.slice(0, 20)}...</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>${tool.quantity}</td>
            <td>${tool.price}</td>
            <td>${tool.totalPrice}</td>
            {
                tool.isPaid ?
                    <td>Paid</td>
                    :
                    <td><button className='btn btn-primary btn-xs'>Pay</button></td>
            }
            <td><button
                onClick={() => cancelOrder(tool._id)}
                className='btn btn-error btn-outline btn-xs'>Cancel</button></td>
        </tr>
    );
};

export default CartRow;