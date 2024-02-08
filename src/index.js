import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/sb-admin-2.css';
import './assets/css/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/pages/Login';
import RegisterPage from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';
import Workspace from './components/pages/Workspace';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/workspace",
    element: <Workspace />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);