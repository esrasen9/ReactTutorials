import React from 'react';

const Course = ({title,desc,img}) => (
  <li className="course media group">
    <img className="course-img" src={img} alt="course" />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </li>
);

export default Course;