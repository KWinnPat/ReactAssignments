import React from "react";
import { Link } from "react-router-dom";

const WidgetCard = ({ name, title, description }) => {
  return (
    <div className="widget-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/widget/${name}`} className="demo-button">
        View Demo
      </Link>
    </div>
  );
};

export default WidgetCard;
