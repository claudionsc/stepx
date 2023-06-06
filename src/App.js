import { Home } from "./components/pages/home/Home";
import './styles/global.css'
import CartAsideContext from "./components/contexts/cartAside/CartAsideContext";
import HasSizesContexts from "./components/contexts/hasSizes/HasSizesContexts";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'



function App() {

  const [cart, setCart] = useState(false)
  const [size, setSize] = useState(37)


  return (
    <Provider store={store}>
      <CartAsideContext.Provider value={{ cart, setCart }}>
        <HasSizesContexts.Provider value={{ size, setSize }}>

          <div className="App">
            <Outlet />
          </div>
        </HasSizesContexts.Provider>

      </CartAsideContext.Provider>
    </Provider>
  );
}

export default App;
