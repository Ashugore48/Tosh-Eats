import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart"
import SignupForm from "./components/Signupform";
import Login from "./components/Login";
import RestaurantDetails from "./components/RestaurantDetails";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";



// Creating React Root
const root = ReactDOM.createRoot(document.getElementById("container"));

//App layout 
const AppLayout = () => {
  return (
    <Provider store = {store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};


//routing path using react-router-dom
const appRounter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Restaurant/:id",
        element : <RestaurantDetails />,
      },
      {
        path: "/Cart",
        element : <Cart />,
      },
      {
        path: "/SignupForm",
        element : <SignupForm />,
      },
      {
        path: "/login",
        element : <Login />,
      }

    ]
  },
]);



// Rendering App layout in root(DOM)
root.render(<RouterProvider router = {appRounter}/>);
