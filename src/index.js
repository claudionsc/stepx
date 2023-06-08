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
import { Purchase } from './components/pages/purchase/Purchase';

function ProductUrl() {
  let { id } = useParams();
}



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
        path: `/:id`,
        element: <Product />
      },
      {
        path: "/cart",
        element: <CartWide />
      },
      {
        path: "/purchase",
        element: <Purchase />
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