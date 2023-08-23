import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { AddDeckRequestType, DecksRequestType, DecksResponseType, ItemType } from './types.ts'

export const decksApi = createApi({
  reducerPath: 'decksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
  }),
  tagTypes: ['Decks'],
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, DecksRequestType>({
      query: params => ({
        url: `decks`,
        params: params && params,
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<ItemType, AddDeckRequestType>({
      query: body => ({
        url: `decks`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
