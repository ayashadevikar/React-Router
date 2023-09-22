import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/About';
import Contact from "./Components/Contact"


import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';

const appRouter = createBrowserRouter([
  {
    
      path:"/",
      element:<App/>,
        children:[
      {
        path:"/Home",
        element:<Home/>,
      },
      {
      path:"/About",
      element:<About/>,
      },
      {
      path:"/Contact",
      element:<Contact/>,
      }
    ]
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
  </React.StrictMode>
);


