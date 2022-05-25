import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import Loading from '../Shared/Loading';
import CartRow from './CartRow';

const MyCart = () => {
    const [user] = useAuthState(auth)
    const email = user.email;
    const url = `http://localhost:5000/cart/${email}`
    const { data: tools, isLoading, refetch } = useQuery('cart', () => fetch(url, {
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
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools?.map((tool, index) => <CartRow
                                key={tool._id}
                                tool={tool}
                                index={index}
                                refetch={refetch}
                            ></CartRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;