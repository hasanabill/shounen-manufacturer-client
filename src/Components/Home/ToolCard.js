import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const { _id, brand, name, price, img, minimum, available } = tool;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body  ">
                    <h2 class="card-title">{brand}</h2>
                    <p>{name}</p>
                    <p>Price: {price}/piece</p>
                    <p>Minimum Order: {minimum}</p>
                    <p>In Stock: {available}</p>
                    <div class="card-actions">
                        <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;