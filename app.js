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
  <React.Fragment>
    <Heading1/>
    <Heading1></Heading1>
    {Heading1()}
  </React.Fragment>
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
