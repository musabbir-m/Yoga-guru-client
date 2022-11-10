import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import './BannerItem.css'
const BannerItem = ({ data }) => {
  const { id, image, next, prev } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      
      <img id="carousel-img" className="w-full rounded-xl" src={image} alt="" />

      <div className="absolute flex justify-end transform -translate-y-1/2 left-48  top-1/2">
          <h1 className="text-6xl text-green-600 font-bold">
            Best Yoga Training Services and <br /> Yoga Session for You
          </h1>
        </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className=" btn btn-circle btn-success ">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-success">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
