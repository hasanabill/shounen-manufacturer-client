import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const review = {
            username: data.username,
            img: user?.photoURL,
            review: data.review
        }
        fetch('https://shounen-manufacturer-13.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset()
                    toast.success('Review Added')
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-sm">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        {...register('username')}
                        type="text" value={user?.displayName} readOnly className="input input-bordered w-full max-w-sm" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea
                        {...register('review', {
                            required: {
                                value: true,
                                message: 'Write your review first'
                            }
                        })}
                        className="textarea max-w-sm textarea-bordered h-24" placeholder="Add your Review"></textarea>
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.review?.message}</span>}
                    </label>
                </div>
                <input className='btn btn-primary w-full max-w-sm text-white' type="submit" value='Add Review' />
            </form>
        </div>
    );
};

export default AddReview;