import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './libs/i18n'
import './index.css'

import Home from './pages/Home'
import Greet from './pages/Greet'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/greet",
    element: <Greet />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
