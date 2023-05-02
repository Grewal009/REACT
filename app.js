import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => <h3>React Functional Component2</h3>;

const Heading2 = () => {
  return (
    <div>
      <Heading1 />
      <h2>React Functional Component1</h2>
    </div>
  );
};

const heading = (
  <div>
    <h1>React Element</h1>
    <Heading2 />
  </div>
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
