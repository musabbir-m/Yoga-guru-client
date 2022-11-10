import React from 'react';

const ReviewCard = ({data}) => {
    const {serviceName, email, reviewText,customer, photoURL}= data
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{serviceName}</h2>
    <p>{reviewText}</p>
    <div className="card-actions justify-end">
     <img src={photoURL} alt="" />
    </div>
  </div>
</div>
    );
};

export default ReviewCard;