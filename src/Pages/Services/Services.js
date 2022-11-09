import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-10 ">
      <h2 className="text-5xl py-10 text-center">Available Trainings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} data={service}></ServiceCard>
        ))}
      </div>
      <div className="flex">
        <Link className=" mx-auto mt-5" to="/services">
        <button className="btn btn-active bg-pink-500 border-0 hover:bg-pink-400 rounded-3xl w-48">
          See All
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default Services;
