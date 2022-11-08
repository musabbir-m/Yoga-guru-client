import React from "react";

const ServiceCard = ({ data }) => {
  const { title, img, _id, price, level, description } = data;
  return (
    <div className="card w-96 bg-base-100 shadow-lg image-full">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
