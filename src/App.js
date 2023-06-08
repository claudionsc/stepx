import { Home } from "./components/pages/home/Home";
import './styles/global.css'
import CartAsideContext from "./components/contexts/cartAside/CartAsideContext";
import HasSizesContexts from "./components/contexts/hasSizes/HasSizesContexts";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import PricesContexts from "./components/contexts/prices/PricesContexts";
import { AnimationBg } from "./components/animations/AnimationBg";
import SizeToCart from "./components/contexts/sizesToCart/SizesToCart";

function App() {

  const [cart, setCart] = useState(false)
  const [size, setSize] = useState(37)
  const [prices, setPrices] = useState('todos')
  const [sizeToCart, setSizeToCart] = useState(0)


  return (
    <Provider store={store}>
      <CartAsideContext.Provider value={{ cart, setCart }}>
        <HasSizesContexts.Provider value={{ size, setSize }}>
          <PricesContexts.Provider value={{ prices, setPrices }}>
            <SizeToCart.Provider value={{ sizeToCart, setSizeToCart }}>

              <div className="App">
                <AnimationBg />
                <Outlet />
              </div>
            </SizeToCart.Provider>

          </PricesContexts.Provider>
        </HasSizesContexts.Provider>
      </CartAsideContext.Provider>
    </Provider>


  );
}

export default App;
