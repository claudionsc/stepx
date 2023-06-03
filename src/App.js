import { Home } from "./components/pages/home/Home";
import './styles/global.css'
import CartContext from "./components/contexts/CartContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";



function App() {

  const [cart, setCart] = useState(false)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className="App">
        <Outlet />
      </div>
    </CartContext.Provider>
  );
}

export default App;
