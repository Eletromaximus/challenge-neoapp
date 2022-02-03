import { configureStore } from '@reduxjs/toolkit'
import userReducerOptions from './userOptionsSlice'
import userReducerCart from './userCartSlice'

export const store = configureStore({
  reducer: {
    options: userReducerOptions,
    cart: userReducerCart
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
