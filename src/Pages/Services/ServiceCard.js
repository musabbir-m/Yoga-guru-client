import React from "react";

const ServiceCard = ({ data }) => {
  const { title, img, _id, price, level, description } = data;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto py-5 my-2">
      <figure>
        <img className="w-full" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info text-white	border-0 rounded-3xl">
            See Details
          </button>
        </div>
      </div>
    </div>

    // <div className="card w-96 bg-base-100 shadow-lg image-full">
    //   <figure>
    //     <img src={img} alt="" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{title}</h2>
    //     <p>{description.slice(0,100)} ...</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn btn-primary">Buy Now</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ServiceCard;
