import { Home } from "./components/pages/home/Home";
import './styles/global.css'
import CartContext from "./components/contexts/CartContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'



function App() {

  const [cart, setCart] = useState(false)

  return (
    <Provider store={store}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <Outlet />
        </div>
      </CartContext.Provider>
    </Provider>
  );
}

export default App;
