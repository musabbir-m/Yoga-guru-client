import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyReviewCard = ({ data, handleDelete, handleReviewUpdate }) => {
  const { serviceName, reviewText, photoURL, customer, service, _id } = data;

  const update = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;

    handleReviewUpdate(_id, text);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p> {reviewText}</p>
      </div>

      <div className=" mx-3 flex justify-between">
        <div className="flex justify-between">
          <div className="avatar p-3">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI6mOOSJ4gguMOqeitCMdnJqw-GNLm3VEoJReCQEOp&s"
              />
            </div>
          </div>

          <h2 className="mx-1 mt-3">{customer}</h2>
        </div>

        <div className="card-actions align-bottom justify-end">
          {/* The button to open modal */}

          {/* The button to open modal */}
          <label htmlFor="my-modal-6" className="btn">
            open modal
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Congratulations random Internet user!
              </h3>
              <form
                onSubmit={update}
                action="
    "
              >
                <input name="text" placeholder="update review" type="text" />
                <input type="submit" className="btn" value="Update" />
              </form>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  close
                </label>
              </div>
            </div>
          </div>

          {/*modal end*/}
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-xs"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
