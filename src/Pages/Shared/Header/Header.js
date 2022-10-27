import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Header = () => {
    const {user,logout} = useContext(AuthContext)

  const handleLogout = ()=>{
    logout()
    .then( ()=> {})
    .catch(error=>console.log(error))
  }
  return (
    <div className="navbar bg-base-100   shadow-md ">
      <div className="navbar-start ml-12">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
          <div className="avatar  mr-1">
          <div className="w-14 rounded-full ">
            {
                user?.photoURL ?
                <img src={user?.photoURL} title={user?.displayName} />
                :
                <FaUser className="text-3xl m-auto mt-2"></FaUser>
            }
            
          </div>
        </div>
        {
            user?.uid ?
             
             <Link onClick ={handleLogout} className="btn btn-accent">Logout</Link>
        
           :
           <>
           <Link to='/login' className="text-lg font-bold text-center">Login</Link>
           <Link to='/register' className="btn btn-primary ml-1">Register</Link>
           </>
        }
          </ul>
          
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Learner Edge</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/courses'>Courses</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-12 hidden md:flex">
        <div className="avatar  mr-1">
          <div className="w-14 rounded-full ">
            {
                user?.photoURL ?
                <img src={user?.photoURL} title={user?.displayName} />
                :
                <FaUser className="text-3xl m-auto mt-2"></FaUser>
            }
            
          </div>
        </div>
        {
            user?.uid ?
             
             <Link onClick ={handleLogout} className="btn btn-accent">Logout</Link>
        
           :
           <>
           <Link to='/login' className="text-lg font-bold">Login</Link>
           <Link to='/register' className="btn btn-primary ml-1">Register</Link>
           </>
        }
        <input type="checkbox" className="toggle ml-1"  />
       
      </div>
    </div>
  );
};

export default Header;
