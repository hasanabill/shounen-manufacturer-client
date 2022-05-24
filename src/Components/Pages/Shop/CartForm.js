import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useForm } from 'react-hook-form';

const CartForm = ({ tool }) => {

    const { _id, brand, name, price, minimum, available } = tool;
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();



    const onSubmit = data => {
        const quantity = parseInt(data.quantity)
        const totalPrice = price * quantity;
        const cart = {
            userName: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            toolsId: _id,
            brand,
            toolsName: name,
            price,
            quantity,
            totalPrice,
            isPaid: false
        };

        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <input
                    {...register("name")}
                    type="text" value={user?.displayName} readOnly class="input input-bordered input-primary w-full max-w-xs my-2" />
            </div>
            <div className="form-control w-full max-w-xs">
                <input
                    {...register("email")}
                    type="text" value={user?.email} readOnly class="input input-bordered input-primary w-full max-w-xs my-2" />
            </div>
            <div className="form-control w-full max-w-xs">
                <input
                    {...register("address")}
                    type="text" placeholder="Your Address" class="input input-bordered input-primary w-full max-w-xs my-2" />
            </div>
            <div className="form-control w-full max-w-xs">
                <input
                    {...register("phone")}
                    type="text" placeholder="Mobile No." class="input input-bordered input-primary w-full max-w-xs my-2" />
            </div>
            <div className="form-control w-full max-w-xs">
                <input
                    {...register("quantity", {
                        min: {
                            value: minimum,
                            message: `Order cannot be lower than ${minimum} amount`
                        },
                        max: {
                            value: available,
                            message: `Order cannot be above what's available in stock`
                        }
                    })}
                    type="number" placeholder="Order Amount" class="input input-bordered input-primary w-full max-w-xs my-2"
                />
                <label className="label">
                    {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}
                    {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors?.quantity?.message}</span>}

                </label>
            </div>
            <input type="submit" value="Add To Cart" class="btn btn-bordered btn-primary w-full max-w-xs my-2" />
        </form>
    );
};

export default CartForm;