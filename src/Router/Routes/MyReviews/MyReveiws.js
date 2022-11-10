import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReveiws = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(user);
  const notify = () => toast("Wow so easy!");


  const [myreveiws, setMyreviews] = useState([]);
  const [acknowledge, setAcknowledge]= useState(false)
  console.log(myreveiws);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyreviews(data));
  }, [email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (proceed) {
      fetch(`http://localhost:5000/service/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            
            const remaining = myreveiws.filter((review) => review._id !== id);
            setMyreviews(remaining);
            notify()
          }
          
        });
    }
  };

  // handle update review

const handleReviewUpdate = (id, text) => {
    fetch(`http://localhost:5000/service/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({text}),
    })
      .then((res) => res.json)
      .then((data) => {
        // const remaining= myreveiws.filter(odr=>odr._id!== id)
        // const updating= myreveiws.find(odr=>odr._id=== id)
        // updating.reviewText= text
        // const newReviews= [updating, ...myreveiws]
        // setMyreviews(newReviews)
        console.log(data);
        if(data.acknowledged){
            alert('review updated successfully')
            setAcknowledge(true)

        }
      });
  };

  if(myreveiws.length<1){
    return (<>
    <h2 className="text-5xl text-center my-16">No review added</h2>
    </>)
  }
  return (
    <div>


        <h2 className="text-5xl text-center p-5"> Your reviews</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {myreveiws.map((review) => (
          <MyReviewCard 
          key={review._id} 
          data={review}
          handleDelete= {handleDelete}
          handleReviewUpdate={handleReviewUpdate}
          acknowledged={acknowledge}
          >

          </MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReveiws;
