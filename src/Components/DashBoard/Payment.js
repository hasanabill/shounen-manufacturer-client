import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1iSLIOOXdauHLGUW2zSFSUq4WF6jqUkSiKwa9PlEQJjemRhzK0O3X9x8HpXnhnK5H20PuQAWle5QFawxztO3OE00y9yo0JPV');

const Payment = () => {
    const { id } = useParams()
    const url = `https://shounen-manufacturer-13.herokuapp.com/carts/${id}`

    const { data: cartItem, isLoading } = useQuery(['cartsItem', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex flex-col justify-center'>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-primary text-2xl font-bold">Hello, {cartItem.userName}</p>
                    <h2 className="card-title">Please Pay for {cartItem.toolsName.slice(0, 20)}...</h2>
                    <p>Your ordered {cartItem.quantity} of these product each cost ${cartItem.price}</p>
                    <p>Please Pay ${cartItem.totalPrice} for total</p>
                </div>
            </div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm cartItem={cartItem} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;