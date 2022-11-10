import React from "react";

const ReviewCard = ({ data }) => {
  const { serviceName, email, reviewText, customer, photoURL } = data;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{reviewText}</p>
        <div className="card-actions justify-start">
          <div className="avatar">
            {photoURL ? (
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img alt="" src={photoURL} />
              </div>
            ) : (
              <div className="avatar placeholder">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                  <span className="text-xs"></span>
                </div>
              </div>
            )}
          </div>
          <h2>{customer}</h2>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
