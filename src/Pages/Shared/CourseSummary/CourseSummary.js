import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../Courses/Courses';

const CourseSummary = () => {
    const allCourses = useLoaderData()
    return (
        <div className='mt-6 flex'>
            
            {
                allCourses.map(course => <Courses
                    key={course.id}
                    course={course}
                
                    ></Courses>)
            }
            
        </div>
    );
};

export default CourseSummary;