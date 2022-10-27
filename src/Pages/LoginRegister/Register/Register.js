import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState("");
  

  const { createUser,updateUserProfile,varifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        handleUpdateProfile(name,photoURL)
        handleVarifyEmail()
        toast.success('Registration successfully.please verify your email')
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateProfile = (name,photoURL) =>{
    const profile = {
        displayName : name,
        photoURL : photoURL
    }
        updateUserProfile(profile)
        .then( ()=>{})
        .catch(error=>console.log(error))
  }

  const handleVarifyEmail =()=>{
    varifyEmail()
    .then(()=>{})
    .catch(error=>console.log(error))
  }

  
    return (
        
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Register our Learning-Edge platform for access our primium courses.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photoURL' placeholder="Your photo URL" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>{error}</p>
      </form>
    </div>
  </div>
</div>
        
    );
};

export default Register;