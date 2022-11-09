import React from 'react';

const ReviewCard = ({data}) => {
    const {serviceName, email, reviewText,customer}= data
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>{reviewText}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ReviewCard;