import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Addservice = () => {
  const { user } = useContext(AuthContext);

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const level = form.level.value;
    const price= form.price.value
    const photoURL = form.photourl.value;
    const serviceDetails = form.details.value;

    const service = {
      title,
      img: photoURL,
      price,
      level,
      description: serviceDetails,
      
    };

    fetch(
        "http://localhost:5000/service",
  
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
  
           
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.acknowledged) {
            alert("service added successfully");
            event.target.reset();
          }
        })
        .catch((err) => console.log(err));
  };

  return (
    <div>
        <h2 className="text-5xl text-center">Add a Yoga training</h2>
      <form onSubmit={handleAddService} action="">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-3 mt-5">
          <input
          name="title"
            type="text"
            placeholder="Service Name"
            className="input input-info w-full input-bordered  "
            defaultValue=""
          />
          <input
            type="text"
            placeholder="service photo url"
            className="input input-info w-full input-bordered  "
            name="photourl"
          />
          <input
            type="text"
            placeholder="Price"
            className="input input-info w-full input-bordered  "
            name="price"
          />
          <input
            type="text"
            placeholder="Level (Beginner, Intermediate, Advance)"
            className="input input-info w-full input-bordered  "
            name="level"
          />
        </div>

        <textarea
          name="details"
          className=" mt-5  textarea textarea-info  w-full"
          placeholder="Service details"
        ></textarea>
        <input
          className="btn btn-active btn-secondary flex justify-center"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default Addservice;
