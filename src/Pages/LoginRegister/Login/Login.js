import React from 'react';
import { FaGoogle, FaGithub,  } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login our Learning-Edge platform for access our primium courses.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your email" className="input input-bordered" required/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider">OR Login With</div>
        <div className='flex justify-center text-xl'>
            <FaGoogle className='mr-2'></FaGoogle>
            <FaGithub></FaGithub>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;