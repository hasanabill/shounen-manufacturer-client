import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddTools = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '9b8dbad3edc90017f5d5f1e9d44f25ec';

    const onSubmit = data => {
        const image = data.img[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const newTool = {
                        brand: data.brand,
                        name: data.name,
                        price: parseInt(data.price),
                        minimum: parseInt(data.minimum),
                        available: parseInt(data.available),
                        img
                    }

                    fetch(`https://shounen-manufacturer-server.vercel.app/tool`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newTool)
                    })
                        .then(res => res.json())
                        .then(posted => {
                            if (posted.insertedId) {
                                toast.success('New Tool Added');
                                reset();
                            }
                            else {
                                toast.error('failed to add');
                            }
                        })

                }
            })
    }
    return (
        <div>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center '>
                    <h1 className="text-3xl text-primary text-center my-3">Add a New Tool</h1>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("brand", {
                                required: {
                                    value: true,
                                    message: 'Please provide brand name'
                                },
                            })}
                            type="text" placeholder='Product Brand' className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.brand?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.brand?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Please provide product name'
                                },
                            })}
                            type="text" placeholder='Product Name' className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.name?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Please add price of the product'
                                },
                            })}
                            type="number" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.price?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("minimum", {
                                required: {
                                    value: true,
                                    message: 'Please Add quantity'
                                },
                            })}
                            type="number" placeholder="Minimum Order Quantity" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.minimum?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.minimum?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("available", {
                                required: {
                                    value: true,
                                    message: 'Please Add quantity'
                                },
                            })}
                            type="number" placeholder="Total quantity in stock" className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.available?.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'Please choose an image of the product'
                                },
                            })}
                            type="file" placeholder="Mobile No." className="input input-bordered input-primary w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors?.img?.message}</span>}
                        </label>
                    </div>
                    <input type="submit" value="Add To Cart" className="btn btn-bordered btn-primary w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default AddTools;