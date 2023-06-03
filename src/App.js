import { Home } from "./components/pages/home/Home";
import './styles/global.css'
import CartAsideContext from "./components/contexts/CartAsideContext";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'



function App() {

  const [cart, setCart] = useState(false)

  return (
    <Provider store={store}>
      <CartAsideContext.Provider value={{ cart, setCart }}>
        <div className="App">
          <Outlet />
        </div>
      </CartAsideContext.Provider>
    </Provider>
  );
}

export default App;
