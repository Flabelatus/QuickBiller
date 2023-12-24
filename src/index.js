import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Register from './components/Register'

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <App />,
    "errorElement": <ErrorPage></ErrorPage>,
    "children": [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
