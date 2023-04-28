import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root.tsx';
import ErrorPage from './ErrorPage.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
