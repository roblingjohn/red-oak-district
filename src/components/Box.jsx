import React from "react";
import { Link } from "react-router-dom";

const Box = ({route, displayName}) => {
  return (
    <div className="box-wrapper">
      <div className="box-content">
        <h2>
          <Link to={route}>{displayName}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Box;
