import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About This Project</h1>
      <div className="content">
        <section>
          <h2>Project Overview</h2>
          <p>
            This portfolio showcases a collection of interactive widgets built
            with React. Each widget demonstrates different React concepts and
            patterns.
          </p>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>SCSS</li>
            <li>React Hooks</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
