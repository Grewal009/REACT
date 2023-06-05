import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUI from "./components/ShimmerUI";
import {Provider} from 'react-redux';
import store from "./utils/store";
import Cart from "./components/Cart";

//Code Splitting / Chunking / Dymanic Loading / Lazy Loading
const About = lazy(()=>{ return import("./components/About")});

const App = () => {
  return(
    <div>
      <Provider store={store}>
          {
          <Header />
          }
          <Outlet />
      </Provider>

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
        path : '/',
        element : <Body />,
      },
      {
        path : '/about',
        element :<Suspense fallback={<ShimmerUI />}>
                    <About />
                  </Suspense> ,
      },
      {
        path : '/contact',
        element : <Contact />,
      },
      {
        path : '/restaurant/:id',
        element : <RestaurantMenu />
      },
      {
        path : '/cart',
        element : <Cart />
      }
    ]
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router = {appRouter} />);
