import React from 'react';

const ToolCard = ({ tool }) => {
    const { brand, name, price, img } = tool;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{brand}</h2>
                    <p>{name}</p>
                    <p>{price}/piece</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolCard;