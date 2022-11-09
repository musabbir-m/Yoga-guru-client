import React from "react";
import { Link } from "react-router-dom";

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
        <div className="card-actions justify-between">
        <div className="badge badge-secondary text-white font-bold p-3"><p> <span className="">Price:</span>  $ {price}</p></div>
          <Link to={`/service/${_id}`}>
          <button className="btn btn-info text-white	border-0 rounded-3xl">
            See Details
          </button>
          </Link>
         
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
