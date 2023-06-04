import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App';
import { Product } from './components/pages/products/Product';
import { Home } from './components/pages/home/Home';
import { CartWide } from './components/pages/cart/cartWide/CartWide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/cart",
        element: <CartWide />
      },
      {
        path: "/login",
        element: <CartWide />
      },
      
    ]
  },
  {
   
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);