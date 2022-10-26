import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Join an Online Course</h1>
      <p className="mb-5">We want to be your biggest resource. Whether you are new to faith or new to Newbreak, you can choose the Next Steps course and learn how your new faith intersects with your life.</p>
      <Link to='/courses' className="btn btn-primary">Start the course</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;