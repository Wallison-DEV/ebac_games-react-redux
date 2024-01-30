import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
