import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub,  } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error,setError] = useState('')
    const {signIn,providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider()

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            if(user.emailVerified){
                navigate(from,{replace: true})
            }
            else{
               toast.error ("Your email is not varified.please verify your email")
            }
            
            
        })
        .catch(error =>{
             console.error(error)
             setError(error.message)
            })
    }
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user
            if(user.emailVerified){
                navigate(from,{replace: true})
            }
            else{
               toast.error ("Your email is not varified.please verify your email")
            }
        })
        .catch(error => console.log(error))

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Login our Learning-Edge platform for access our primium courses.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Your email" className="input input-bordered" required/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>{error}</p>
        <div className="divider">OR Login With</div>
        <div className='flex justify-center text-xl'>
            <FaGoogle onClick={handleGoogleSignIn} className='mr-2'></FaGoogle>
            <FaGithub></FaGithub>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;