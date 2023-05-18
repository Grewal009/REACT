import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

const App = () => {
  return(
    <div>
      <Header />
      <Body />

    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Error />,
    children : [
      {
        path : '/about',
        element : <About />,
      },
      {
        path : '/contact',
        element : <Contact />,
      }
    ]
  },
 
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router = {appRouter} />);
