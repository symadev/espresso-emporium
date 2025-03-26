import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Update from './Component/Update.jsx';
import Add from './Component/Add.jsx';
import LogOut from './Component/LogOut.jsx';
import Login from './Component/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=>fetch('http://localhost:5000/coffee')
  },
  {
    path: "/update/:id",
    element: <Update></Update>,
    loader: ({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/add",
    element: <Add></Add>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/logout",
    element: <LogOut></LogOut>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
