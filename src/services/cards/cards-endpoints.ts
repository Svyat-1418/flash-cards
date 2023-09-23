import { isEmpty } from 'remeda'

import { baseApi } from '../base-api.ts'

import {
  CreateCardArgs,
  CreateCardResponse,
  DeleteCardArgs,
  GetCardsArgs,
  GetCardsResponse,
  UpdateCardArgs,
} from './types.ts'

const cardsEndpoints = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, GetCardsArgs>({
      query: ({ deckId, ...params }) => {
        return {
          url: `decks/${deckId}/cards`,
          params: isEmpty(params) ? undefined : params,
        }
      },
      providesTags: ['Cards'],
    }),
    createCard: builder.mutation<CreateCardResponse, CreateCardArgs>({
      query: ({ deckId, ...body }) => ({
        url: `decks/${deckId}/cards`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
    updateCard: builder.mutation<CreateCardResponse, UpdateCardArgs>({
      query: ({ cardId, ...body }) => ({
        url: `cards/${cardId}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<void, DeleteCardArgs>({
      query: ({ cardId }) => ({
        url: `cards/${cardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardsEndpoints
