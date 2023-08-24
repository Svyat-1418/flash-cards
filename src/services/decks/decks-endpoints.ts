import { baseApi } from '../base-api.ts'

import {
  AddDeckRequestType,
  DecksRequestType,
  DecksResponseType,
  DeleteDeckRequestType,
  DeleteDeckResponseType,
  ItemType,
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
    createDeck: builder.mutation<ItemType, AddDeckRequestType>({
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
    updateDeck: builder.mutation<ItemType, UpdateDeckRequestType>({
      query: body => ({
        url: `decks/${body.id}`,
        method: `PATCH`,
        body: { name: body.name, isPrivate: body.isPrivate },
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useUpdateDeckMutation,
} = decksEndpoints
