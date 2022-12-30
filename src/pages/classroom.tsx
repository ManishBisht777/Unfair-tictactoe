import React from "react";
import { Link } from "react-router-dom";

function Classroom() {
  return (
    <div>
      <Link to="/match/teacher">VS Teacher</Link>
      <Link to="/match/student">VS Student</Link>
    </div>
  );
}

export default Classroom;
