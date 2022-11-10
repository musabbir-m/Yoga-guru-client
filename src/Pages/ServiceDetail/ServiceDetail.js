import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewCard from "../Review/ReviewCard";

const ServiceDetail = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();

  const { title, img, description, level, price, _id } = data;

  const [reviews, setReviews] = useState(null);
  const [acknowledged, setAcknowledged] = useState(false);
  console.log(reviews);
  //load review
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [acknowledged]);

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name;
    const email = user?.email || "undefined";
    const photoURL = user.photoURL;
    const reviewText = form.review.value;

    const review = {
      service: _id,
      serviceName: title,
      customer: name,
      email,
      reviewText,
      photoURL,
    };

    fetch(
      "http://localhost:5000/review",

      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review added successfully");
          setAcknowledged(true);
          event.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  //   useEffect(
  //     ()=> fetch()
  //     ,[])
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="" src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      {/* review section*/}

      <div className="mt-5">
        {reviews ? (
          <>
            {" "}
            <h2 className="text-5xl text-center">Reviews</h2>
            {reviews.map((review) => (
              <ReviewCard key={review._id} data={review}></ReviewCard>
            ))}
          </>
        ) : (
          <h2 className="text-5xl text-center"> No reviews yet</h2>
        )}
        {user?.uid ? <>
            <div className="mt-10">
          <h2 className="text-3xl text-center">Add your review</h2>
          {/* form to add review */}
          <form onSubmit={handleAddReview} action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-info w-full input-bordered"
                defaultValue=""
                readOnly
              />
              <input
                type="text"
                placeholder="Your Name"
                className="input input-info w-full input-bordered  "
                defaultValue=""
              />
            </div>

            <textarea
              name="review"
              className=" mt-5 textarea textarea-info  w-full"
              placeholder="Write review"
            ></textarea>
            <input
              className="btn btn-active btn-secondary"
              type="submit"
              value="Submit review"
            />
          </form>
        </div>
        </> : <>
        <h2>Login to add review</h2>
        </>}
        
      </div>
    </div>
  );
};

export default ServiceDetail;
