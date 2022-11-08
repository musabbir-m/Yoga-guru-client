import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
     <img className='w-4/5 h-4/5 rounded-full' src="https://img.freepik.com/free-vector/hand-drawn-international-day-yoga_52683-38368.jpg?w=740&t=st=1667926088~exp=1667926688~hmac=f344247898cbc3b6018f90a7d0b6a2dda7f4f7bbc05f760b661691db3e66285d" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl text-emerald-400 font-bold">Login now</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;