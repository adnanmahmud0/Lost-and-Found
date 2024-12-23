import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './root/Root';
import Home from './component/page/home/Home';
import LostAndFound from './component/page/lostAndFound/LostAndFound';
import AddItem from './component/page/addItem/AddItem';
import Login from './component/auth/Login';
import Register from './component/auth/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/lost-and-found",
        element: <LostAndFound></LostAndFound>,
      },
      {
        path: "/add-items",
        element: <AddItem></AddItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
