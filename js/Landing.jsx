import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>Fun Video 4 U</h1>
    <input type="text" placeholder="search" />
    <Link to="/search">or Browse all </Link>
  </div>
);

export default Landing;
