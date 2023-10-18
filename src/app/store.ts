import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { baseApi } from '../services/base-api.ts'
import { cardsSlice } from '../services/cards/cards.slice.ts'
import { decksSlice } from '../services/decks/deck-query-params.slice.ts'

export const store = configureStore({
  reducer: {
    [cardsSlice.name]: cardsSlice.reducer,
    [decksSlice.name]: decksSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
