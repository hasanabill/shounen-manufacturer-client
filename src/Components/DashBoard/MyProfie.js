import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyProfie = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const email = user?.email;

    const { data: dbUser, isLoading, refetch } = useQuery('users', () => fetch(`https://shounen-manufacturer-13.herokuapp.com/user/${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        fetch(`https://shounen-manufacturer-13.herokuapp.com/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('update user', data)
                if (data.acknowledged) {
                    toast.success('Profile updated')
                    refetch()
                    reset()
                }
            })
    }
    return (
        <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow  card  rounded-box items-center">
                <form className='flex flex-col justify-center items-center '>
                    <h1 className="text-3xl text-primary text-center my-3">Your Profile</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Name
                        </label>
                        <input type="text" readOnly value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Email
                        </label>
                        <input type="text" readOnly value={user?.email} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Education
                        </label>
                        <input type="text" readOnly value={dbUser?.education} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Phone
                        </label>
                        <input type="text" readOnly value={dbUser?.phone} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            Address
                        </label>
                        <input type="text" readOnly value={dbUser?.address} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            LinkedIn Profile
                        </label>
                        <input type="text" readOnly value={dbUser?.linkedin} className="input input-bordered input-primary w-full max-w-xs"
                        />
                    </div>

                </form>
            </div>

            <div class="divider lg:divider-horizontal"></div>

            <div class="grid flex-grow  card  rounded-box items-center">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center '>
                    <h1 className="text-3xl text-primary text-center my-3">Your Profile</h1>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("name")}
                            type="text" value={user?.displayName} className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("email")}
                            type="email" value={user?.email} className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("education")}
                            type="text" placeholder="Last Education" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("phone")}
                            type="text" placeholder="Phone No." className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("address")}
                            type="text" placeholder="Your Address" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("linkedin")}
                            type="text" placeholder="LinkedIn Profile Link" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.available?.message}</span>}
                        </label>
                    </div>
                    <input type="submit" value="Update" className="btn btn-bordered btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default MyProfie;