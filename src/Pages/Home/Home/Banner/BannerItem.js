import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BannerItem = ({ data }) => {
  const { id, image, next, prev } = data;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <img className="w-full h-full" src={image} alt="" />

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
