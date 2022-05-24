import React from 'react';
import { Link } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const { _id, brand, name, price, img, minimum, available } = tool;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{brand}</h2>
                    <p>{name}</p>
                    <p>Price: ${price}/piece</p>
                    <p>Minimum Order: {minimum}</p>
                    <p>In Stock: {available}</p>
                    <div className="card-actions">
                        <Link to={`/purchase/${_id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;