import React from 'react';
import { useParams } from 'react-router-dom';

const courseData = {
  '1': {
    title: 'Introduction to JavaScript',
    description: 'Learn the basics of JavaScript, the language of the web.',
    content: 'Variables, functions, loops, DOM manipulation, etc.',
  },
  '2': {
    title: 'Python for Beginners',
    description: 'Start coding in Python with simple examples.',
    content: 'Syntax, functions, data structures, and more.',
  },
};

function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Content:</strong> {course.content}</p>
    </div>
  );
}

export default CourseDetail;

