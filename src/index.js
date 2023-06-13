import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  useParams
} from 'react-router-dom'
import App from './App';
import { Product } from './components/pages/products/Product';
import { Home } from './components/pages/home/Home';
import { CartWide } from './components/pages/cart/cartWide/CartWide';
import { Checkout } from './components/pages/checkout/Checkout';

function ProductUrl() {
  let { id } = useParams();
}



const router = createBrowserRouter([

  {
    path: "/stepx/",
    element: <App />,
    children: [
      {
        path: "/stepx/",
        element: <Home />
      },
      {
        path: "/stepx/:id",
        element: <Product />
      },
      {
        path: "/stepx/cart",
        element: <CartWide />
      },
      {
        path: "/stepx/checkout",
        element: <Checkout />
      },
      {
        path: "/stepx/login",
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