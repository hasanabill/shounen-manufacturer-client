import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {

    const { data: reviews, isLoading } = useQuery('review', () => fetch('https://shounen-manufacturer-13.herokuapp.com/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='m-8'>
            <h1 className="text-3xl text-center font-bold">Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        rev={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;