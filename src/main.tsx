import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/Root.tsx';
import ErrorPage from './ErrorPage.tsx';
import Taiwan from './routes/Taiwan.tsx';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css'
import { TaiwanIndex, TaiwanDay } from './routes/TaiwanDay.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, 
    errorElement: <ErrorPage />,
  },
  {
    path: "/taiwan",
    element: <Taiwan />,
    children:[
      {
        index:true,
        element:<TaiwanIndex />,
      },
      {
        path: ":dayId",
        element: <TaiwanDay />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
