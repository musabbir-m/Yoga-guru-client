import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Signup = () => {
  const { user, signUp, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        setError("");
        form.reset()
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen rounded-lg bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Please Register</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p>
                    Already have an accout?{" "}
                    <Link
                      className="bg-green-500 rounded px-3 hover:bg-green-400"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-3">
              <p className="text-red-500">{error}</p>
                {success && (
                  <p className="text-success p-2">Registerd successfully</p>
                )}
                <button className="btn btn-success">Register</button>
              </div>
            </form>
            <p className="text-center">or</p>
            <button
              onClick={handleGithubSignIn}
              className="btn mb-5 w-2/3 mx-auto"
            >
              Sign in with github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
