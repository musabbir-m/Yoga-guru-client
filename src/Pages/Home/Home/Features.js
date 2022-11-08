import React from "react";
import { HiCheckCircle } from "react-icons/hi"

const Features = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-10">
        <div className=" px-5 w- shadow-lg py-3 border-2 rounded-lg border-inherit hover:text-white hover:bg-cyan-400">
          <h2 className="text-3xl font-bold">Support and motivaiton</h2>
          <p className="text-xl mt-3">
            Support & Motivation We feel greatly happy with what learners can do
            to be healthy and peaceful in mind.
          </p>
        </div>
        <div className=" px-5 w- shadow-lg py-3 border-2 rounded-lg border-inherit hover:text-white hover:bg-cyan-400">
          <h2 className="text-3xl font-bold">Support and motivaiton</h2>
          <p className="text-xl mt-3">
            Support & Motivation We feel greatly happy with what learners can do
            to be healthy and peaceful in mind.
          </p>
        </div>
        <div className=" px-5 w- shadow-lg py-3 border-2 rounded-lg border-inherit hover:text-white hover:bg-cyan-400">
          <h2 className="text-3xl font-bold">Support and motivaiton</h2>
          <p className="text-xl mt-3">
            Support & Motivation We feel greatly happy with what learners can do
            to be healthy and peaceful in mind.
          </p>
        </div>
        <div className=" px-5 w- shadow-lg py-3 border-2 rounded-lg border-inherit hover:text-white hover:bg-cyan-400">
          <h2 className="text-3xl font-bold">Support and motivaiton</h2>
          <p className="text-xl mt-3">
            Support & Motivation We feel greatly happy with what learners can do
            to be healthy and peaceful in mind.
          </p>
        </div>
      </div>
      {/* home feature-2*/}
      <div className="bg-amber-50 grid grid-cols-1 lg:grid-cols-2">
        <img className="w-full rounded-xl h-full center" src="https://img.freepik.com/free-photo/portrait-young-woman-meditating-pose-lotus-isolated_231208-10371.jpg?size=626&ext=jpg&ga=GA1.2.523338265.1658893333&semt=sph" alt="" />

        <div className="p-5">
            <p className="text-emerald-500">Why yoga?</p>
          <h2 className="text-5xl py-5">
            Bring The Healthiest Change in Your Life by Yoga
          </h2>
          <p className="text-xl ">
            Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis.
            Integer rutrum ante eu lacus. Vivamus eget nibh. Etiam cursus leo
            vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
          <ul className="text-center">
            <li className="flex mt-3 mb-4" > <span className="text-green-500"> <HiCheckCircle></HiCheckCircle></span> Aliquam erat volutpat Aenean nec eros. </li>
            <li className="flex mt-3 mb-4" > <span className="text-green-500"> <HiCheckCircle></HiCheckCircle></span> Aliquam erat volutpat Aenean nec eros. </li>
            <li className="flex mt-3 mb-4" > <span className="text-green-500"> <HiCheckCircle></HiCheckCircle></span> Aliquam erat volutpat Aenean nec eros. </li>
            <li className="flex mt-3 mb-4" > <span className="text-green-500"> <HiCheckCircle></HiCheckCircle></span> Aliquam erat volutpat Aenean nec eros. </li>
            <li className="flex mt-3 mb-4" > <span className="text-green-500"> <HiCheckCircle></HiCheckCircle></span> Aliquam erat volutpat Aenean nec eros. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
