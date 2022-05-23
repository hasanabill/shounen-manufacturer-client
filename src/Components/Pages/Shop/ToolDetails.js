import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const ToolDetails = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/tool/${id}`;

    const { data: tool, isLoading } = useQuery('tools', () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const { brand, name, price, img, minimum, available } = tool;

    return (
        <>
            <div class="flex flex-col w-full lg:flex-row my-20">
                <div class="grid flex-grow lg:w-1/2 card rounded-box place-items-center">
                    <img src={img} alt="" />
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="p-10 lg:w-1/2">
                    <p className='text-3xl py-2'>Brand: <span className='font-bold'>{brand}</span></p>
                    <p className='text-xl py-2'>Tool: <span className='font-bold'>{name}</span></p>
                    <p className='text-xl py-2'>Stock: <span className='font-bold'>{available}</span></p>
                    <p className='text-xl py-2'>Minimum Order Quantity: <span className='font-bold'>{minimum}</span></p>
                    <p className='text-xl py-2'>Price: <span className='font-bold'>{price}</span></p>
                    <input type="number" placeholder="Type here" class="input input-bordered input-primary lg:w-1/4 max-w-xs my-2" />
                    <br />
                    <input type="submit" value="Add To Cart" class="btn btn-bordered btn-primary lg:w-1/4 max-w-xs" />
                </div>
            </div>
        </>
    );
};

export default ToolDetails;