import { baseApi } from '../base-api.ts'

import {
  AddDeckRequestType,
  DecksRequestType,
  DecksResponseType,
  DeleteDeckRequestType,
  DeleteDeckResponseType,
  Deck,
  UpdateDeckRequestType,
} from './types.ts'

export const decksEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponseType, DecksRequestType>({
      query: params => ({
        url: `decks`,
        params: params && params,
      }),
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<Deck, AddDeckRequestType>({
      query: body => ({
        url: `decks`,
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: body => ({
        url: `decks/${body.id}`,
        method: `DELETE`,
      }),
      invalidatesTags: ['Decks'],
    }),
    updateDeck: builder.mutation<Deck, UpdateDeckRequestType>({
      query: ({ id, ...body }) => ({
        url: `decks/${id}`,
        method: `PATCH`,
        body,
      }),
      invalidatesTags: ['Decks'],
    }),
    getDeckById: builder.query<DeleteDeckResponseType, DeleteDeckRequestType>({
      query: ({ id }) => ({
        url: `decks/${id}`,
        method: `GET`,
      }),
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
  useGetDeckByIdQuery,
} = decksEndpoints
