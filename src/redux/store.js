import { configureStore } from '@reduxjs/toolkit'
import { MovieApi } from './api'

export const store = configureStore({
  reducer: {
    [MovieApi.reducerPath]: MovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieApi.middleware),
})