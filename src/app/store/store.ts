import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@services/base-api'
import { cardsSlice } from '@services/cards/cards.slice'
import { decksSlice } from '@services/decks/deck-query-params.slice'

export const store = configureStore({
  reducer: {
    [cardsSlice.name]: cardsSlice.reducer,
    [decksSlice.name]: decksSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
