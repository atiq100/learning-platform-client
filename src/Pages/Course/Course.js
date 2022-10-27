import React from "react";
import { FaClock, FaDownload, FaVideo } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef()
const Course = () => {
  const course = useLoaderData();
  const { name, image, price, id, description,Time,duration } = course;
  return (
    <div>
        <h2 className="text-xl font-semibold mt-6">Course Details</h2>
        <div className="card w-full md:w-3/4 bg-base-100 shadow-xl mt-4">
          <div className="flex justify-end mr-4 mt-2 text-primary">
            <Pdf targetRef={ref} filename="course.pdf">
            {({ toPdf }) => <button onClick={toPdf} title="download pdf"><FaDownload></FaDownload></button>}
            </Pdf>
          </div>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 ref={ref} className="card-title">{name}</h2>
        <p>{description}</p>
        <p><span className="text-lg font-bold">Price: </span><span className="text-error font-bold">{price}$</span></p>
        <div className="flex justify-items-start">
            <p className="flex items-center gap-2"><span><FaVideo></FaVideo></span> <span>{Time}</span></p>
            <p className="flex items-center gap-2"><span><FaClock></FaClock></span> <span> {duration}</span></p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${id}`} className="btn btn-primary">
            Get premium access
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Course;
