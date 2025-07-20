import { useState } from 'react';
import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (!courses) return []; // null check
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        allCourses.push(...courseCategory);
      });
      return allCourses;
    } else {
      return courses[category] || []; // fallback to empty array
    }
  };

  const courseList = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {courseList.length === 0 ? (
        <p className="text-white text-2xl font-bold mt-6 text-center animate-bounce opacity-0 animate-fade-in">No Courses Found</p>
      ) : (
        courseList.map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      )}
    </div>
  );
};

export default Cards;
