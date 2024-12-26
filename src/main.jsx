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
import AuthProvider from './component/authProvider/AuthProvider';
import ForgetPassword from './component/auth/ForgetPassword';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import Item from './component/page/lostAndFound/Item';
import MyItems from './component/page/myItems/MyItems';
import EditMyItems from './component/page/myItems/EditMyItems';
import AllRecoverdItem from './component/page/myItems/AllRecoverdItem';


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
        element: <PrivateRoute><LostAndFound></LostAndFound>,</PrivateRoute>,
        loader: () => fetch("http://localhost:5000/items"),
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
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>
      },
      {
        path: "/item/:id",
        element: <PrivateRoute><Item></Item></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/my-items",
        element: <PrivateRoute><MyItems></MyItems></PrivateRoute>,
      },
      {
        path: "/edit-my-items/:id",
        element: <PrivateRoute><EditMyItems></EditMyItems></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`),
      },
      {
        path: "/all-recoverd-items",
        element: <PrivateRoute><AllRecoverdItem></AllRecoverdItem></PrivateRoute>,
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
