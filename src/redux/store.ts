import { configureStore } from '@reduxjs/toolkit'
import skipsReducer from './skipsSlice'

export const store = configureStore({
  reducer: {
    skips: skipsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
