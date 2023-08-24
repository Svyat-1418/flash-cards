import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { authApi } from '../services/auth/auth.ts'
import { baseApi } from '../services/base-api.ts'
import { decksApi } from '../services/decks/decks.ts'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [decksApi.reducerPath]: decksApi.reducer,
    // [cardsApi.reducerPath]: cardsApi.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(decksApi.middleware)
      .concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
