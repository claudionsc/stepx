import {  configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotal: 0,
  cartSubtotal: 0,
  // cartSize: 0
}

const PRODUCTS_STATE = {
  product: localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [],
  sizeToProduct: localStorage.getItem("sizeToCart") ? JSON.parse(localStorage.getItem("sizeToCart")) : []
}

// ACTIONS CART

export const showItems = createAction('showItems')
export const addQtd = createAction('addQtd')
export const removeItems = createAction('removeItems')
export const cleanCart = createAction('cleanCart')
export const decreaseCart = createAction('decreaseCart')
export const getTotals = createAction('getTotals')
export const getSubtotal = createAction('getSubTotal')

// ACTIONS PRODUCTS

export const showProducts = createAction('showProducts')
export const addSizeToProduct = createAction('addSizeToProduct')


// CART REDUCERS
const ItemReducers = createReducer(INITIAL_STATE, {
  [showItems]: (state, action) => {

    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    const sizeToCart = localStorage.getItem("sizeToCart")



    if (itemIndex >= 0){
      state.cartItems[itemIndex].cartQtd += 1
      state.cartItems[itemIndex].size.push(sizeToCart)
      
    } else {
      const qtd = { ...action.payload, cartQtd: 1, size: [sizeToCart]};

      console.log(qtd)
      state.cartItems.push(qtd)

      // if(qtd.cartQtd > 1){
      //   state.cartItems[itemIndex].size = [state.cartItems[itemIndex].size, sizeToCart]
      // }

      
    }
   

    // if(state.cartItems.cartQtd > 1){
    //   state.cartItems[itemIndex].size.push(...sizeToCart, sizeToCart)
    // }

    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
    // localStorage.setItem("cartSize", JSON.stringify(state.cartSize))
    
  },

  [removeItems]: (state, action) => {
    const nextCartItem = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
    )
    state.cartItems = nextCartItem
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

},

  [decreaseCart]: (state, action) => {
    const itemIndex = state.cartItems.findIndex(
      cartItems => cartItems.id === action.payload.id
    )

    if(state.cartItems[itemIndex].cartQtd > 1){
      state.cartItems[itemIndex].cartQtd -= 1
      state.cartItems[itemIndex].size.pop()
    } else if (state.cartItems[itemIndex].cartQtd === 1){
      const nextCartItem = state.cartItems.filter(
        cartItems => cartItems.id !== action.payload.id
      )
      state.cartItems = nextCartItem
    }
    localStorage.setItem('cartItem', JSON.stringify(state.cartItems))
  },

  [cleanCart]: (state, action) => {
    state.cartItems = []
    
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  },

  [getTotals]: (state, action)  => {
    const { qtd } = state.cartItems.reduce(
      (cartTotal, cartItems) => {
        const { cartQtd } = cartItems;
        cartTotal.qtd += cartQtd

        return cartTotal
      },
      {
        qtd: 0
      }
    );
    state.cartTotal = qtd
    localStorage.setItem('cartTotal', JSON.stringify(state.cartTotal))
  }, 

  [getSubtotal]: (state, action) => {
    let {total, quantity}= state.cartItems.reduce(
      (cartTotal, cartItem) => {
      const { preco, cartQtd } = cartItem;
      const itemTotal = preco * cartQtd;

      cartTotal.total += itemTotal
      cartTotal.quantity += cartQtd

      return cartTotal;
    }, {
        total: 0,
        quantity: 0
    })

    state.cartTotal = quantity;
    state.cartSubtotal = total;
  }
  
})

// PRODUCTS REDUCERS

const ProductReducers = createReducer(PRODUCTS_STATE, {
  [showProducts]: (state, action) => {
    const products = {...action.payload}
    state.product = products

    localStorage.setItem("product", JSON.stringify(state.product))
  },

  [addSizeToProduct]: (state, action) => {
    const size = action.payload
    state.sizeToProduct = size
    

    localStorage.setItem("sizeToCart", JSON.stringify(state.sizeToProduct))
  }
})

const loggerMiddleware = store => next => action => {
  next(action)
}

// const confirmMiddleware = store => next => action => {
//     if (action.type === removeFrutas.type) {
//         next(action)
//     } else {
//         next(action)
//     }

// }

export default configureStore({
  reducer: {
      item: ItemReducers,
      product: ProductReducers
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware)
})