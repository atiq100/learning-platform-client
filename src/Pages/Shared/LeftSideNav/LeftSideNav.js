import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses,setCourses]=useState([])

    useEffect( () => {
        fetch('http://localhost:5000/allcourses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='mt-6 '>
            {
                courses.map(course => <p key ={course.id} className='text-primary text-lg'>
                    <Link to={`/course/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;