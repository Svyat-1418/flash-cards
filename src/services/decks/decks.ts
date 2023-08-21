import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { DecksRequestType, DecksResponseType } from './types.ts'

export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, DecksRequestType>({
      query: params => ({
        url: `decks`,
        params: params && params,
      }),
    }),
  }),
})

export const { useGetDecksQuery } = decksApi
