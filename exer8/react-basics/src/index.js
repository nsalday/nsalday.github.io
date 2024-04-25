import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Accessories from './components/accessories-component';
import Appliances from './components/appliances-component';
import Gadgets from './components/gadgets-component';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/appliances",
        element: <Appliances/>,
      },
      {
        path: "/accessories",
        element: <Accessories/>,
      },
      {
        path: "/gadgets",
        element: <Gadgets/>,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);