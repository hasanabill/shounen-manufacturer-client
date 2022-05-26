import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ cartItem }) => {

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transiction, setTransiction] = useState('');

    const { _id, totalPrice, userName, email, phone } = cartItem;

    useEffect(() => {
        fetch(`https://shounen-manufacturer-13.herokuapp.com/payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price: totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [totalPrice])

    const handleSubmit = async e => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        setCardError(error?.message || '');
        setSuccess('')
        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                        phone: phone
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message)
        }
        else {
            setCardError('')
            console.log(paymentIntent)
            setTransiction(paymentIntent.id)
            setSuccess('Payment Completed')
        }

        const payment = {
            orderId: _id,
            traxId: paymentIntent.id
        }
        // update cart payment 
        fetch(`https://shounen-manufacturer-13.herokuapp.com/cart/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                success && <div className='text-green-400'>
                    <p>{success}</p>
                    <p>TrxId: <span className='text-red-600'>{transiction}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;