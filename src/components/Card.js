import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Card( {course, likedCourses, setLikedCourses} ) {

  function clickHandler(){

    if(likedCourses.includes(course.id)) {
      setLikedCourses( (prev) => prev.filter( (cid) => cid !== course.id ) );
      toast('Like Removed');
    }
    else{

      if(likedCourses.length===0){
        setLikedCourses([course.id]); 
      }
      else{
        setLikedCourses( (prev) => [...prev, course.id] ); 
    }
    toast('Liked Successfully'); 

  };

  return (
    <div>
        <div>
            <img src={course.image.url} />
            <button onClick={clickHandler}>
              Click to Like
            </button>
        </div>
        <div>
            <p>{course.title}</p>
            <p> {course.description} </p>
        </div>
    </div>
  ); 
 }
}
export default Card; 