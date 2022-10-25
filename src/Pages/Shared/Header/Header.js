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
    <div className="navbar bg-base-100   shadow-md">
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
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Learner Edge</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-12">
        <div className="avatar online mr-1">
          <div className="w-14 rounded-full">
            {
                user?.photoURL ?
                <img src={user?.photoURL} title={user?.displayName} />
                :
                <FaUser></FaUser>
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
       
      </div>
    </div>
  );
};

export default Header;
