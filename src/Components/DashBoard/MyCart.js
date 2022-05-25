import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';

const MyCart = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const url = `http://localhost:5000/cart/${email}`
    const { data: tools, isLoading } = useQuery('cart', () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Name</th>
                            <th>company</th>
                            <th>Quantity</th>
                            <th>Price/piece</th>
                            <th>Total</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr>
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
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;