import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './providers/AuthProvider';
import AddAToy from './components/AddAToy/AddAToy';
import AllToys from './components/AllToys/AllToys';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyToys from './components/MyToys/MyToys';
import Blogs from './components/Blogs/Blogs';
import ToyDetails from './components/ToyDetails/ToyDetails';
import Update from './components/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/addToy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/toys')
      },
      {
        path: "/myToys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
