import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../../Courses/Courses';

const CourseSummary = () => {
    const allCourses = useLoaderData()
    return (
        <div className='mt-6 grid md:grid-cols-2 gap-2 '>
            
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