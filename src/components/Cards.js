import React from 'react'
import Card from './Card'; 
import {useState} from 'react'; 

function Cards(props) {

    const[likedCourses, setLikedCourses] = useState( [] );

    let courses = props.courses;
    function getCourses(){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData); 
            })
        })
        return allCourses;
    }; 

  return (
    <div>
         {
            getCourses().map( (course) => {
                return <Card course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            })
         }   
    </div>
  )
}

export default Cards;