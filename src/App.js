import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/About";

const App = () => {
  return(
    <div>
      {
      //<Header />
      }
      <Body />

    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
  },
  {
    path : '/about',
    element : <About />,
  }
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router = {appRouter} />);
