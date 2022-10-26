import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    const {id,name,image}=course
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt={name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
    <Link to={`/course/${id}`} className="btn btn-primary">See details <FaArrowRight></FaArrowRight></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Courses;