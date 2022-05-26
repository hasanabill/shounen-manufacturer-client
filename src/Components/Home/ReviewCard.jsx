import React from 'react';
import avatar from '../../assets/images/avater.png'

const ReviewCard = ({ rev }) => {
    const { username, img, review } = rev;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="avatar card-body items-center p-0 pt-10">
                <div class="w-16 rounded-full">
                    <img src={img || avatar} alt='' />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{username}</h2>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;