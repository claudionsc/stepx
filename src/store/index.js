import {  configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotal: 0
}

// ACTIONS 

export const showItems = createAction('showItems')
export const addQtd = createAction('addQtd')
export const removeItems = createAction('removeItems')
export const cleanCart = createAction('cleanCart')
export const decreaseCart = createAction('decreaseCart')
export const getTotals = createAction('getTotals')

const ItemReducers = createReducer(INITIAL_STATE, {
  [showItems]: (state, action) => {

    const itemIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    if (itemIndex >= 0){
      state.cartItems[itemIndex].cartQtd += 1
    } else {
      const qtd = { ...action.payload, cartQtd: 1};
      state.cartItems.push(qtd)
    }

    localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal))
    
  },

  [decreaseCart]: (state, action) => {
    const itemIndex = state.cartItems.findIndex(
      cartItems => cartItems.id === action.payload.id
    )

    if(state.cartItems[itemIndex].cartQtd > 1){
      state.cartItems[itemIndex].cartQtd -= 1
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
    state.cartTotal = 0
    localStorage.setItem('cartitems', JSON.stringify(state.cartItems))
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
      item: ItemReducers
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware)
})