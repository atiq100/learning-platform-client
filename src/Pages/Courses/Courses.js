import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Courses = ({ course }) => {
  const { id, name, image,price } = course;
  return (
    <div className="card w-80 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="text-lg font-bold">Price: </span>
          <span className="text-error font-bold">{price}$</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/course/${id}`} className="btn btn-primary">
            See details <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
